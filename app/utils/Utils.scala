package utils

import java.io.InputStream
import java.net.URLEncoder
import play.api.{Play, Logger}

object Utils {

   /** generate a css class of 'current' if this navigation link represents the current option */
   def cssClass(label: String, context: String): String = 
     if (label == context) "current" else ""

   /** convert an input stream to a byte array */
   def toByteArray(is: InputStream) : Array[Byte] = {
      Iterator continually is.read takeWhile (-1 !=) map (_.toByte) toArray
   }

   val maxPageLinks = 10

   /** get the start page for a set of paging links */
   def getStartPage(totalPages: Int, currentPage: Int) : Int = {
      val startPage = 
      if (totalPages < maxPageLinks) {
        1
      }
      else if ((totalPages - currentPage) < 10) {
        totalPages - maxPageLinks + 1
      }
      else if (currentPage < (maxPageLinks / 2)) {
        1
      }
      else {
        currentPage - (maxPageLinks / 2)
      }
      Logger.debug(currentPage + " of " + totalPages + " start page: "  + startPage)
      startPage
   }

   def getNumberOfLinks(totalPages: Int, currentPage: Int): Int = {
      val startPage = getStartPage(totalPages, currentPage)
      val links = maxPageLinks min (totalPages - startPage)
      Logger.debug("no. of links " + links)
      links
   }

   /* build a predicate search term that will become part of a url option string from the optional search predicate */
   def predicateTerm(searchPredicate: Option[String]): String = searchPredicate.map( p => "&predicate=" + URLEncoder.encode(p, "UTF-8")).getOrElse("")

   
   /** MusicRest returns all error responses prefaced by the ': 400'   (invalid request) code.  
    *  Also, Dispatch stupidly prefaces this with its own message.  
    *  So we just sanitize errors we know about by relocating to the ': 400' part.
    */
   def sanitizeErrorMessage(message: String): String = {
     val errorCodePosition = message.indexOf(": 400")
     if (-1 == errorCodePosition)
       message
     else
       message.substring(errorCodePosition + 5)
   }
   
   def remoteService = {
     val remoteServer = Play.current.configuration.getString("musicrest.server").getOrElse("localhost:8080/musicrest/")
     "http://" + remoteServer  
   }
   
   /* quick and dirty parse of the ABC HTML to see if this user is the submitter */
   def isSubmitter(user: Option[String], abc: String): Boolean = {
     user.map{u =>
       abc.contains("submitted by " + u + "<br")
     }.getOrElse(false)
   }
   
   def isUserOrAdministrator(user: Option[String], target: String): Boolean = {
     user.map{u =>
       (u == "administrator") || (u == target)
     }.getOrElse(false)
   }   
}
