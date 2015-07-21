package models

case class MidiMetadata (trackno: String, leadin: String, notelen: String, genre: String, rhythm: String, key: String, mode: String, filename: String) { 
  /** make the format conform to miditoabc */
  def formatMiditoabc: MidiMetadata =
      MidiMetadata(trackno, leadin, notelen, genre.capitalize, normaliseRhythm(rhythm.capitalize), key, mode, filename)

  /** normalise the rhythms in a format accepted by the haskell miditoabc converter */
  def normaliseRhythm(r: String): String = r match {
    case "Slip jig" => "SlipJig"
    case x => x
  }
}

case class TuneRef(genre: String, name: String)



