package models

import scala.collection.mutable.StringBuilder
import java.net.URLEncoder

case class AdvancedSearch(genre: String, criteria: String) {

  def predicate() : Option[String] = Some(URLEncoder.encode(criteria, "UTF-8"))

}

object AdvancedSearch {
  
  def create(genre: String, criteria: String) {}
  
  
}
