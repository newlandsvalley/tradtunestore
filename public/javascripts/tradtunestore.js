var arr;
 var option;

 // dynamic selection drop-downs
 function rhythmChange(genre, includeAny) {
   var rhythm_dropdown = document.getElementById("rhythm_dropdown");   
   // Set each option to null thus removing it
   while ( rhythm_dropdown.options.length ) rhythm_dropdown.options[0] = null;

   switch (genre) {   
 
    case "irish":
      arr0 = new Array("jig","reel","hornpipe","barndance","highland","march","mazurka","polka","slide","slip jig","waltz");
    break;

    case "scottish":
      arr0 = new Array("jig","reel","hornpipe","barndance","march","schottische","slip jig","strathspey","waltz");
    break;

    case "scandi":
      arr0 = new Array("polska","brudmarsch","gånglåt","skänklåt","slängpolska","polka","långdans","marsch","schottis","engelska","halling","hambo","sextur","waltz");
    break;

    case "klezmer":
      arr0 = new Array("bulgar","freylekhs","khosidl","hora","csardas","doina","honga","hopak","kasatchok","kolomeyke","sher","sirba","skotshne","taksim","terkish");
    break;
    
    default:
      arr = new Array("")     
    break; 
   }   

   if (includeAny) {
     arr = new Array("any").concat(arr0);
   }
   else {
     arr = arr0
   }

   for (var i=0;i<arr.length;i++) {
     option = new Option(arr[i],arr[i]);
     rhythm_dropdown.options[i] = option;
   }
   rhythm_dropdown.disabled = false;
  }
   
  function selectGenre(genre) {    
    var element = document.getElementById('genre');
    element.value = genre;
  }

  function selectRhythm(rhythm) {    
    var element = document.getElementById('rhythm_dropdown');
    element.value = rhythm;
  }

  function genreInit(genre) {
     selectGenre(genre)
     var genre_dropdown = document.getElementById("genre");   
     rhythmChange(genre, true)
  }

  function genreAndRhythmInit(genre, rhythm) {
     genreInit(genre)
     selectRhythm(rhythm)
  }
 
