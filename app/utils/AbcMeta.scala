package utils

import argonaut._
import Argonaut._

// codecs for json parsing with Argonaut
case class AbcMeta(title: String, rhythm: String, submitter: String, timeSignature: Option[String], 
                   Key: Option[String], origin: Option[String], source: Option[String], composer: Option[String], transcriber: Option[String], tempo: Option[String])
 
object AbcMeta {
  implicit def AbcMetaCodecJson: CodecJson[AbcMeta] =
    casecodec10(AbcMeta.apply, AbcMeta.unapply)("T", "R", "submitter", "M", "K", "O", "S", "C", "Z", "Q")
    
  /** parse a Json representation  of an ABC tune which is simply a set of name-value pairs 
  *  return an optional AbcMeta object if the parse succeeds otherwise None
  *  This uses Argonaut. 
  */
  def parseAbcJson(json: String): Option[AbcMeta] = {
    val jsonOpt = Parse.parseOption(json)
    for {
      json <- jsonOpt
      abcMeta <- json.as[AbcMeta].toOption
    } yield { abcMeta }
  }  
  
}