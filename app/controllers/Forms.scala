package controllers

import play.api._
import play.api.data._
import play.api.data.Forms._
import play.api.data.validation.Constraints._
import play.api.data.validation._
import models.{Login, PasswordReminder, Search, AdvancedSearch, Tune, AlternativeTitle, User, Comment}
import utils.Proxy

object Forms {

  type UserFields = (String, String, String, String)
  type UserConstraint = UserFields => ValidationResult
  type UserValidation = UserFields => Boolean
  

  val loginForm = Form(
    mapping (
      "name" -> text,
      "password" -> text
    ) (Login.apply)(Login.unapply)
    verifying ("user not registered", f => Proxy.checkUser(f.name, f.password))
  ) 
  
   val passwordReminderForm = Form(
    mapping (
      "name" -> text
    ) (PasswordReminder.apply)(PasswordReminder.unapply)
  ) 


  val registrationForm = Form(
    mapping (
      "name" -> (text verifying (pattern("""^[A-Za-z]([A-Za-z0-9_-]){5,24}$""".r, error="Names should start with a letter, be at least 5 characters, and may contain underscore or minus"))),
      "email" -> text, 
      // Create a tuple mapping for the password/confirm
      "password" -> tuple(
        "main" -> text(minLength = 7),
        "confirm" -> text
       ).verifying (
        // Add an additional constraint: both passwords must match
        "Passwords don't match", passwords => passwords._1 == passwords._2
       ))   
       {
       // Binding: Create a User from the mapping result (ignore the second password)
       (name, email, passwords) => User(name, email, passwords._1) 
       } 
       {
       // Unbinding: Create the mapping values from an existing User value
       user => Some(user.name, user.email, (user.password, ""))
       }
  ) 


  val searchForm = Form(
    mapping (
      "name" -> text,
      "genre" -> text,
      "rhythm" -> text,
      "key" -> text,
      "sort" -> text
    ) (Search.apply)(Search.unapply)
  )
 
  val advancedSearchForm = Form(
    mapping (
      "genre" -> text,
      "criteria" -> text
    ) (AdvancedSearch.apply)(AdvancedSearch.unapply)
  )  

  val tuneForm = Form(
    mapping (
      "genre" -> text,
      "abc" -> text
    ) (Tune.apply)(Tune.unapply)
  ) 

  val alternativeTitleForm = Form(
    mapping (
      "title" -> text
    ) (AlternativeTitle.apply)(AlternativeTitle.unapply)
  ) 
  
  val commentForm = Form(
    mapping (
      "user" -> text, 
      "timestamp" -> longNumber,
      "subject" -> (text verifying (pattern("""[^><]*""".r, error="any character allowed except < and >"))),
      "text" -> (text verifying ( Comment.constraint) )
    ) (Comment.apply)(Comment.unapply)    
  ) 
}
