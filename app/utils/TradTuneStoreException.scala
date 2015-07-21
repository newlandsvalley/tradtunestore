package utils

case class TradTuneStoreException(msg: String) extends Exception(msg)

case class DownstreamException(code: Int, msg: String) extends Exception(s"response status: $code $msg")
