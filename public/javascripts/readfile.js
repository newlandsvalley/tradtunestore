// read from file
function handleFileSelect(evt) { 
  alert("handle file select")    
  // Check if window.fileReader exists to make sure the browser supports file uploads
  if (typeof(window.FileReader) == 'undefined')  {
        alert'Browser does not support HTML5 file uploads!');
    }

  var files = evt.target.files; // FileList object
          
  var reader = new FileReader();     

  reader.onloadend = handleReaderLoadEnd 
  reader.onerror = handleReaderError
  reader.onabort = handleReaderAbort
    
  reader.readAsText(files[0],"UTF-8");
}     

function handleReaderLoadEnd(evt) { 
  alert("updating text area")    
  document.getElementById('abc').value = evt.target.result
}

function handleReaderError(evt) { 
  alert("got a read error") 
}

function handleReaderAbort(evt) { 
  alert("got a read abort") 
}

function insertDummyText() {
  alert("insert dummy text")    
  val textarea = document.getElementById('abc').value
  textarea = ""
  textarea += "foo"
}
      
try  {
  document.getElementById('abcfile').addEventListener('change', handleFileSelect, false);
  document.getElementById('abcfile').addEventListener('change', insertDummyText, false);
}    
catch(e)  {
  alert(e);
}
 

