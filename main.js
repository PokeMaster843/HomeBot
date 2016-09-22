var mem = "";
var hdwl = new HDWL(mem);
var files = document.getElementById("fileForm");

var update = setInterval(function() {
  hdwl.compare(files.elements);
}, 1000 / 60);
