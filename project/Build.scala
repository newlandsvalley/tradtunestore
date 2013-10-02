import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

    val appName         = "tradtunestore"
    val appVersion      = "1.0.2"

    val appDependencies = Seq(
      // Add your project dependencies here,
      "org.scalaz"     %   "scalaz-core_2.10"   % "7.0.0",
      // "net.databinder.dispatch" % "dispatch-core_2.10" % "0.11.0"
      "net.databinder" %% "dispatch-http" % "0.8.8",
      "org.specs2"     %%  "specs2"       % "1.14" % "test"
            
    )

    val main = play.Project(appName, appVersion, appDependencies).settings(
      // Add your own project settings here    
      resolvers ++= Seq {  
        "typesafe for scalaz" at "http://repo.typesafe.com/typesafe/repo" 
      }
    )

}
