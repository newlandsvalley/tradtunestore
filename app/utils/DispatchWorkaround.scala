package utils

import com.ning.http.client.{Response, AsyncCompletionHandler, FluentCaseInsensitiveStringsMap}

/** workaround covering Dispatch's lack of reasonable functionality */

object DispatchWorkaround {

  /** Obvious functionality - return the successful result or the error text */
  class OkOrErr[T](f: Response => T) extends AsyncCompletionHandler[T] {
    def onCompleted(response: Response) = {
      if (response.getStatusCode() / 100 == 2) {
        f(response)
      } 
      else {
        throw DownstreamException(response.getStatusCode(), response.getResponseBody())
      }
    }
  }

  /* The old release of http dispatch is apparently now named 'dispatch classic' which supported a set of heiroglyphic operators for acting on 
      responses which appears to have been quietly dropped in the new Futures-based release.  There is absolutely no documentation on how to 
      migrate from the classic version and in fact in the new documentation there still exists links to old stuff such as the 
      'periodic table of operators'.  I have had to drop down into java to sort it out. */
  def scalaHeaders(headers: FluentCaseInsensitiveStringsMap) : Map[String, Set[String]] = {
     import scala.collection.JavaConversions._
     headers.entrySet().map(entry => entry.getKey -> entry.getValue.toSet).toMap
  }
}
