package models

import scala.collection.mutable.StringBuilder
import java.net.URLEncoder

case class AdvancedSearch(genre: String, criteria: String) {

  def predicate() : Option[String] = urlEncode(criteria)

  // URL encode a search predicate
  def urlEncode(criteria: String) : Option[String] = {
    if (0 == criteria.length()) {
      None
      }
    else {
      val andedTerms = criteria.split('&')
      val encodedTerms = andedTerms.map(encodeTerm)
      Some (encodedTerms.mkString("&"))
    }
  }

  // URL encode an individual anded term in a search predicate
  def encodeTerm(term: String) : String = {
    val equalPos = term.indexOf('=')
    if (-1 == equalPos) {
      URLEncoder.encode(term, "UTF-8")
      }
    else {
      val lhs = term.substring(0, equalPos)
      val rhs = URLEncoder.encode(term.substring(equalPos +1, term.length()),  "UTF-8")
      lhs + "=" + rhs
    }
  }

}

object AdvancedSearch {
  
  def create(genre: String, criteria: String) {}
  
  
}
