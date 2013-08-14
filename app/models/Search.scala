package models

import scala.collection.mutable.StringBuilder
import java.net.URLEncoder


case class ResultsPage(content: String, currentPage: Int, totalPages: Int)

case class Search(name: String, genre: String, rhythm: String, key: String, sort: String) {
  def predicate() : Option[String] = {
    val sb = new StringBuilder
    val nameTerm = if (name.isEmpty()) "" else "T=" + URLEncoder.encode(name, "UTF-8")
    val rhythmTerm = if (rhythm == "any") "" else "R=" + URLEncoder.encode(rhythm, "UTF-8")
    val keyTerm = if (key == "any") "" else "K=" + URLEncoder.encode(key, "UTF-8")
    sb append nameTerm
    if (sb.isEmpty) sb.append(rhythmTerm) else if (!rhythmTerm.isEmpty) sb.append("&"+rhythmTerm)
    if (sb.isEmpty) sb.append(keyTerm) else  if (!keyTerm.isEmpty) sb.append("&"+keyTerm)
    if (sb.isEmpty) None else Some(sb.mkString)
  }
}

object Search {
  
  def create(name: String, genre: String, rhythm: String, key: String, sort: String) {}
  
}
