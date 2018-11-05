package controllers

import play.api._
import play.api.mvc.{Action, AnyContent, Controller, Request, Session, Security}
import play.api.data._
import play.api.data.Forms._
import play.twirl.api.Html
import models.{Login, Search, AdvancedSearch, Tune, TuneRef, User, ResultsPage, Comment, CommentsModel, MidiMetadata}
import models.Search._
import Forms._
import java.io.{InputStream, File}
import java.net.URLEncoder
import utils._
import utils.Utils._
import scala.sys.process.{Process, ProcessLogger}
import scala.util.Random
// DI imports to replace what used to be static imports of global state
import javax.inject.Inject
import play.api.i18n.I18nSupport
import play.api.i18n.MessagesApi
import play.api.cache._


class Application @Inject() (val messagesApi: MessagesApi, cache: CacheApi, config: Configuration) extends Controller with I18nSupport  {  this: Controller =>

  val version = "1.2.1" 
  val UUID = "uuid"
  val random = new Random(System.currentTimeMillis())
  // cache config details which are used a lot
  val remoteService = "http://" + config.getString("musicrest.server").getOrElse("localhost:8080/musicrest/")
  val defaultTimeout = config.getInt("musicrest.timeout").getOrElse(2500)
  val longTimeout = defaultTimeout * 2
  // configure the proxy (now a class and not an object because of DI)
  val proxy = new Proxy(remoteService, defaultTimeout)
  // the login form needs access to the proxy, others don't and so are held in the Forms object
  val verifyingForms = new Forms(proxy)
  val loginForm = verifyingForms.loginForm

  // not used
  def index = Action { implicit request => {
    val host = request.headers.get(play.api.http.HeaderNames.HOST).getOrElse("")
    // Ok(views.html.index(s"Your host name is ${host}."))
    Redirect(routes.Application.home())
    }
  }

  // home is search
  def home = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    Ok(views.html.search(searchForm))
    }
  }


  def search = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    Ok(views.html.search(searchForm))
    }
  }

  def processSearch = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    Logger.debug(s"process search: user: $userName")
    searchForm.bindFromRequest.fold (
      errors => {
         Logger.debug("search form errors: " + errors)
         BadRequest(views.html.search(errors))
      },
      label => {
        val search = searchForm.bindFromRequest.get
        if (search.predicate.isDefined) {
           Logger.debug("search predicate handed to view: " + search.predicate)
           Redirect(routes.Application.searchresults(search.genre, search.predicate, search.sort, 1)).withSession(request.session + ("genre" -> search.genre))
        }
        else {
           Logger.debug("search handed to searchall")
           Redirect(routes.Application.searchall(search.genre, search.sort, 1)).withSession(request.session + ("genre" -> search.genre))
        }
      }
    )
    }
  }


  def advancedsearch = Action { request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    Ok(views.html.advancedsearch(advancedSearchForm))
    }
  }

  def processAdvancedSearch = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    advancedSearchForm.bindFromRequest.fold (
      errors => {
         Logger.debug("advanced search got errors: " + errors)
         BadRequest(views.html.advancedsearch(errors))
      },
      label => {
        val advancedSearch = advancedSearchForm.bindFromRequest.get
        Logger.debug("search predicate handed to view: " + advancedSearch.criteria)
        Logger.debug("proposed new predicate: " + advancedSearch.predicate)
        // Redirect(routes.Application.searchresults(advancedSearch.genre, Some(advancedSearch.criteria), "alpha", 1))
        Redirect(routes.Application.searchresults(advancedSearch.genre, advancedSearch.predicate, "alpha", 1)).withSession(request.session + ("genre" -> advancedSearch.genre))
      }
    )
    }
  }

  def searchall(genre: String, sort: String, page: Int) = searchresults(genre, None, sort, page)

  def searchresults(genre: String, predicateOption: Option[String], sort: String, page: Int) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val resultsValidation = proxy.resolveFuture(proxy.search(request, genre, predicateOption, sort, page))
    resultsValidation.fold (
      e => Redirect(routes.Application.error("Unexpected search error: " + e.getMessage()))
      ,
      resultsPage => {

        Logger.debug("search results from proxy: " + resultsPage.content)

        Ok(views.html.searchresults(genre, predicateOption, sort,
           Html(resultsPage.content), resultsPage.currentPage, resultsPage.totalPages))
        }
      )
    }
  }

  def processUpload = Action(parse.multipartFormData) { request =>
    request.body.file("abc").map { abc =>
      import java.io.File
      // import play.api.libs.Files - deprecated in Play 2.3
      import java.nio.file.{Path, Paths, Files}
      implicit val genre: String =  request.session.get("genre").getOrElse("irish")
      val filename = abc.filename
      val contentType = abc.contentType
      Logger.debug(s"upload content type $contentType")
      Logger.debug(s"file length ${abc.ref.file.length}")
      val path = Paths.get(abc.ref.file.getPath())
      val contents = new String(Files.readAllBytes(path))
      // do basic validation on the submission
      if ((Some("text/vnd.abc") != contentType) && (Some("text/plain") != contentType))  {
        Redirect(routes.Application.error(s"Not an ABC file: $contentType"))
      }
      else if (10000 < abc.ref.file.length()) {
        Redirect(routes.Application.error(s"File too big (${abc.ref.file.length()})"))
      }
      else {
        // val random = new Random(System.currentTimeMillis())
        val tune = Tune(genre, contents)
        postTune(request, tune)
        }
      }.getOrElse {
        Redirect(routes.Application.error("Missing file"))
    }
  }

  def uploadMidi = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    Ok(views.html.uploadmidi("unused message"))
    }
  }

  def processUploadMidi = Action(parse.multipartFormData) { request =>
    request.body.file("midi").map { midi =>
      val filename = midi.filename
      Logger.info(s"uploading file $filename")
      // generate a new file prefix with a random element to prevent files from multiple users clashing when written to the file system
      val slug = "_" + random.alphanumeric.take(5).mkString
      val fileprefix = filename.takeWhile(c => c != '.').filter(_.isLetterOrDigit) + slug
      val newfilename = fileprefix + ".mid"
      val contentType = midi.contentType
      val midiDir = config.getString("data.home").getOrElse("/var/data/midi2abc") + "/midi"
      Logger.debug(s"file length: ${midi.ref.file.length} content type: $contentType")
      // do basic validation on the submission
      if ((Some("audio/midi") != contentType) && (Some("audio/mid") != contentType))  {
         val badContentType = contentType.getOrElse("")
         Redirect(routes.Application.error(s"Not a midi file: $badContentType"))
      }
      else if (10000 < midi.ref.file.length()) {
         Redirect(routes.Application.error(s"File too big (${midi.ref.file.length()})"))
      }
      else {
         Logger.debug(s"file for upload: $filename")
         midi.ref.moveTo(new File(midiDir + "//"  + newfilename))
         Redirect(routes.Application.convert(fileprefix, None, None, None)).withSession(request.session + ("slug" -> slug))
      }
    }.getOrElse {
      Redirect(routes.Application.error("No file supplied"))
    }
  }

  def convert(filename: String, abc: Option[String], tuneImageRef: Option[String], tuneImageError: Option[String]) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    val metadataForm = defaultMidiMetadataForm(genre)
    Ok(views.html.convert(metadataForm, filename, abc, tuneImageRef, tuneImageError))
    }
  }

  def processMidiMetadata = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    val slug = request.session.get("slug").getOrElse("")
    midiMetadataForm.bindFromRequest.fold (
      errors => {
         Logger.debug("metadata form errors: " + errors)
         BadRequest(views.html.convert(errors, "", None, None, None))
      },
      label => {
        val metadata = midiMetadataForm.bindFromRequest.get
        // clea up the midi metadata in the format required for the Haskell miditoabc
        transcodeMidiToAbc(metadata.formatMiditoabc) match {
          case (Left(msg)) =>  Redirect(routes.Application.error(s"error: $msg"))
          case (Right(fn)) =>  {

                implicit val genre: String =  metadata.genre

                Logger.debug(s"metadata rhythm: ${metadata.rhythm}")
                try {
                  val source = scala.io.Source.fromFile(fn)
                  val lines = try source.mkString finally source.close()
                  val tune = Tune(metadata.genre, lines)
                  val abc = Utils.excise(slug, lines)
                  // get a temporary authorisation for cases where we're not logged in
                  val midi2abcUsername = config.getString("midi2abc.username").getOrElse("administrator")
                  val midi2abcPassword = config.getString("midi2abc.password").getOrElse("unknown")
                  val temporaryAuth = base64Encode(midi2abcUsername + ":" + midi2abcPassword)
                  val result = proxy.resolveFuture (proxy.postTune(request, tune, false, Some(temporaryAuth)), longTimeout)

                  result.fold (
                       e => {
                           Ok(views.html.convert(midiMetadataForm.bindFromRequest, metadata.filename, Some(abc), None, Some(e.getMessage()))).withSession(request.session + ("genre" -> genre))
                       }
                       ,
                       tuneId => {
                           val encodedTuneId = URLEncoder.encode(tuneId, "UTF-8")
                           val tuneRef = TuneRef(metadata.genre, encodedTuneId)
                           val url = imageUrl(remoteService, tuneRef)
                           Ok(views.html.convert(midiMetadataForm.bindFromRequest, metadata.filename, Some(abc), Some(url), None)).withSession(request.session + ("genre" -> genre))
                           }
                  )
                }
                catch {
                  case t: Throwable =>  Redirect(routes.Application.error(s"Unexpected error converting ${fn}"))
                }
            }
        }

      }
    )
    }
  }


  def comments(genre: String, tuneid: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val (uuid, commentsModel) = commentsModelFromSession(request.session, genre, tuneid)
    Ok(views.html.comments(commentsModel.getAll, commentForm, genre, tuneid, false)(userName)).withSession(request.session + (UUID -> uuid))
    }
  }

  def processOriginalComment(genre: String, tuneid: String)  = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Logger.debug(s"process original comment: tune: ${tuneid}")
    val encodedTuneId = URLEncoder.encode(tuneid, "UTF-8")
    val (uuid, commentsModel) = commentsModelFromSession(request.session, genre, tuneid)
    commentForm.bindFromRequest.fold (
      errors => {
        val formErrors = errors.errors
        Logger.debug("comment form errors: " + formErrors.mkString)
        BadRequest(views.html.comments(commentsModel.getAll, errors, genre, tuneid, false)(userName))
      },
      label => {
        val comment = commentForm.bindFromRequest.get
        val response = proxy.resolveFuture(proxy.postComment(request, genre, encodedTuneId, comment))
        response.fold (
          e => Status(500)("Error posting comment " + e.getMessage)
          ,
          s => {
            // add the comment to the session cache
            commentsModel.add(comment)
            // cross-site scripting workaround for Chrome - see http://code.google.com/p/chromium/issues/detail?id=98787
            // we must add the X-XSS-Protection header to allow Chrome to run the script that renders any embedded iframe in the Post
            Ok(views.html.comments(commentsModel.getAll, commentForm, genre, tuneid, false)(userName)).withHeaders("X-XSS-Protection" -> "0")
          }
        )
      }
    )}
  }

  /** this doesn't save the comment to the backend */
  def processTryComment(genre: String, tuneid: String)  = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Logger.debug(s"process try comment: tune: ${tuneid}")
    val (uuid, commentsModel) = commentsModelFromSession(request.session, genre, tuneid)
    commentForm.bindFromRequest.fold (
      errors => {
        val formErrors = errors.errors
        Logger.debug("comment form errors: " + formErrors.mkString)
        BadRequest(views.html.comments(commentsModel.getAll, errors, genre, tuneid, true)(userName))
      },
      label => {
        val comment = commentForm.bindFromRequest.get
        // macro-expand urls to hrefs
        val comments = commentsModel.tryComment(comment)
        Ok(views.html.comments(comments, commentForm.fill(comment), genre, tuneid, true)(userName)).withHeaders("X-XSS-Protection" -> "0")
      }
    )}
  }

 def processEditedComment(genre: String, tuneid: String, commentId: String)  = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val encodedTuneId = URLEncoder.encode(tuneid, "UTF-8")
    val (uuid, commentsModel) = commentsModelFromSession(request.session, genre, tuneid)
    val originalCommentOption = commentsModel.get(commentId)
    originalCommentOption match {
      case None => Redirect(routes.Application.error(s"Comment: ${commentId} not found" ))

      case Some(originalComment) =>
       commentForm.bindFromRequest.fold (
         errors => {
           val formErrors = errors.errors
           Logger.debug("comment form errors: " + formErrors.mkString)
           BadRequest(views.html.commentEdit(originalComment, errors, genre, tuneid)(userName))
         },
         label => {
           val comment = commentForm.bindFromRequest.get
           val response = proxy.resolveFuture(proxy.postComment(request, genre, encodedTuneId, comment) )
           response.fold (
             e => Status(500)("Error posting comment " + e.getMessage())
             ,
            s => {
              // add the comment to the session cache
              commentsModel.add(comment)
              // Redirect(routes.Application.comments(genre, tuneid)).withHeaders("X-XSS-Protection" -> "0")
              // Ok(views.html.comments(commentsModel.getAll, commentForm, genre, tuneid, true)(userName)).withHeaders("X-XSS-Protection" -> "0")
              Ok(views.html.commentEdit(comment, commentForm.fill(comment), genre, tuneid)(userName)).withHeaders("X-XSS-Protection" -> "0")
             }
           )
         }
       )
      }
    }
 }

  def commentEdit(genre: String, tuneid: String, id: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val (uuid, commentsModel) = commentsModelFromSession(request.session, genre, tuneid)
    val commentOption = commentsModel.get(id)
    commentOption match {
       case Some(c) => Ok(views.html.commentEdit(c, commentForm.fill(c), genre, tuneid)(userName))
       case None => Redirect(routes.Application.error(s"Comment: ${id} not found" ))
      }
    }
  }

  def commentDelete(genre: String, tuneid: String, id: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val encodedTuneId = URLEncoder.encode(tuneid, "UTF-8")
    val (uuid, commentsModel) = commentsModelFromSession(request.session, genre, tuneid)
    val commentOption = commentsModel.get(id)
    commentOption match {
      case Some(comment) => {
       val response = proxy.resolveFuture(proxy.deleteComment(request, genre, encodedTuneId, comment))
       response.fold (
         e => Status(500)("Error deleting comment " + e.getMessage())
         ,
         s => {
           val comments = commentsModel.delete(id)
           Redirect(routes.Application.comments(genre, tuneid))
          }
        )
      }
      case None => Redirect(routes.Application.error(s"Comment: ${id} not found" ))
    }
  } }

  // old static rendering
  /*
  def loginStatic = Action {
    implicit val userName:Option[String] = None
    Ok(views.html.loginstatic("login"))
  }
  */

  def processLogin = Action { implicit request =>
    loginForm.bindFromRequest.fold (
      errors => {
        implicit val userName:Option[String] = None
        val formErrors = errors.errors
        Logger.debug("user form errors: " + formErrors.mkString)
        BadRequest(views.html.login(errors, None))
      },
      label => {
        val login = loginForm.bindFromRequest.get
        val basicAuth = base64Encode(login.name + ":" + login.password)
        Redirect(routes.Application.home).withSession(request.session + (Security.username -> login.name) +  ("password" -> login.password) +  ("basicauth" -> basicAuth))
      }
    )
  }


  def login = Action { implicit request => {
    implicit val userName:Option[String] =  request.session.get("username")
    val service = proxy.resolveFuture(proxy.checkService())
    service.fold(
             e => Redirect(routes.Application.error(e.getMessage())),
             s => Ok(views.html.login(loginForm, None))
             )
    }
  }

  def logout = Action {
     Redirect(routes.Application.login).withNewSession.flashing(
      "success" -> "You are now logged out."
    )
  }

  def newuser = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.newuser(registrationForm))
    }
  }

  def processNewUser = Action { implicit request =>
    registrationForm.bindFromRequest.fold (
      errors => {
        implicit val userName:Option[String] = None
        BadRequest(views.html.newuser(errors))
      },
      label => {
        val user = registrationForm.bindFromRequest.get
          val response = proxy.resolveFuture(proxy.saveUser(request, user))
          response.fold(
             e => {
                Redirect(routes.Application.error(e.getMessage()))
             }
             ,
             user =>  {
                Redirect(routes.Application.newuserAcknowledge)
            }
          )
      }
    )
  }

  def newuserAcknowledge = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.acknowledge("The last part of the registration process is to reply to an email confirmation message that has been sent to you."))
    }
  }

  def newuserRegister(uuid: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val registration = proxy.resolveFuture(proxy.registerUser(uuid), longTimeout)
    registration.fold(
             e => Redirect(routes.Application.error(e.getMessage())),
             s => Ok(views.html.login(loginForm, None))
             )
    }
  }

  def passwordReminderAcknowledge = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.acknowledge("Your password has been sent to you."))
    }
  }


  def passwordReminder = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.passwordreminder(passwordReminderForm, None))
    }
  }

  def processPasswordReminder = Action { implicit request =>
    implicit val userName:Option[String] =  request.session.get("username")
    passwordReminderForm.bindFromRequest.fold (
      errors => {
        implicit val userName:Option[String] = None
        BadRequest(views.html.passwordreminder(errors, None))
      },
      label => {
        val reminder = passwordReminderForm.bindFromRequest.get
          val response = proxy.resolveFuture(proxy.remindUserPassword(request, reminder.name))
          response.fold(
             e => {
                Redirect(routes.Application.error(e.getMessage()))
             }
             ,
             user =>  {
                Redirect(routes.Application.passwordReminderAcknowledge)
            }
          )
      }
    )
  }

  def users(page: Int) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val resultsValidation = proxy.resolveFuture(proxy.users(request, page))
    resultsValidation.fold (
      e => Status(500)("Unexpected search error " + e.getMessage())
      ,
      resultsPage => {
        Ok(views.html.usersresults(Html(resultsPage.content), resultsPage.currentPage, resultsPage.totalPages))
        }
      )
    }
  }


  def newtune = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    val service = proxy.resolveFuture(proxy.checkService())
    service.fold(
             e => Redirect(routes.Application.error(e.getMessage())),
             s => userName.map(u => Ok(views.html.newtune(tuneForm))).
                      getOrElse( Ok(views.html.login(loginForm, Some("You must log in before you can submit a new tune"))))
             )
    }
  }

  def processTune = Action { implicit request => {
      implicit val userName: Option[String] =  request.session.get("username")
      implicit val genre: String =  request.session.get("genre").getOrElse("irish")
      tuneForm.bindFromRequest.fold (
        errors => {
          implicit val userName:Option[String] = None
          BadRequest(views.html.newtune(errors))
        },
        label => {
          val tune = tuneForm.bindFromRequest.get
          postTune(request, tune)
        }
      )
    }
  }

  /** post a tune with redirection to a URL */
  /*
  private def postTune [A] (request: Request[A], tune: Tune) = {
     implicit val genre: String =  request.session.get("genre").getOrElse("irish")
     val response: Validation[String, String] = proxy.postTune(request, tune, true)
     response.fold(
        e => {
          Redirect(routes.Application.error(e))
        },
        tuneId =>  {
          implicit val displayLinks = true
          val encodedTuneId = URLEncoder.encode(tuneId, "UTF-8")
          val nextUrl = "genre" + "/" + tune.genre  + "/" + "tune" + "/" + encodedTuneId
          // println(s"URL-unencoded tune id from dispatch $tuneId")
          // println(s"URL-encoded tune id $encodedTuneId")
          // println(s"next url $nextUrl")

          Logger.debug("redirecting to tune page with id " + URLEncoder.encode(tuneId, "UTF-8"))
          Redirect(nextUrl).withSession(request.session + ("genre" -> genre))
       }
     )
  }
  *
  */

  /** Post a tune and get back a tune id which we redirect to,  Interestingly, we didn't have to URL-encode the returned name with Play 2.1.3
   *  but we do from Play 2.2.0. We get back ourselves if we redirect directly to the application but we do have to if we redirect through the URL
   *
   */
  private def postTune [A] (request: Request[A], tune: Tune) = {
     implicit val genre: String =  request.session.get("genre").getOrElse("irish")
     val response = proxy.resolveFuture(proxy.postTune(request, tune, true), longTimeout)
     response.fold(
        e => {
          Redirect(routes.Application.error(e.getMessage()))
        },
        tuneId =>  {
          implicit val displayLinks = true
          val encodedTuneId = URLEncoder.encode(tuneId, "UTF-8")
          Logger.debug("redirecting to tune page with id " + encodedTuneId)
          Redirect(routes.Application.tune(tune.genre,  encodedTuneId)).withSession(request.session + ("genre" -> genre))
       }
     )
  }

  def processTryTune = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    tuneForm.bindFromRequest.fold (
      errors => {
        implicit val userName:Option[String] = None
        BadRequest(views.html.newtune(errors))
      },
      label => {
        val tune = tuneForm.bindFromRequest.get
          val response = proxy.resolveFuture(proxy.postTune(request, tune, false), longTimeout)
          response.fold(
             e => {
                Redirect(routes.Application.error(e.getMessage()))
             }
             ,
             tuneId =>  {
               Logger.debug("redirecting to tune page with id " + tuneId)
               // Redirect(routes.Application.trytune(tune.genre,  URLEncoder.encode(tuneId, "UTF-8")))
               Redirect(routes.Application.trytune(tune.genre,  tuneId)).withSession(request.session + ("genre" -> genre))
            }
          )
      }
    )
    }
  }

  def upload = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    implicit val genre: String =  request.session.get("genre").getOrElse("irish")
    val service = proxy.resolveFuture(proxy.checkService())
    service.fold(
             e => Redirect(routes.Application.error(e.getMessage())),
             s => userName.map(u => Ok(views.html.uploadtune("unused message"))).
                      getOrElse( Ok(views.html.login(loginForm, Some("You must log in before you can upload a new tune"))))
             )
    }
  }

  def processAlternativeTitle(genre: String, tuneId: String) = Action { implicit request => {
      implicit val userName: Option[String] =  request.session.get("username")
      alternativeTitleForm.bindFromRequest.fold (
        errors => {
           Redirect(routes.Application.error("error processing alternatve tune name"))
        },
        label => {
          val alternativeTitle = alternativeTitleForm.bindFromRequest.get
          val urlEncodedTuneId = URLEncoder.encode(tuneId, "UTF-8")
          val response = proxy.resolveFuture(proxy.postAlternativeTitle(request, genre, urlEncodedTuneId, alternativeTitle.title))
          response.fold(
             e => {
                Redirect(routes.Application.error(e.getMessage()))
             }
             ,
             tuneId =>  {
               Logger.debug("Alternative title incoming id from proxy " + tuneId)
               // Logger.debug("redirecting to abc page with id " + urlEncodedTuneId)
               // Redirect(routes.Application.abc(genre,  urlEncodedTuneId))
               Logger.debug("redirecting to abc page with this id (unencoded)")
               Redirect(routes.Application.abc(genre,  tuneId))
            }
          )
        }
      )
    }
  }

  def tune (genre: String, name: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val userAgent = request.headers.get(play.api.http.HeaderNames.USER_AGENT).getOrElse("")
    implicit val isInternetExporer = userAgent.contains("MSIE")

    val (exists, abcJsonMeta) = existsTune(request, genre, name)
    Logger.info(s"Tune $name exists? $exists")

    if (exists) {
      val imageUrl: String = remoteService + "genre/" +  URLEncoder.encode(genre, "UTF-8") + "/tune/" + URLEncoder.encode(name, "UTF-8")
      // parse the JSON ABC Metadata
      val abcMetaOpt = AbcMeta.parseAbcJson(abcJsonMeta)
      // Logger.debug(s"ABC headers parsed from json: ${abcMetaOpt} ")
      if (abcMetaOpt.isEmpty) {
        Logger.error(s"abc Json that could not be parsed ${abcJsonMeta}")
      }

      // construct a tempo from what's provided or else fall back to the default
      val tempo = abcMetaOpt.map{
        am => Tempo(am.tempo, am.timeSignature)
      }.getOrElse(Tempo.default)
      Logger.debug(s"Tempo: ${tempo} maxSlider: ${tempo.maxCountSlider}")

      Ok(views.html.tune(genre, name, imageUrl, abcMetaOpt, tempo))
    }
    else {
      Redirect(routes.Application.error(s"Tune $name not found"))
    }
    }
  }

  def trytune (genre: String, name: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")

    val imageUrl: String = remoteService + "genre/" +  URLEncoder.encode(genre, "UTF-8") + "/tune/" + URLEncoder.encode(name, "UTF-8")

    Ok(views.html.trytune(genre, name, imageUrl))
    }
  }

  def deleteTune (genre: String, name: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    val response = proxy.resolveFuture(proxy.deleteTune(request, genre, URLEncoder.encode(name, "UTF-8")))
    response.fold(
       e => {
          Redirect(routes.Application.error("deletion error " + e.getMessage()))
       }
       ,
       ok =>  { Redirect(routes.Application.error("Tune: " + name + " deleted" ))
       }
    )
    }
  }

  def abc (genre: String, name: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")

    val response = proxy.resolveFuture(proxy.getAbc(request, "text/html", genre, URLEncoder.encode(name, "UTF-8")))
    response.fold(
       e => {
          Redirect(routes.Application.error("get abc error " + e.getMessage()))
       }
       ,
       abc =>  {
          val isSubmitter = Utils.isSubmitter(userName, abc)
          Logger.info(s"is $userName the submitter? $isSubmitter")
          Ok(views.html.abc(genre, name, Html(abc), isSubmitter, alternativeTitleForm))
       }
    )
    }
  }

  def about = Action { implicit request => {
    implicit val userName: Option[String] = request.session.get("username")
    Ok(views.html.about(version))
    }
  }

  def abcEditor = Action { implicit request => {
    implicit val userName: Option[String] = request.session.get("username")
    Ok(views.html.abceditor(version))
    }
  }

  def abcTutorial = Action { implicit request => {
    implicit val userName: Option[String] = request.session.get("username")
    Ok(views.html.abctutorial(version))
    }
  }

  def credits = Action { implicit request => {
    implicit val userName: Option[String] = request.session.get("username")
    Ok(views.html.credits("home"))
    }
  }

  def contact = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.contact("home"))
    }
  }

  def donate = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.donate("home"))
    }
  }

  def help = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.help("home"))
    }
  }

  def helpMidi2abc = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.helpmidi2abc("home"))
    }
  }


  def error(message: String) = Action { implicit request => {
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.error(message))
    }
  }

  // diagnostics
  def examine = Action { implicit request =>  {
    val headers:Map[String, String] = request.headers.toSimpleMap
    val cookies: String = request.session.toString
    implicit val userName: Option[String] =  request.session.get("username")
    Ok(views.html.debugrequest(headers, cookies))
    }
  }

 def noSuchRoute(path: String) = Action {
    Redirect(routes.Application.error(s"not a recognized request: $path"))
 }

 private def commentsModelFromSession(session: Session, genre: String, tuneid: String): (String, CommentsModel) = {
    val uuid = session.get(UUID).getOrElse(java.util.UUID.randomUUID().toString())
    // get the existing model from the cache if it exists or else install one for the supplied tune
    val existingCommentsModel = cache.getOrElse[CommentsModel](uuid) {
      installCommentsModel(uuid, genre, tuneid)
    }
    // get a new comments model if we've moved to a new tune
    val commentsModel = if (existingCommentsModel.isFor(genre, tuneid)) {
      existingCommentsModel
    }
    else {
      installCommentsModel(uuid, genre, tuneid)
    }
    (uuid, commentsModel)
  }

  private def installCommentsModel(uuid: String, genre: String, tuneid: String):CommentsModel = {
     val cm = new CommentsModel(proxy, genre, tuneid)
     cm.init
     cache.set(uuid, cm)
     Logger.debug(s"setting new cm in cache for uuid ${uuid} and genre ${genre} and tune ${tuneid}")
     cm
  }

   def existsTune(initialRequest: Request[AnyContent], genre: String, tune: String): (Boolean, String) = {
     val response = proxy.resolveFuture(proxy.getAbc(initialRequest, "application/json", genre, tune))
     response.fold(
       e => {
          (false, null)
       }
       ,
       abcJsonMeta =>  {
         (true, abcJsonMeta)
       })
   }

  private def transcodeMidiToAbc (metadata: MidiMetadata): Either[String, File] = {
    import scala.collection.mutable.StringBuilder

    val out = new StringBuilder
    val err = new StringBuilder

    val logger = ProcessLogger(
      (o: String) => out.append(o),
      (e: String) => err.append(e))

    // get the directories from config
    val abcDir = config.getString("data.home").getOrElse("/var/data/midi2abc") +  "/abc"
    val midiDir = config.getString("data.home").getOrElse("/var/data/midi2abc") + "/midi"
    val scriptDir = config.getString("data.home").getOrElse("/var/data/midi2abc")  + "/scripts"
    val script = scriptDir + "/" +  "midi2abc.sh"
    // bulid the script command
    val cmd = script + " " + midiDir + " " + abcDir + " " + metadata.filename + " " + metadata.trackno +
                       " " + metadata.leadin + " " +  metadata.notelen +  " " + metadata.rhythm + " " + metadata.key + " " + metadata.mode

    Logger.debug(cmd)

    val pb = Process(cmd)
    val exitValue = pb.run(logger).exitValue

    exitValue match {
      case 0 => {
                 val fileName = abcDir + "//"  + metadata.filename + ".abc"
                 val file = new File(fileName)
                 Logger.info(s"successful midi conversion of ${fileName}")
                 Right(file)
                 }
      case _ => {
                 Logger.error("midi conversion error " + err.toString)
                 Left(err.toString)
                }
    }
  }

  /* rather awkward - extra configuration details that were encapsulated in Utils before the introduction of DI */
  def imageUrl(remoteService : String, tuneRef: TuneRef) : String = {
     remoteService + "genre/" + tuneRef.genre + "/tune/" + tuneRef.name + "/temporary" +"/png"
  }
}
