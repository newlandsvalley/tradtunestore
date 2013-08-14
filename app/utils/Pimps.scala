package utils

import views.html.helper.FieldConstructor
import views.html.snippets.fieldTemplate


object Pimps {
    
  implicit val myFields = FieldConstructor(fieldTemplate.f)    
    
}
