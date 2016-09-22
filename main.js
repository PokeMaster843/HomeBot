var mem = "";
//var hdwl = new HDWL(mem);
var files = document.getElementById("fileForm");
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

var update = setInterval(function() {
  
  if(files != null) {
    ctx.drawImage(files.elements[0], 0, 0);
  }
  
}, 1000/60);

//hdwl.compare(files.elements);
