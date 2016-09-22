var mem = "";
var hdwl = new HDWL(mem);

function getImage(event) {
  
  var files = event.target.files;
  var reader = new FileReader();
  
  reader.onload = function(e) {
    
    var img = document.createElement("img");
    
    img.src = e.target.result;
    document.getElementById("body").appendChild(img);
    
  }
  
  for(var i = 0; i < files.length; i++) {
    reader.readAsDataURL(files[i]);
  }
  
}

/*var update = setInterval(function() {
  
  if(files != null) {
    
    //hdwl.compare(files.elements);
    document.getElementById("mainCanvas").getContext("2d").drawImage(files.elements[0], 0, 0);
    
  }
  
}, 1000 / 60);*/
