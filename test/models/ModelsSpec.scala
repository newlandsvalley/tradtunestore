package models

import org.specs2.mutable._

class ModelsSpec extends Specification {
  
  val commentsModel = new CommentsModel("agenre", "atune")
 
  "comments model" should {
    "parse a single json comment" in {
      val json = """ {"comment" :[ {"user": "administrator" ,"cid": "1383835634013" ,"subject": "subject 5" ,"text": "comment 5 text" }
                 ] }"""
      commentsModel.clear
      commentsModel.parse(json)
      commentsModel.size must_== (1)
      val key = "administrator_1383835634013"
      val commentOpt = commentsModel.get(key)
      commentOpt match {
        case None => failure(s"not found comment with key ${key}")
        case Some(c) => c.subject must_== ("subject 5")
        }
      }
    "silently ignore an invalid json comment" in {
      val json = """ {"comment" :[ {"user": "administrator" ,"cid": "1383835634013", "expectedfields": "missing" }
                 ] }"""
      commentsModel.clear
      commentsModel.parse(json)
      commentsModel.size must_== (0)
      }
    "silently ignore a json comment with a non-numeric timestamp" in {
      val json = """ {"comment" :[ {"user": "administrator" ,"cid": "not a number" ,"subject": "subject 5" ,"text": "comment 5 text" }
                 ] }"""
      commentsModel.clear
      commentsModel.parse(json)
      commentsModel.size must_== (0)
      }
    "parse a set of json comments" in {
      val json = """ {"comment" :[ {"user": "administrator" ,"cid": "1383835634013" ,"subject": "subject 5" ,"text": "comment 5 text" },
      		                       {"user": "test user" ,"cid": "1383835634003" ,"subject": "subject 6" ,"text": "comment 4 text" },
      		                       {"user": "john" ,"cid": "1383835634006" ,"subject": "subject 7" ,"text": "comment 4 text" }
                 ] }"""
      commentsModel.clear
      commentsModel.parse(json)
      commentsModel.size must_== (3)
      val key = "john_1383835634006"
      val commentOpt = commentsModel.get(key)
      commentOpt match {
        case None => failure(s"not found comment with key ${key}")
        case Some(c) => c.subject must_== ("subject 7")
        }
      }
    "parse an empty json comment" in {
      val json = """ {"comment" :[  ] }"""
      commentsModel.clear
      commentsModel.parse(json)
      commentsModel.size must_== (0)
      }
  } 
  
  "comment" should {
    "macro expand normal urls" in {
      val text = Comment.macroExpand("""http://www.ref1.com   http://www.ref2.com""")
      text must contain ("href='http://www.ref1.com'")
      text must contain ("href='http://www.ref2.com'")
    }
    "macro expand YouTube urls" in {
      val text = Comment.macroExpand("""https://www.youtube.com/watch?v=sq61TOHGnMY   https://www.youtube.com/watch?v=WCTBNqQuksU""")
      text must contain ("<iframe")
      text must contain ("src='//www.youtube.com/embed/sq61TOHGnMY'")
      text must contain ("src='//www.youtube.com/embed/WCTBNqQuksU'")
    }
    "recognise complex urls" in {
      val foundOpt = Comment.findUnembeddedUrl("""http://www.youtube.com/watch?v=gE6j-Zp323w&list=PLY3vociuUPcVEBk26-Xe0D1GOQdsGmtTb foo bar""")
      foundOpt match {
        case None => failure("Complex URL not recognised")
        case Some(u) => u.must_== ("""http://www.youtube.com/watch?v=gE6j-Zp323w&list=PLY3vociuUPcVEBk26-Xe0D1GOQdsGmtTb""")
      }
    }
    "expand complex YouTube urls" in {
      // this is Eklund Polska by Väsen
      // validation should expand & before validating
      val link = """http://www.youtube.com/watch?v=gE6j-Zp323w&list=PLY3vociuUPcVEBk26-Xe0D1GOQdsGmtTb"""   
      val text = Comment.macroExpand(link)
      text must contain ("<iframe")
      text must contain ("src='//www.youtube.com/embed/gE6j-Zp323w&list=PLY3vociuUPcVEBk26-Xe0D1GOQdsGmtTb'")  
    }
    "accept already embedded YouTube iframes without complaint" in {
      val embed = """<iframe width="560" height="315" src="//www.youtube.com/embed/gE6j-Zp323w" frameborder="0" allowfullscreen></iframe>"""
      val comment = Comment("auser", 1L, "a title", embed) 
      comment.text must_== """<iframe width='560' height='315' src='//www.youtube.com/embed/gE6j-Zp323w' frameborder='0' allowfullscreen></iframe>"""
    }
    "accept a mixture of embedded XML and plain text without complaining" in {
      val mixed = """<iframe width="560" height="315" src="//www.youtube.com/embed/gE6j-Zp323w" frameborder="0" allowfullscreen></iframe>
        this is an embedded YouTube iframe reference"""
      val comment = Comment("auser", 1L, "a title", mixed) 
      comment.text must contain ("<iframe width='560' height='315' src='//www.youtube.com/embed/gE6j-Zp323w' frameborder='0' allowfullscreen></iframe>")
      comment.text must contain("this is an embedded YouTube iframe reference")
    }
    "leave already existing anchors unaffected" in {
      val originalText = """<a href='http://www.ref1.com'>http://www.ref1.com</a>"""
      val expandedText = Comment.macroExpand(originalText)
      expandedText.length must_== (originalText.length)
    }
    "validate plain text comments" in {
      val errors = Comment.validate("""this is plain text. 
                                    it should all be OK""")
      errors.size must_== (0)
    }
    "validate comments with URLs" in {
      val errors = Comment.validate("""this is plain text. 
                                    the url is http://www.ref1.com""")
      errors.size must_== (0)
    }
    "validate comments which are well-formed XML" in {
      val errors = Comment.validate("""<test>this is XML. 
                                    should be OK</test>""")
      errors.size must_== (0)
    }
    "invalidate comments which are badly-formed XML (1)" in {
      val errors = Comment.validate("""<test>this is XML. 
                                    should not be OK - no end tag""")
      errors.size must_== (1)
    }
    "invalidate comments which are badly-formed XML (2)" in {
      val errors = Comment.validate("""<foo> 
                                    <bar></baz>""")
      errors.size must_== (1)
    }
  }
   
}