TradTuneStore
=============

This is the web interface into the [musicrest](https://github.com/newlandsvalley/musicrest) web service and also to the [miditoabc](https://github.com/newlandsvalley/miditoabc) transcoding service. It allows users to submit traditional tunes in [ABC notation](http://abcnotation.com/), to search for these tunes, and, having found them, to download the scores in a variety of formats or to play them - see [tradtunedb](http://www.tradtunedb.org.uk/). Tunes which have been uploaded are played using the [MIDI.js](http://mudcu.be/midi-js/) player which plays midi files fetched from the web service. The miditoabc service attempts to convert midi files into abc files which can, of course, then be loaded as normal.

This version also adds an [ABC editor](https://github.com/newlandsvalley/elm-abc-player/tree/master/src/examples/editor-controller) and an [interactive ABC tutorial](https://github.com/newlandsvalley/elm-abc-player/tree/master/src/examples/tutorial) written in elm.

It uses the [Play Framework](http://www.playframework.org/) and is written in Scala.

Current version: 1.2.0

Configuration
-------------

There are two configuration files which are standard for Play applications.  Firstly, the  _routes_ file which associates requests with actions and secondly _application.conf_ for the application itself. The only application-specific settings here are references to the a working directory for transcoding and to the _musicrest_ web service which is used to attempt to produce scores from valid ABC:

      # tradtunestore specific configurations      
      data.home="/var/data/midi2abc"
      musicrest.server="www.tradtunedb.org.uk:8080/musicrest/"
      musicrest.username="midi2abc"
      musicrest.password="changeit"


Dependencies
------------

*  [Play 2.5.0](http://www.playframework.org/download).
*  [Elm 0.17](http://elm-lang.org/).
*  [Argonaut 6.1](http://argonaut.io/) for JSON parsing.
*  [Dispatch 0.11.2](http://dispatch.databinder.net/Dispatch.html) for proxying requests.
*  [elm-abc-player](https://github.com/newlandsvalley/elm-abc-player) for the ABC editor and tutorial. These in turn depends on the [soundfont player](https://github.com/danigb/soundfont-player) from danigb.

Blog
----

[Elucubrations](http://myelucubrations.blogspot.co.uk/)




