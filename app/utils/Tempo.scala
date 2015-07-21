package utils

import scala.math.{max, min, abs, round}



/** support for tempo markings */

/** Fraction is used to indicate a time signature (e.g. 4/4)*/
case class Fraction(numerator: Int, denominator: Int) {
  override def toString = s"${numerator}/${denominator}"
  val toFloat = numerator/denominator
  // a single beat in the bar
  def beatUnit = Fraction(1, denominator)
}

object Fraction {
  // the default note length is the quarter note
  val default:Fraction = Fraction(1,4)
  
  /** build from a string (such as 9/8) */
  def apply(fOpt: Option[String]): Fraction = fOpt.map {
    f => 
      val index = f.indexOf('/')
      if (index == -1) {
        default
      }
      else {
        val n = f.substring(0, index)
        val d = f.substring(index +1, f.length)
        try {
          Fraction(abs(Integer.parseInt(n)), abs(Integer.parseInt(d)))
        }
        catch  {
          case thr: Throwable => default
        }
      }
    }.getOrElse(default)   
  }

/** tempo indicates the tempo that the tune should be played in - e.g. 1/4=120 (the default)
 *  means that the beat unit is 1/4 notes and 120 should be played in each minute
 */
case class Tempo(beatUnit: Fraction, count: Int) {
  override def toString= s"${beatUnit.toString}=${count}"  
  // generate the max and min slider settings (double speed and half speed) kept within sensible range values (maxCount, minCount)
  private val rawMaxCount = min(count * 2, Tempo.maxCount)
  private val rawMinCount = max(count / 2, Tempo.minCount)
  // these next four definitions produce the recommended slider settings for the tempo changer rounded to values of slider steps
  val maxCountSlider = roundToStep(rawMaxCount)
  val minCountSlider = roundToStep(rawMinCount)
  val startCountSlider = roundToStep(count)
  // step interval for slider intervals
  def step = 
    if ((rawMaxCount - rawMinCount) > 100)
      10
    else
      5
  private def roundToStep(count: Int): Int =
    round(((count + step - 1) / step)*step)
}

object Tempo {    
  // keep the count of beats per minute within a sensible range
  val maxCount = 400
  val minCount = 20
  
  // the default tempo is 1/4=120
  val default:Tempo = Tempo(Fraction(1,4), 120)

  def rangeCheck(count: Int): Int = max(min(abs(count), maxCount),minCount)     
      
  
  /** build a tempo from parsing an optionaL tempo string and an optional time signature string */
  def apply(tempoOpt: Option[String], timeSignatureOpt: Option[String]):Tempo = tempoOpt.map {
    t => {      
      val index = t.indexOf('=')
      // tempo is just a count (e.g. 120) so find the beat unit from the time signature
      if (index == -1) {
        try {
          val count = rangeCheck(Integer.parseInt(t))
          val beatUnit = Fraction(timeSignatureOpt).beatUnit
          Tempo(beatUnit, count)
        }
        catch  {
          case thr: Throwable => default
        }
      }
      // tempo is fully formed (e.g. 3/6=120)
      else try {        
        val beatUnit = Fraction(Some(t.substring(0, index)))
        val countString = t.substring(index +1, t.length)
        val count = rangeCheck(Integer.parseInt(countString))
        Tempo(beatUnit, count)
      }
      catch  {
        case thr: Throwable => {
          println(s"Exception on building fully formed tempo ${thr}")
          default
        }
      }
    }
  }.getOrElse(default)
}
