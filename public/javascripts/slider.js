function updateSlider(slideAmount) {

  //get the element
  var display = document.getElementById("tempo");
  //show the amount
  display.innerHTML=slideAmount;  

  var oldSource=$("#audioSource")
  var audioPlayer=$("#audioPlayer")
  var url = oldSource.attr("base") + "?tempo=" + slideAmount;
  console.log("url should be "  + url);

  oldSource.attr("src", url).appendTo(audioPlayer);
  console.log("url now is "  + oldSource.attr("src"));
}


function reloadPlayer() {
  var audioPlayer=$("#audioPlayer")
  audioPlayer.load()
  console.log("reload")
}
