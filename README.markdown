TradTuneStore
=============

This is the web interface into the [musicrest](https://github.com/newlandsvalley/musicrest) web service. It allows users to submit traditional tunes in [ABC notation](http://abcnotation.com/), to search for these tunes, and, having found them, to download the scores in a variety of formats or to play them - see [tradtunedb](http://www.tradtunedb.org.uk/). This version uses the  [MIDI.js](http://mudcu.be/midi-js/) player which plays midi files fetched from the web service (previous versions used HTML5 audio tags to play wav files). 

It uses the [Play Framework](http://www.playframework.org/) and is written in Scala.

Configuration
-------------

There are two configuration files which are standard for Play applications.  Firstly, the  _routes_ file which associates requests with actions and secondly _application.conf_ for the application itself.  The only application-specific setting here is the reference to the _musicrest_ web service:

      # tradtunestore specific configurations
      musicrest.server="localhost:8080/musicrest/"

Dependencies
------------

*  [Play 2.2.0](http://www.playframework.org/download).
*  [Scalaz 7](http://code.google.com/p/scalaz/wiki/Scalaz7) for validation.
*  [Dispatch](http://dispatch.databinder.net/Dispatch.html) for proxying requests.

Blog
----

[Elucubrations](http://myelucubrations.blogspot.co.uk/)




