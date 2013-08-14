package controllers
import play.api.mvc.{Action, Controller}

object HelloWorld extends Controller { 

  def hello = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("userName")
       Ok(views.html.helloworld("John"))
    }
  }

}

