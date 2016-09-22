var mem = "";
var hdwl = new HDWL(mem);

function getImage(event) {
  
  var imgs = event.target.files;
  var reader = new FileReader();
  
  reader.onload = function(e) {
    
    var img = document.createElement("img");
    
    img.src = e.target.result;
    document.getElementById("body").appendChild(img);
    
  }
  
  for(var i = 0; i < imgs.length; i++) {
    reader.readAsDataURL(imgs[i]);
    document.getElementById("mainCanvas").getContext("2d").drawImage(imgs[i], 0, 0);
  }
  
}

/*var update = setInterval(function() {
  
  if(files != null) {
    
    //hdwl.compare(files.elements);
    document.getElementById("mainCanvas").getContext("2d").drawImage(files.elements[0], 0, 0);
    
  }
  
}, 1000 / 60);*/
