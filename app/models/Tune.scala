package models

case class Tune(genre: String, abc: String)

case class AlternativeTitle(title: String)

object Tune {
  
  def create(genre: String, abc: String) {}
  
  def delete(name: String) {}
  
}
