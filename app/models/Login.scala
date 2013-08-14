package models

case class Login(name: String, password: String)
case class PasswordReminder(name: String)

object Login {
  
  def create(name: String, password: String) {}
  
  def remove(name: String) {}
  
}
