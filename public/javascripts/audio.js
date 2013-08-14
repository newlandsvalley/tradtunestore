var audio;
var loadButton;
var slider;
var tempo;


function audioInit(){
  audio = $("#audioPlayer");
  loadButton = $("#loadButton") 
  slider = $("#slider")
  tempo = $("#tempo");
  if  (audioWavSupported()) {
	var startTempo = getTempo()
	console.log("tempo - " + startTempo);  
	// mimic an initial slider using the original setting - we need to do this because we must add the event handlers
	// after setting the source for some reason.  The audioInit code is asynchronous and so a user might have altered
	// the tempo from the default before it loads
	updateSlider(startTempo)
	addEventHandlers();
	showLoadButton();
  }
  else {
	hideSlider();
    hideLoadButton();
	hideControls();
  }
}
 
function addEventHandlers(){
  loadButton.click(loadAudio);
  audio.bind('ended', function()  {
	    audio.currentTime = 0;
	    audio.trigger('load');
	  });
}
 
function loadAudio(){
  console.log("reload audio player");  
  //audio.bind("load",function(){
  //  $(".alert-success").html("Audio Loaded successfully");
  //});
  audio.trigger('load');
  hideLoadButton();
  showControls();
}     

function stopAudio(){
  if (audio) {
	audio.trigger('pause');
	audio.prop("currentTime",0);
  }  
} 

function showLoadButton() {
  if (loadButton) {
	 loadButton.show();
  }
}

function hideLoadButton() {
   loadButton.hide();
}

function hideSlider() {
   slider.hide();
}

function showControls()  {
   audio.prop("controls","controls");
   audio.removeAttr('hidden');
}

function hideControls()  {
   audio.removeAttr("controls"); 
   audio.prop('hidden', 'hidden');
}

function updateSlider(slideAmount) {
  // display what the slider has chosen
  tempo.text(slideAmount);  

  var oldSource=$("#audioSource");

  var url = oldSource.attr("base") + "?tempo=" + slideAmount;
  console.log("url should be "  + url);

  oldSource.attr("src", url).appendTo(audio);
  console.log("url now is "  + oldSource.attr("src"));
  showLoadButton();
}

function getTempo() {
  return tempo.text()
}

function audioWavSupported() {
  var myAud=document.createElement('audio');
  var canPlayWav = myAud.canPlayType('audio/wav; codecs="1"')
  if (("" == canPlayWav) || ("maybe" == canPlayWav)) {    
    console.log("audio wav not supported");  
    return false;
  }
  else {    
    console.log("audio wav IS supported - " + canPlayWav);  
    return true;
  }
}


