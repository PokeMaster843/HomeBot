var mem = "";
var hdwl = new HDWL(mem);
var files = document.getElementById("fileForm");

var update = setInterval(function() {
  
  if(files != null) {
    
    //hdwl.compare(files.elements);
    document.getElementById("mainCanvas").getContext("2d").drawImage(files.elements[0], 0, 0);
    
  }
  
}, 1000 / 60);
