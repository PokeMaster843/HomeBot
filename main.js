var mem = "";
var hdwl = new HDWL(mem);
var files;

function handleFileSelect(event) {
  
  files = event.target.files;
  
}

hdwl.compare(files);
