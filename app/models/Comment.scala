package models

import java.text.SimpleDateFormat
import java.util.Date
import java.io.StringReader
import java.net.URLEncoder
import scala.xml.XML
import scala.collection.immutable.VectorBuilder
import play.api.data.validation._
// import play.api.libs.json._
import play.api.Logger
import utils.Proxy
import argonaut._
import Argonaut._
import scalaz._
import Scalaz._


case class Comment (user: String, timestamp: Long, subject: String, private val originalText: String) {
  val dateFormat = new SimpleDateFormat( "EEE, d MMM yyyy 'at' HH:mm:ss " )
  val date = dateFormat.format(new java.util.Date(timestamp))
  val text = replaceDoubleQuotes
  def id: String = user + "_" + timestamp 
  /** replace any double quote with a single quote.  This is needed because, although it can be saved OK at the backend JSON store
   *  (with escaped quotes) the JSON cannot be parsed at the front end by the Play Jerkson parser when we get it back from the backend
   */
  private def replaceDoubleQuotes: String =
    originalText.replaceAllLiterally("\"","'")
  def expanded: Comment =
     Comment(user, timestamp, subject, Comment.macroExpand(text))
}

object Comment {  
  
  // interconversion between the Comment case class and JSON (for argonaut)
  implicit val CodecComment = casecodec4(Comment.apply, Comment.unapply)("user", "cid", "subject", "text")
  
  val constraint: Constraint[String] = Constraint("constraints.commentcheck")({
  plainText =>  {
    val trimmedText = plainText.trim
    val errors = 
      // ban text composed only of space characters
      if (trimmedText.isEmpty) 
        Seq(ValidationError("Empty text"))
      // assume it's XML if it contains  '<' or '>' and validate the XML
      else if (plainText.contains("<") || plainText.contains(">"))
         validate(plainText) 
      // otherwise it's plain text that will possibly need macro-expanding
      else
         // validate(macroExpand(plainText))
        Nil
         
    if (errors.isEmpty) {
      Valid
    } else {
      Invalid(errors)
    }
    }
  })
  
  def validate(text: String):Seq[ValidationError] = {
    // frame with divs and check for well-formedness
    val reader = new StringReader(normalise(text))
    try {      
      val nodes = XML.load(reader)
      Nil
    }
    catch {
      case e:Throwable => {
         Logger.info("invalid comment: " + e.getMessage() + " in: " + text)
         Seq(ValidationError(e.getMessage))
      }
    }
  }
  

  
  private def normalise(text: String): String = {
    // fix for embedded YouTube links which are not well-formed XML
   val ytext = text.replaceAllLiterally("allowfullscreen>",">")
   "<div>" +ytext + "</div>"
  }     
  
  /* macro expand the target, replacing all raw URLs with anchors, quitting at first unexpected error */
  def macroExpand(target: String): String = {
    findUnembeddedUrl(target) match {
      case None => {
        target
        }
      case Some(url) => {
        val (ok, newTarget) = 
          if (isYouTubeUrl(url)) {   
             safeReplaceFirst(target, urlPattern(url), createEmbeddedYouTubeLink(url))
           }
           else  {     
             safeReplaceFirst(target, urlPattern(url), createAnchor(url))
           }
         // quit recursion if we get an unexpected error, otherwise macro-expand the next URL
         if (ok) {
           macroExpand(newTarget)
         }
         else {
           newTarget
         }
       } 
    }
  }
  
  
  /** find the first occurrence of an unembedded URL in the target
   *  (i.e.where it doesn't start with a quote or right angle bracket character)
   */
  def findUnembeddedUrl(target: String):Option[String] = {
    // add an initial space character if one does not exist so we match unembedded urls that start at the first character
    val spaceTarget = 
      if (target.length > 0 && target(0) != ' ')
        " " + target
        else
          target
          
    // pattern contains a first character which spots if it's
    // already an embedded URL reference
    val pattern = """[^'>"]http[s]?:\/\/[^\s]*""".r
    val result = pattern.findFirstIn(spaceTarget) 
    // println(s"result of url regex: ${result}")
    // now lop off the first character
    result.map(r => r.substring(1))
  }
  
  /** find the first occurrence of a YouTube watch URL in the target
   *  (i.e.where it doesn't start with a quote or right angle bracket ch createEmbeddedYouTubeLinkaracter)
   */
  def isYouTubeUrl(url: String):Boolean = {
    val pattern = """http[s]?:\/\/www.youtube.com/watch[^\s]*""".r
    pattern.findFirstIn(url).isDefined 
  }

  

  /* create an anchor tag from a raw URL */
  private def createAnchor(url: String): String = 
    s"""<a href='${url}'>${url}</a>"""
    
  /* create an embedded youtube reference from a raw youtube URL */
  private def createEmbeddedYouTubeLink(url: String): String = {
     // println(s"you tube watch url is ${url}")
     val pattern = """(http[s]?:\/\/www.youtube.com/)watch\?v=(.*)""".r
     val embeddedRef = pattern findFirstIn url match {
        case Some(pattern(base, videoId)) => iframe(videoId)
        case None => url
     }
     // println(s"after expansion ${embeddedRef}")
     embeddedRef
  }    
  
  /* template for the iframe reference to the embedded video */
  private def iframe(videoId: String) = 
    // s"""<iframe width="560" height="315" src="//www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen="true"></iframe>"""  
    s"""<iframe width='420' height='315' src='//www.youtube.com/embed/${videoId}' frameborder='0' allowfullscreen='true'></iframe>"""  
  
  /* convert a URL to a URL regex pattern by escaping the question mark */
  private def urlPattern(url: String): String = 
    url.foldLeft[String]("")((acc, a) => a match {
        case '?' => acc + "\\?"
        case x => acc + x
     }
  )  
  
  /* Safe String replace - return a pair (Boolean, String) where the Boolean represents the success of the replace
   *  and the String is the (possibly replaced) target.  This is because I'm still not sure we can properly identify
   *  all possible URLs and create legitimate regex patterns from them.
   */
  def safeReplaceFirst(target: String, pattern: String, replacement: String): (Boolean, String) = {
    val newTarget = target.replaceFirst(pattern, replacement)
    if (target.length == newTarget.length) {
      Logger.error(s"Unexpected replacement falure: target: ${target}, pattern: ${pattern}, replacement: ${replacement}")
      (false, target)
    }
    else {
      (true, newTarget)
    }
  }  
  
  def xmlEscape(text: String) : String =
     text.foldLeft("")((acc, c) => c match {
       case '&' => acc + "&amp;" 
       case '<' => acc + "&lt;"
       case '>' => acc +  "&gt;"
       case x => acc + x
       }
     )
    
  def help: String = {
    """Your comments can simply be text which may contain links to other sites with recordings or other information about the tune. 
    If you find a YouTube video of the tune, the best technique is to  <a href='https://support.google.com/youtube/answer/171780?hl=en-GB'>follow these instructions</a>
    to embed the video and then copy the code they provide into the text box.  Alternatively you can copy the <em>watch</em> URL of the video you're viewing from your 
    web browser’s address bar and we'll attempt to embed the video into the comment."""
  }   
}

/* a simple list of comments - convenience case class for deserialising JSON */
case class CommentsList(list: List[Comment])

object CommentsList {
  implicit val CodecComments = casecodec1(CommentsList.apply, CommentsList.unapply)("comment")
}

class CommentsModel(val genre: String, val tuneid: String) {
   import CommentsList._
   
   val m = scala.collection.mutable.Map[String, Comment]()
  
   def clear = m.clear
   
   def size = m.size
   
   // def init = add(sample.comment)
   def init = {
     val response = Proxy.getComments(genre, URLEncoder.encode(tuneid, "UTF-8")  )
     response.fold (
       e => Logger.error(s"Error getting comments for ${tuneid} :" + e)
       ,
       s => {
         Logger.debug(s"Got comments json ${s}")
         addFrom(s)
       }
     )
   }
   
   /* add the comments from JSON to the comments model */
   def addFrom(jsonString: String) = {
     val cList = parse(jsonString)
     for {c <- cList} {   
       Logger.debug(s"Adding comment from JSON: ${c.subject}")
       add(c)
     }
   }
   
   /** Parse a JSON string representing a comments list and return the list of comments 
    *  
    *  Sample JSON comments from MusicRest look like this:
    *  
    *   {"comment" :[ {"user": "administrator" ,"cid": "1383835634013" ,"subject": "subject 5" ,"text": "comment 5 text" },
    *                 {"user": "test user" ,"cid": "1383835634003" ,"subject": "subject 4" ,"text": "comment 4 text" }
    *               ]
    *   } 
    *  
    * This implementation relies on Argonaut
    */
   private def parse(jsonString: String): List[Comment] = {     
     val jsonOpt = Parse.parseOption(jsonString) 
     val optList = 
       for {
         json <- jsonOpt
         commentsList <- json.as[CommentsList].toOption
         } yield { commentsList.list}
     optList.getOrElse(Nil)
   }
     
   // add(sample.mimicMusicrestLoad(genre, tuneid))
   
   def isFor(agenre: String, atuneid: String) =
     (genre == agenre) && (tuneid == atuneid)
   
   def add(comment: Comment) = {
     val optComment = get(comment.id)
     optComment match {
       case None => m.+=(comment.id -> comment)
       case Some(oldc) => {
         val newComment = Comment(oldc.user, oldc.timestamp, comment.subject, comment.text)
         m.+=(oldc.id -> newComment)
       }
     }     
   }
   
   def tryComment(comment: Comment): Vector[Comment] = {
     val v:Vector[Comment] = m.values.toVector.sortWith((c1: Comment, c2:Comment) => c2.timestamp > c1.timestamp)
     v :+ comment
   }
   
   def getAll:Vector[Comment] = m.values.toVector.sortWith((c1: Comment, c2:Comment) => c2.timestamp > c1.timestamp)
   
   def get(id: String): Option[Comment] = m.get(id)
   
   
   def delete(id: String): Vector[Comment] = {
     m.remove(id)
     getAll
   }
   
 
   
   /*
   def parse(jsonString: String) = {
     val json: JsValue = Json.parse(jsonString)
     val commentSeq = (json \\ "comment" )
     commentSeq.foreach(arr => {
       // println(s" found JSON comment ${arr} of type ${arr.getClass()}")
       val typedRows:List[scala.collection.Map[String, String]]  = arr match {
         case jsa: JsArray => {           
           // convert the untyped JsArray to something a bit more strongly typed
           val rows: List[scala.collection.Map[String, JsValue]] = jsa.value.toList.map { 
             f => f match {
               case jso: JsObject => {
                 // println(s"found JsObject fields ${jso.fields}")
                 jso.value 
                 }
               case _ => {
                 // println("Expected JsObject Fields")
                 Map[String, JsValue]().empty
                 }
               }
             }     
           // convert the JsValue values to Strings because that is all we have in each JsObject value
           val fieldMapList: List[scala.collection.Map[String, String]]  = rows map { row => row.map( kvs => kvs match {
             case (key: String, svalue: JsString) => (key, svalue.value)
             case (key, _) => ("bad" + key, "")
             } ) }
           fieldMapList
         }
         case _ => List.empty
       }
       typedRows.foreach(r => {
         val commentOption = Comment.fromMap(r)
         commentOption match {
           case Some(c) => add(c)
           case None => Logger.error(s"Could not build Comment from json: ${arr} row: ${r}")
           }
         })// end of typed Rows foreach       
       })  // end of commentSeq foreach
   }
   * 
   */
}

/* just used in testing
object sample {
  val comment = Comment("administrator", System.currentTimeMillis(), "sample comment",
      """<div>
<iframe width="420" heit="315" src="//www.youtube.com/embed/VHHFDAqqSTI" frameborder="0" allowfullscreen></iframe>
</div>""")   
  
  def mimicMusicrestLoad(genre: String, tuneid: String) = Comment("administrator", System.currentTimeMillis(), "sample comment",
      s"sample data loaded from musicrest for genre ${genre} and tune ${tuneid}")   
}
* */

