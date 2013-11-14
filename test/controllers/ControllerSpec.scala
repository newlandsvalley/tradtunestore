package controllers

import scala.collection.Seq
import org.specs2.mutable.Specification
import org.specs2.specification.Fragments
import org.specs2.main.ArgProperty
import play.api.mvc.{Controller,Security}
import play.api.test._
import Helpers._
import javax.xml.bind.DatatypeConverter
import java.net.URLEncoder
import utils.Proxy
import models.{Tune, Comment}

/** These are essentially integration tests. They require a valid musicrest backend to be up and running (itself backed by a Mongo database).
 *  The tests exercise both the controller and the proxy behaviour. The mongo database is required to have only an administrator user
 *  with the password adm1n1str80r  (see testUser below).
 * 
 */

object testUser {
  val name = "administrator"
  val password = "adm1n1str80r"
}

class ControllerSpec extends Specification { 
  
  class TestController() extends Controller with TradTuneController  
  
  val before = {deleteTunesForInsertion; deleteCommentsForInsertion; insertTunes}
  
  "controller" should {
    "home() should be valid" in {
          val controller = new TestController()          
          val result = controller.home()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("search")
    }
    "search() should be valid" in {
          val controller = new TestController()          
          val result = controller.search()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("search")
    }
    "advancedsearch() should be valid" in {
          val controller = new TestController()          
          val result = controller.advancedsearch()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("search")
    }
    "processSearch() should redirect to results" in  new WithApplication {
      
       val formData = Map(
         "genre" -> Seq("irish"),
         "name" -> Seq(""),
         "rhythm" -> Seq("any"),
         "key" -> Seq("any"),
         "sort" -> Seq("alphabetic")
       )
       val resultOption = route(FakeRequest(POST, "/search").withBody(formData))
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           // should result in a redirect to the search results page
           httpStatus must equalTo(SEE_OTHER)
           val location = redirectLocation(result).getOrElse("not redirected")
           location must contain("searchresults")
         }
         case _ => {
           failure("got no response")
         }
       }
    }
    "processAdvancedSearch() should redirect to results" in  new WithApplication {
      
       val formData = Map(
         "genre" -> Seq("irish"),
         "criteria" -> Seq("submitter=administrator")
       )
       val resultOption = route(FakeRequest(POST, "/advancedsearch").withBody(formData))
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           // should result in a redirect to the search results page
           httpStatus must equalTo(SEE_OTHER)
           val location = redirectLocation(result).getOrElse("not redirected")
           location must contain("searchresults")
         }
         case _ => {
           failure("got no response")
         }
       }
    }
    "searchall() should contain results" in new WithApplication {
          val controller = new TestController()          
          val result = controller.searchresults("irish", None, "alphabetic", 1)(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          // println(s"search results: $content")
          content must contain("search results")
          content must contain("genre/irish/tune")
    }
    "processLogin() with bad credentials should give a Bad Request" in  new WithApplication {
      
       val formData = Map(
         "name" -> Seq("unknown"),
         "password" -> Seq("changeit")
       )
       val resultOption = route(FakeRequest(POST, "/login").withBody(formData))
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(BAD_REQUEST)
           val content = contentAsString(result)
           // println(s"search results: $content")
           content must contain("user not registered")
         }
         case _ => {
           failure("got no response")
         }
       }
    }
    "login() should be valid" in  new WithApplication {
          val controller = new TestController()          
          val result = controller.login()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("login")
    }
    "newuser() should be valid" in new WithApplication {
          val controller = new TestController()          
          val result = controller.newuser()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("new user")
    }
    "passwordReminder() should be valid" in new WithApplication {
          val controller = new TestController()          
          val result = controller.passwordReminder()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("password")
    }
    "passwordReminder() with bad credentials should redirect (to error page)" in  new WithApplication {
      
       val formData = Map(
         "name" -> Seq("unknown")
       )
       val resultOption = route(FakeRequest(POST, "/login/password").withBody(formData))
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(SEE_OTHER)
           val location = redirectLocation(result).getOrElse("not redirected")
           location must contain("error")
         }
         case _ => {
           failure("got no response")
         }
       }
    }
    "newtune() when not logged in should give login page" in new WithApplication {
          val controller = new TestController()          
          val result = controller.newtune()(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("password")
    }
    "newtune() with a bad tune should redirect (to error page)" in  new WithApplication {
      
       val formData = Map(
         "genre" -> Seq("irish"),
         "abc" -> Seq("this is not well formed abc")
       )
       val resultOption = route(FakeRequest(POST, "/newtune").withBody(formData))
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(SEE_OTHER)
           val location = redirectLocation(result).getOrElse("not redirected")
           location must contain("error")
         }
         case _ => {
           failure("got no response")
         }
       }
    }
    "newtune() when logged in with a good tune should redirect (to tune page)" in  new WithApplication {
      
       val formData = Map(
         "genre" -> Seq("irish"),
         "abc" -> Seq(figForaKiss)
       )
       
       val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
       
       val resultOption = route(FakeRequest(POST, "/newtune").withBody(formData).withSession(Security.username -> testUser.name, "password" -> testUser.password, "basicauth" -> basicAuth)     )
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(SEE_OTHER)
           val location = redirectLocation(result).getOrElse("not redirected")
           location must contain("tune")
         }
         case _ => {
           failure("got no response")
         }
       }
    }
    "tune() should be valid" in new WithApplication {
          val controller = new TestController()          
          val result = controller.tune("irish", "noon+lasses-reel")(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("noon lasses")
    }
    "comments() should be valid" in new WithApplication {
          val controller = new TestController()          
          val result = controller.comments("irish", "noon+lasses-reel")(FakeRequest())      
          result must not beNull     
          val content = contentAsString(result)
          content must contain("number of comments: 0")
    } 
    "posting a comment when logged in with a good tune should redirect (to comments page)" in  new WithApplication {   
           
       val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
       
       val resultOption = route(FakeRequest(POST, "/genre/irish/tune/noon+lasses-reel/comments").withBody(commentFormData).withSession(Security.username -> testUser.name, "password" -> testUser.password, "basicauth" -> basicAuth)     )
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(OK)  
           val content = contentAsString(result)
           content must contain("number of comments: 1")
         }
         case _ => {
           failure("got no response")
         }
       }    
    }  
    "posting a try comment when logged in with a good tune should redirect (to comments page)" in  new WithApplication {   
           
       val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
       
       val resultOption = route(FakeRequest(POST, "/genre/irish/tune/a+fig+for+a+kiss-slip+jig/comments/try").withBody(commentFormData).withSession(Security.username -> testUser.name, "password" -> testUser.password, "basicauth" -> basicAuth)     )
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(OK)  
           val content = contentAsString(result)
           content must contain("number of comments: 1")
         }
         case _ => {
           failure("got no response")
         }
       }    
    }  
    "deleting a comment when logged in with a good tune should redirect (to comments page)" in  new WithApplication {   
           
       val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
       val tuneId = "a+fig+for+a+kiss-slip+jig"
       val commentId = "administrator_0"
         
       insertSampleComment(tuneId)
       
       val resultOption = route(FakeRequest(GET, s"/genre/irish/tune/${tuneId}/comment/${commentId}/delete").withSession(Security.username -> testUser.name, "password" -> testUser.password, "basicauth" -> basicAuth)     )
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(SEE_OTHER)
           val location = redirectLocation(result).getOrElse("not redirected")
           location must contain("/genre/irish/tune/a+fig+for+a+kiss-slip+jig/comments")
         }
         case _ => {
           failure("got no response")
         }
       }    
    }  
    "editing a comment when logged in with a good tune should redirect (to edit comments page)" in  new WithApplication {   
           
       val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
       val tuneId = "a+fig+for+a+kiss-slip+jig"
       val commentId = "administrator_0"
         
       insertSampleComment(tuneId)
       
       val resultOption = route(FakeRequest(POST, s"/genre/irish/tune/${tuneId}/comment/${commentId}").withBody(commentFormData).withSession(Security.username -> testUser.name, "password" -> testUser.password, "basicauth" -> basicAuth)     )
          
       resultOption match {
         case Some(result) => {              
           result must not beNull    
           val httpStatus = status(result) 
           httpStatus must equalTo(OK)  
           val content = contentAsString(result)
           content must contain("Edit comment")
           content must contain("test subject")
         }
         case _ => {
           failure("got no response")
         }
       }    
    }  
  }
   
  
  /* run these before a test.  We need WithApplication because FakeRequest needs to look up a real configuration */
  def deleteTunesForInsertion = new WithApplication {   
    val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
    val request = FakeRequest().withSession("basicauth" -> basicAuth)     
    Proxy.deleteTune(request, "irish", "a+fig+for+a+kiss-slip+jig")
    Proxy.deleteTune(request, "irish", "noon+lasses-reel")
  }
  
  def deleteCommentsForInsertion = new WithApplication {   
    val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
    val request = FakeRequest().withSession("basicauth" -> basicAuth)  
    Proxy.deleteAllComments(request, "irish")
  }
  
  
  def insertTunes = new WithApplication {   
    val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") ) 
    
    val noonLasses = """X: 1
T: Noon Lasses
T: East Clare, The
M: 4/4
L: 1/8
R: reel
K: Gmaj
E|G2 BG AcBA|GBAG GEDE|G2 BG AGAc|BAGE EDDE|
G2 BG AcBA|GBAG GEDE|G2 BG AGAc|BAGE ED D2||
BddB AGAc|BddB BAAc|BddB AGAc|BAGE ED D2|
BddB AGAc|BddB BAAc|BddB GFGB|ABGE ED D2||
dgbg agbg|dgbg ageg|dgbg ageg|dedc BG G2|
dgbg agbg|dgbg agef|gage dedB|BAGE ED Dd||
edBd edBd|edBA GEEd|edBd edBA|GAGE ED Dd|
edBd edBd|edBA GEEd|edBd ef g2|GAGE ED D||"""
      
    val tune = Tune("irish", noonLasses) 
    val request = FakeRequest().withSession("basicauth" -> basicAuth) 
    val res = Proxy.postTune(request, tune, true)
    println(s"result of posting Noon Lasses $res")
  }
  
  val figForaKiss = """X: 1
T: A Fig For A Kiss
M: 9/8
L: 1/8
R: slip jig
K: Edor
|: G2B E2B BAG | F2A D2A AGF | G2B E2B BAG |
[1 B/c/dB AGF DEF :|2 B/c/dB AGF E3 ||
|: g2e g2e edB | f2d dcd fed |1 g2e g2e edB |
dBG GBd e2f :|2 gfe fed ecA | B/c/dB AGF E2F ||"""
    

 /* two representations of the same sample comment */  
 val commentFormData = Map(
         "user" -> Seq("administrator"),
         "timestamp" -> Seq("0"),
         "subject" -> Seq("test subject"),
         "text" -> Seq("test text")
       )    
       
 val sampleComment = Comment("administrator", 0L, "test subject", "test text")
       
 /* luckily, this is an idempotent operation in MusicRest */
 def insertSampleComment(tuneId: String) = {   
    val basicAuth = DatatypeConverter.printBase64Binary( (testUser.name + ":" + testUser.password).getBytes("UTF-8") )  
    val request = FakeRequest().withSession("basicauth" -> basicAuth)  
    Proxy.postComment(request, "irish", tuneId, sampleComment)
  }

}