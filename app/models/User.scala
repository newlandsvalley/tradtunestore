package models

import play.api.data.validation._

case class User(name: String, email: String, password: String)

object User {
  
  def create(name: String, email: String, password: String) {}
  
  def delete(name: String) {}
  
  val emailConstraint: Constraint[String] = Constraint("constraints.emailcheck")({
    email =>  {  
      if (email.contains('@')) {
        Valid
      }
      else {
        Invalid(Seq(ValidationError("Invalid email address")))
      }
    }
  })
  
  val passwordConstraint: Constraint[String] = Constraint("constraints.passwordcheck")({
    password =>  {    
       val errors = new scala.collection.mutable.ListBuffer[ValidationError]()
       if (password.trim.length < 7) 
         errors += ValidationError("At least 7 characters required")
       if (!password.exists(_.isDigit)) 
         errors += ValidationError("At least one digit required")
       if (!password.exists(_.isLetter)) 
         errors += ValidationError("At least one letter required")
         
    if (errors.isEmpty) {
      Valid
    } else {
      Invalid(errors.toList)
    }
    }
  })
  
}


