package models

case class User(name: String, email: String, password: String)

object User {
  
  def create(name: String, email: String, password: String) {}
  
  def delete(name: String) {}
  
}


