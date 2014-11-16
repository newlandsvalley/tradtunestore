package utils

import org.specs2.mutable._
import Tempo._

class TempoSpec extends Specification {  

   "tempo parser" should {
     "produce the correct tempo if the supplied Q value is fully provided" in {
       val qOpt = Some("3/8=240")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(3,8)
       tempo.count  must_== (240)
       tempo.toString must_== ("3/8=240")
     }     
     
     "take the beat unit from the time signature if the supplied Q value is count only" in {
       val qOpt = Some("240")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,8)
       tempo.count  must_== (240)
     }
     
    "take the beat unit from the default if the supplied Q value is count only and there is no time signature" in {
       val qOpt = Some("240")
       val tsOpt = None
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (240)
     }      
     
     "produce a tempo with beat unit from the time signature if the supplied beat unit in Q is badly formed" in {
       val qOpt = Some("foo=240")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (240)
     }
     
    "produce the default tempo if the note count unit in Q is badly formed" in {
       val qOpt = Some("1/8=foo")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (120)
       tempo.maxCountSlider  must_== (240)
       tempo.minCountSlider  must_== (60)
     }    
     
    "produce the default tempo if the entirety of Q is badly formed" in {
       val qOpt = Some("foo")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (120)
     }      
    
    "produce the default tempo if no Q is supplied" in {
       val qOpt:Option[String] = None
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (120)
     }         
    
    "produce the default tempo if there is nothing at all supplied" in {
       val qOpt = None
       val tsOpt = None
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (120)
     }         
    
    "produce the default beat unit if a Q beat unit of zero is supplied" in {
       val qOpt = Some("1/0=240")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,4)
       tempo.count  must_== (240)
     }            
    
    "produce a positive beat unit if a negative Q beat unit is supplied" in {
       val qOpt = Some("-1/8=240")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(1,8)
       tempo.count  must_== (240)
     }            
    
    "produce a positive note count if a negative Q note count is supplied" in {
       val qOpt = Some("3/8=-240")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(3,8)
       tempo.count  must_== (240)
     }              
    
     "limit the note count to a sensible max value" in {
       val qOpt = Some("3/8=2400")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(3,8)
       tempo.count  must_== (400)
     }              
     
    "limit the note count to a sensible min value" in {
       val qOpt = Some("3/8=5")
       val tsOpt = Some("9/8")
       val tempo = Tempo(qOpt, tsOpt)
       tempo.beatUnit  must_== Fraction(3,8)
       tempo.count  must_== (20)
     }      
    
    "produce sensible slider settings for fast tunes" in {
       val qOpt = Some("3/8=118")
       val tsOpt = None
       val tempo = Tempo(qOpt, tsOpt)
       tempo.maxCountSlider  must_== (240)
       tempo.minCountSlider  must_== (60)
       tempo.step  must_== (10)
       }         
    
   "produce sensible slider settings for slow tunes" in {
       val qOpt = Some("3/8=54")
       val tsOpt = None
       val tempo = Tempo(qOpt, tsOpt)
       tempo.maxCountSlider  must_== (110)
       tempo.minCountSlider  must_== (30)
       tempo.step  must_== (5)
       }             
    
   }
     
}