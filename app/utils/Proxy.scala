package utils

import dispatch._, Defaults._
import play.api.mvc.{Request, Session, AnyContent}
import play.api.data.validation.{Constraint, Valid, Invalid, ValidationResult}
import play.api.{Play, Logger}
import java.io.{InputStream, InputStreamReader}
import scala.util.matching.Regex
import models.Search._
import models.{Login, Tune, User, ResultsPage, Comment}
import utils.Utils._
import com.ning.http.client.Response
import scala.util.{Success, Failure, Try}
import scala.concurrent.{Await, Future}
import scala.concurrent.duration.Duration
import scala.concurrent.duration._
import utils.DispatchWorkaround._

/**
 * Proxy uses dispatch as an HTTP client.  Unfortunately I've just upgraded to the latest release.  This is painful because of the absence of proper documentation.
 * For example, there is no scaladoc, the jokey documentation is trivial, and there are still references to and from the 'periodic table of operators'
 * which a careful analysis of the github code shows no longer to be supported to the same extent.
 *
 * It is also painful because it supports no mechanism of returning the text of an HTTP error to the user in the context of Either disjunctions which it 
 * is so pleased about - all you get is the error code.  Also, there seems to me no easy access to the response headers. 
 */

object Proxy {


   /** this is a hack.  It is intended to replace Dispatch's OK operator with one that will recognise the text of error repsonses
    *  and return either the successful page or an exception which holds the text
    */
   implicit class MyRequestHandlerTupleBuilder(req: Req) {
     def OKOrErr[T](f: Response => T) =
      (req.toRequest, new OkOrErr(f))
   }
   
   /** check that the musicrest service is up */
   def checkService(): Future[Either[Throwable, String]] = withHttp { 
     http => {   
       val headers = Map("Accept" -> "text/plain; charset=UTF-8")   
       val urlString = Utils.remoteService
       val req = url(urlString) <:< headers
       Http(req OKOrErr as.String).either  
     }
   }    

   /** check that a user is registered */
   def checkUser(basicAuth: String): Future[Either[Throwable, String]] = withHttp { 
     http => {   
       val headers = Map("Accept" -> "text/plain; charset=UTF-8", "Authorization" -> ("Basic " + basicAuth))   
       val urlString = Utils.remoteService + "user/check"
       val req = url(urlString) <:< headers
       Http(req OKOrErr as.String).either 
     }
   }
   
   /** register a new user */
   def registerUser(uuid: String):  Future[Either[Throwable, String]]  = withHttp { 
     http => {   
       val headers = Map("Accept" -> "text/html; charset=UTF-8")   
       val urlString = Utils.remoteService + "user/validate/" + uuid
       val req = url(urlString) <:< headers
       Http(req OKOrErr as.String).either
     }
   }
   

   /** post a new tune to musicrest 
    *
    * @param initialRequest - the request to tradtunestore
    * @param tune - the tune details
    * @param saveMode - (true - save to musicrest, false - just try out the transcode)
    * @param temporaryAuth - a temporary basic auth available only for on-the-fly transcoding of ABC generated from midi 
    */
   def postTune[A](initialRequest: Request[A], tune: Tune, saveMode: Boolean, temporaryAuth: Option[String] = None): Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val sessionAuth: Option[String] = session.get("basicauth")
       val basicAuth = if (sessionAuth.isDefined)
                         sessionAuth
                       else
                         temporaryAuth

       val urlString =  if (saveMode) 
          Utils.remoteService + "genre/" + tune.genre + "/tune"
        else
          Utils.remoteService + "genre/" + tune.genre + "/transcode"

       Logger.debug("abc:" + tune.abc)
       
       /** construct the request headers for the proxy */
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       builder += "Content-Type" -> "application/x-www-form-urlencoded"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result
            
       def req =  (url(urlString) <:< headers).POST << Map("abc" -> tune.abc)

       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim
     }
   }

   /** post an alternative tune title to tradtunestore
    *
    * @param initialRequest - the request to tradtunestore
    * @param genre - the tune genre
    * @param tune - the url-encoded tune id
    * @param title - the alternative title
    */
   def postAlternativeTitle(initialRequest: Request[AnyContent], genre: String, tune: String, title: String): Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val urlString = Utils.remoteService + "genre/" + genre + "/tune/" + tune + "/abc"

       Logger.debug("new title url: " + urlString)
       Logger.debug("tune:" + tune + " new title: " + title)
 
       /** construct the request headers for the proxy */
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       builder += "Content-Type" -> "application/x-www-form-urlencoded"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result            
       
       def req =  (url(urlString) <:< headers).POST << Map("title" -> title)  
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }
   
  /** post a new/edited comment to musicrest 
    *
    * @param initialRequest - the request to tradtunestore
    * @param genre the tune genre
    * @param tune the tune name (url encoded)
    * @param comment - the comment
    */
   def postComment[A](initialRequest: Request[A], genre: String, tuneName: String, comment: Comment):  Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val urlString =  Utils.remoteService + s"genre/${genre}/tune/${tuneName}/comments"
       
       Logger.debug("post comment url:" + urlString)
       
       /** construct the request headers for the proxy */
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       builder += "Content-Type" -> "application/x-www-form-urlencoded"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result
       
       def req =  (url(urlString) <:< headers).POST << Map("user" -> comment.user,
                                                           "timestamp" -> String.valueOf(comment.timestamp),
                                                           "subject" -> comment.subject,
                                                           "text" -> comment.text)   
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }
   
   /** delete the comment from musicrest
    *     
    * @param initialRequest - the request to tradtunestore
    * @param genre the tune genre
    * @param tune the tune name (url encoded)
    * @param comment - the comment
    *    
    *    */
   def deleteComment[A](initialRequest: Request[A], genre: String, tuneName: String, comment: Comment):  Future[Either[Throwable, String]]  = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val user = java.net.URLEncoder.encode(comment.user, "UTF-8")
       val commentId = String.valueOf(comment.timestamp)
       val urlString =  Utils.remoteService + s"genre/${genre}/tune/${tuneName}/comment/${user}/${commentId}"
          
       Logger.debug("delete comment url:" + urlString)   
 
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result            
       
       def req =  (url(urlString) <:< headers).DELETE 
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }  
   
 /** delete all the comment within the genre from musicrest
    * (only used as a convenience in tests)     
    *     
    * @param initialRequest - the request to tradtunestore
    * @param genre the tune genre
    * @param tune the tune name (url encoded)
    * @param comment - the comment
    *    
    *    */
   def deleteAllComments[A](initialRequest: Request[A], genre: String): Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val urlString =  Utils.remoteService + s"genre/${genre}/comments"
          
       Logger.debug("delete all comments url:" + urlString)   
 
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result            
       
       def req =  (url(urlString) <:< headers).DELETE 
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }     
   
  def getComments(genre: String, tuneName: String): Future[Either[Throwable, String]] = withHttp {
     http => {
       
       val headers = Map("Accept" -> "application/json; charset=UTF-8")   
       val urlString =  Utils.remoteService + s"genre/${genre}/tune/${tuneName}/comments"

       Logger.debug("get comments url is: " + urlString)
       def req =  (url(urlString) <:< headers)
       Http(req OKOrErr as.String).either 
     }
   }  
 
   /** search for tunes */
   def search(initialRequest: Request[AnyContent], genre: String, predicateOption: Option[String], sort: String, page: Int): Future[Either[Throwable, ResultsPage]] = withHttp {
     http => {
       val headers = Map("Accept" -> "text/html; charset=UTF-8")
       val urlString = predicateOption.map (
         p => Utils.remoteService + "genre/" + genre + "/search?" + p + "&page=" + page.toString + "&sort=" + sort).
              getOrElse(Utils.remoteService + "genre/" + genre + "/search?" + "page=" + page.toString+ "&sort=" + sort)

       Logger.debug("search proxy url is: " + urlString)
       Logger.debug("Proxy requesting page " + page)

       val req =  (url(urlString) <:< headers)
       val resp =  Http(req OKOrErr as.Response(
              x => paginate(scalaHeaders(x.getHeaders()), x.getResponseBody())
       )).either
       resp  
     }
   }
   
   /** user list */
   def users(initialRequest: Request[AnyContent], pageNo: Int): Future[Either[Throwable, ResultsPage]] = withHttp {
     http => {
       // val headers = Map("Accept" -> "text/html; charset=UTF-8")       
 
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       /** construct the request headers for the proxy */
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/html; charset=UTF-8"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result            
       
       val urlString = Utils.remoteService + "user?" + "page=" + pageNo.toString

       Logger.debug("Proxy requesting page " + pageNo)
       val req =  (url(urlString) <:< headers)
       val resp =  Http(req OKOrErr as.Response(
              x => paginate(scalaHeaders(x.getHeaders()), x.getResponseBody())
       )).either
       resp  
     }
   }   
   
 
   /** delete the tune from musicrest */
   def deleteTune(initialRequest: Request[AnyContent], genre: String, name: String): Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val urlString = Utils.remoteService + "genre/" + genre + "/tune/" + name
 
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result        
       def req =  (url(urlString) <:< headers).DELETE 
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }

   /** save a new user to musicrest */
   def saveUser(initialRequest: Request[AnyContent], user: User): Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val urlString = Utils.remoteService + "user" 
       val host = initialRequest.headers.get(play.api.http.HeaderNames.HOST).getOrElse("")
       val refererUrl = "http://" + host + initialRequest.path + "/register"
       val headers = Map("Accept" -> "text/html", "Content-Type" -> "application/x-www-form-urlencoded")
       // both trad tune store and musicrest independently check that the confirmation password matches
       /*
       def req =  (url(urlString) <:< headers).POST << Map("name" -> user.name, 
                                                           "email" -> user.email, 
                                                           "password" -> user.password, 
                                                           "password2" -> user.password)
                                                            
       */      
       def req =  (url(urlString) <:< headers).POST << Map("name" -> user.name, 
                                                           "email" -> user.email, 
                                                           "password" -> user.password, 
                                                           "password2" -> user.password,
                                                           "refererurl" -> refererUrl) 
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }
   
   /** get an emailed reminder of the user's password */
   def remindUserPassword(initialRequest: Request[AnyContent], userName: String): Future[Either[Throwable, String]] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val urlString = Utils.remoteService + "user/password/resend" 
       val headers = Map("Accept" -> "text/plain", "Content-Type" -> "application/x-www-form-urlencoded")
       // both trad tune store and musicrest independently check that the confirmation password matches
       def req =  (url(urlString) <:< headers).POST << Map("name" -> userName)
       val resp =  Http(req OKOrErr as.String).either
       for (r <- resp.right) 
          yield r.trim     
     }
   }   

   /** get the abc for a tune in HTML format or ABC format as requested - (we only display HTML in tradtunestore at the moment) 
    *  downloads in vnd.abc format go directly to the backend without need of the proxy.  We are now going to use JSON as a more
    *  convenient mechanism for decoding into scala case classes in some instances where we need access to the header metadata.
    *  
    *  11/12/2014 - added JSON case
    *  */
   def getAbc(initialRequest: Request[AnyContent], requestedContentType: String, genre: String, tune: String): Future[Either[Throwable, String]] = withHttp {
     http => {
       val headers = requestedContentType match {
         case x @ "text/vnd.abc" => Map("Accept" -> x)
         case y @ "application/json" => Map("Accept" -> y)
         case _ => Map("Accept" -> "text/html; charset=UTF-8")
       }
       val path = requestedContentType match {
         case "text/vnd.abc" => "/abc"
         case "application/json" => "/json"
         case _ => "/html"
       }
       val urlString = Utils.remoteService + "genre/" + genre + "/tune/" + tune + path
       Logger.debug(s"ABC request accept is ${initialRequest.acceptedTypes}" )

       Logger.debug("proxy url is: " + urlString)   
       val req =  (url(urlString) <:< headers)
       Http(req OKOrErr as.String).either 
     }
   }

   private def withHttp [A] (body: (Http) => A) : A = {
      val http = new Http   
      try 
         body(http)
      finally {
        if (null != http) {
        try {
            http.shutdown
        }      	
        catch {
           case e: Exception  => None
        }
      }
    }
   }   
 
   
   /** Build a paginated result set from a search response */
   private def paginate(headers: Map[String, Set[String]], content: String): ResultsPage = 
     (headers, content) match {
        case (headers, content) => {
          val pagination: String = headers("Musicrest-Pagination").headOption.getOrElse("[1 of 1]")
          val paginationExtractor = """^\[([0-9]+) of ([0-9]+)\]""".r
          val page = pagination match {
             case paginationExtractor(pageString, totalPagesString) => {
                 Logger.debug("regex answer = page: (" + pageString + ") total: (" + totalPagesString + ")")
                 ResultsPage(content, pageString.toInt, totalPagesString.toInt)
                 }
             case x => {
                 Logger.error("unexpected regex mismatch " + x)
                 ResultsPage(content, 4, 7)
                 }
          }
          Logger.debug("response headers: " + headers)
          Logger.debug("page " + page.currentPage + " of " + page.totalPages)
          page            
        }    
     }        

  /** resolve a future (returned from the proxy request) 
      This stage handles the logging and manufacture of more sensible error messages for the user
  */  
  def resolveFuture[A] (future: Future[Either[Throwable, A]], timeout:Int = Utils.defaultTimeout): Either[Throwable, A] = {
    val res = resolveFutureWork(future, timeout)
    val newres = res.fold (
      e => {
         Logger.error(s"Proxied request error: $e")
         e match {
           case e1:java.net.ConnectException => Left(TradTuneStoreException("downstream MusicRest server unavailable"))
           case e2:java.util.concurrent.TimeoutException => Left(TradTuneStoreException("connection to downstream MusicRest server timed out"))  
           case _ => Left(e)
         }
       }
      ,
      s => Right(s)
    )
    newres
  }

  /** resolve a future (returned from the proxy request) */  
  private def resolveFutureWork[A] (future: Future[Either[Throwable, A]], timeout: Int): Either[Throwable, A] = {
    try {
      val result: Try[Either[Throwable, A]] = Await.ready(future, Duration(timeout, MILLISECONDS)).value.get
      result match {
        case Success(either) => either
        case Failure(e) => Left(e)
      }
    }
    catch {
      case (e:Throwable) => Left(e)
    }     
  }
 
}
