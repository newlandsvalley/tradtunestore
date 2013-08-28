package utils

import dispatch._
import play.api.mvc.{Request, Session, AnyContent}
import play.api.data.validation.{Constraint, Valid, Invalid, ValidationResult}
import play.api.{Play, Logger}
import scalaz.Validation
import scalaz.Scalaz._
import java.io.{InputStream, InputStreamReader}
import javax.xml.bind.DatatypeConverter
import scala.util.matching.Regex
import models.Search._
import models.{Login, Tune, User, ResultsPage}

/**
 * Proxy uses dispatch as an HTTP client.  This code was developed before the Spray client was developed.
 * Perhaps we ought to upgrade to Spray.  I can't be bothered at the moment.
 * 
 */

object Proxy {
   
   /** check that the musicrest service is up */
   def checkService(): Validation[String, String] = withHttp { 
     http => {   
       val headers = Map("Accept" -> "text/plain; charset=UTF-8")   
       val urlString = Utils.remoteService
       try { 
         val resp = http((url(urlString) <:< headers) as_str)
         resp.success
       }  
       catch {
         case e: Throwable => e.getMessage().fail      
       }
     }
   }

   /** check that a user is registered */
   def checkUser(name: String, password: String): Boolean = {
      val basicAuth = DatatypeConverter.printBase64Binary( (name + ":" + password).getBytes("UTF-8") )
      val userValidation: Validation[String, String] = checkUser(basicAuth)
        userValidation.fold (
           e => false,
           s => true
        )        
   }

   /** check that a user is registered */
   def checkUser(basicAuth: String): Validation[String, String] = withHttp { 
     http => {   
       val headers = Map("Accept" -> "text/plain; charset=UTF-8", "Authorization" -> ("Basic " + basicAuth))   
       val urlString = Utils.remoteService + "user/check"
       try { 
         val resp = http((url(urlString) <:< headers) as_str)
         resp.success
       }  
       catch {
         case e: Throwable => e.getMessage().fail      
       }
     }
   }

   /** post a new tune to musicrest 
    *
    * @param initialRequest - the request to tradtunestore
    * @param tune - the tune details
    * @param saveMode - (true - save to musicrest, false - just try out the transcode)
    */
   def postTune[A](initialRequest: Request[A], tune: Tune, saveMode: Boolean): Validation[String, String] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val urlString = 
        if (saveMode) 
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

       try {
          val resp = http(req as_str)
          // musicrest should give us back the (unencoded) id of the tune
          Logger.debug("posted tune OK, response: " + resp)
          resp.trim.success
       }
       catch {
         case e: Throwable => {
           Logger.error("error (save) found by proxy: " + e)
           e.getMessage().fail      
           }
       }
     }
   }

   /** post an alternative tune title to tradtunestore
    *
    * @param initialRequest - the request to tradtunestore
    * @param genre - the tune genre
    * @param tune - the url-encoded tune id
    * @param title - the alternative title
    */
   def postAlternativeTitle(initialRequest: Request[AnyContent], genre: String, tune: String, title: String): Validation[String, String] = withHttp {   
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

       try {
          val resp = http(req as_str)
          // musicrest should give us back the (unencoded) id of the tune
          Logger.debug("posted tune OK, response: " + resp)
          resp.trim.success
       }
       catch {
         case e: Throwable => {
           Logger.debug("error (save) found by proxy: " + e.getMessage())
           e.getMessage().fail      
           }
       }
     }
   }
 
   /** search for tunes */
   def search(initialRequest: Request[AnyContent], genre: String, predicateOption: Option[String], sort: String, page: Int): Validation[String, ResultsPage] = withHttp {
     http => {
       val headers = Map("Accept" -> "text/html; charset=UTF-8")
       val urlString = predicateOption.map (
         p => Utils.remoteService + "genre/" + genre + "/search?" + p + "&page=" + page.toString + "&sort=" + sort).
              getOrElse(Utils.remoteService + "genre/" + genre + "/search?" + "page=" + page.toString+ "&sort=" + sort)

       Logger.debug("search proxy url is: " + urlString)
       Logger.debug("Proxy requesting page " + page)

       try { 
    
          val resp = http((url(urlString) <:< headers) >+ { r => 
             (r >:> { 
               hs => {
                  val pagination: Option[String] = hs("Musicrest-Pagination").headOption
                  Logger.debug("musicrest pagination header: " + pagination)
                  hs
                 }
              },
              r as_str
              )        
          })
          paginate(resp)
       }
       catch {
         case e: Throwable => {
           e.getMessage().fail      
         }
       }
     }
   }
   
   /** user list */
   def users(initialRequest: Request[AnyContent], pageNo: Int): Validation[String, ResultsPage] = withHttp {
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

       try { 
    
          val resp = http((url(urlString) <:< headers) >+ { r => 
             (r >:> { 
               hs => {
                  val pagination: Option[String] = hs("Musicrest-Pagination").headOption
                  Logger.debug("musicrest pagination header: " + pagination)
                  hs
                 }
              },
              r as_str
              )        
          })
          paginate(resp)
       }
       catch {
         case e: Throwable => e.getMessage().fail      
       }
     }
   }   
   
   /** check that the tune exists */
   def existsTune(initialRequest: Request[AnyContent], genre: String, name: String): Boolean = withHttp {   
     http => {      
       val headers = Map("Accept" -> "text/plain; charset=UTF-8")
       val urlString = Utils.remoteService + "genre/" + genre + "/tune/" + name + "/exists"
        
       def req =  (url(urlString) <:< headers)
       try {
          val resp = http(req as_str)
          Logger.debug("asked if tune exists OK, response: " + resp)
          resp.contains("true")
       }
       catch {
         case e: Throwable => {
           Logger.debug("error (tune exists) found by proxy: " + e.getMessage())
           false    
           }
       }
     }
   }  


   /** delete the tune from musicrest */
   def deleteTune(initialRequest: Request[AnyContent], genre: String, name: String): Validation[String, String] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val basicAuth: Option[String] = session.get("basicauth") 
       val urlString = Utils.remoteService + "genre/" + genre + "/tune/" + name
 
       val builder = Map.newBuilder[String, String]
       builder += "Accept" -> "text/plain"
       basicAuth.foreach( a => builder+="Authorization" -> ("Basic " + a) )
       val headers = builder.result            
       
       def req =  (url(urlString) <:< headers).DELETE 
       try {
          val resp = http(req as_str)
          // musicrest shuld give us back the (unencoded) id of the tune
          Logger.debug("deleted tune OK, response: " + resp)
          resp.trim.success
       }
       catch {
         case e: Throwable => {
           Logger.debug("error (delete) found by proxy: " + e.getMessage())
           e.getMessage().fail      
           }
       }
     }
   }

   /** save a new user to musicrest */
   def saveUser(initialRequest: Request[AnyContent], user: User): Validation[String, String] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val urlString = Utils.remoteService + "user" 
       val headers = Map("Accept" -> "text/plain", "Content-Type" -> "application/x-www-form-urlencoded")
       // both trad tune store and musicrest independently check that the confirmation password matches
       def req =  (url(urlString) <:< headers).POST << Map("name" -> user.name, "email" -> user.email, "password" -> user.password, "password2" -> user.password)

       try {
          val resp = http(req as_str)
          Logger.debug("posted new user OK, response: " + resp)
          resp.trim.success
       }
       catch {
         case e: Throwable => {
           Logger.debug("error (save user) found by proxy: " + e.getMessage())
           e.getMessage().fail      
           }
       }
     }
   }
   
   /** get an emailed reminder of the user's password */
   def remindUserPassword(initialRequest: Request[AnyContent], userName: String): Validation[String, String] = withHttp {   
     http => {      
       val session: Session = initialRequest.session
       val urlString = Utils.remoteService + "user/password/resend" 
       val headers = Map("Accept" -> "text/plain", "Content-Type" -> "application/x-www-form-urlencoded")
       // both trad tune store and musicrest independently check that the confirmation password matches
       def req =  (url(urlString) <:< headers).POST << Map("name" -> userName)

       try {
          val resp = http(req as_str)
          Logger.debug("posted remind user password OK, response: " + resp)
          resp.trim.success
       }
       catch {
         case e: Throwable => {
           Logger.debug("error (remind user password) found by proxy: " + e.getMessage())
           e.getMessage().fail      
           }
       }
     }
   }   

   /** get the abc for a tune in HTML format or ABC format as requested - (we only display HTML in tradtunestore at the moment) 
    *  downloads in vnd.abc format go directly to the backend without need of the proxy
    *  */
   def getAbc(initialRequest: Request[AnyContent], requestedContentType: String, genre: String, tune: String): Validation[String, String] = withHttp {
     http => {
       val headers = requestedContentType match {
         case x @ "text/vnd.abc" => Map("Accept" -> x)
         case _ => Map("Accept" -> "text/html; charset=UTF-8")
       }
       val path = requestedContentType match {
         case "text/vnd.abc" => "/abc"
         case _ => "/html"
       }
       val urlString = Utils.remoteService + "genre/" + genre + "/tune/" + tune + path
       Logger.debug(s"ABC request accept is ${initialRequest.accept}" )

       Logger.debug("proxy url is: " + urlString)

       try { 
         val resp = http((url(urlString) <:< headers) as_str)
         resp.success
       }  
       catch {
         case e: Throwable => {
            e.getMessage().fail      
         }
       }
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
   private def paginate(resp: (Map[String, Set[String]],String)): Validation[String, ResultsPage] = 
     resp match {
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
          page.success              
        }    
     }        
   

}
