var HWDL = function(mem) {
  
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");
  var lvl1 = [], lvl2 = [], lvl3 = [], nomatch = [];
  var pairs = [];
  
  this.read = function(xStart, yStart, xEnd, yEnd) {
    
  };
  
  this.getPair = function(pair) {
    return pairs[pair];
  };
  
  this.contrastImg = function(imgData, contrast) {
    
    var data = imageData.data;
    var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    
    for(var i=0; i < data.length; i += 4) {
      
      data[i] = factor * (data[i] - 128) + 128;
      data[i + 1] = factor * (data[i + 1] - 128) + 128;
      data[i + 2] = factor * (data[i + 2] - 128) + 128;
      
    }
    
    imageData.data = data;
    
  };
  
  this.compare = function(objList) {
    
    pairs.length = 0;
    
    for(var i = 0; i < objList.length; i++) {
      
      if(objList.length == 1) {
        
        ctx.drawImage(objList[0], 0, 0);
        
      }
      
      for(var n = 0; n < objList.length; n++) {
        
        if(n == i) {
          
        }
        
        else {
          
          var obj0 = objList[i], obj1 = objList[n];
          
          pairs[n + (i * objList.length)] = [obj0, obj1];
          
          canvas.width = obj0.width + obj1.width;
          canvas.height = (obj0.height > obj1.height) ? obj0.height : obj1.height;
          
          ctx.drawImage(obj0, 0, 0);
          ctx.drawImage(obj1, obj0.width, 0);
          
          var obj0Data = canvas.getImageData(0, 0, obj0.width, obj0.height);
          var obj1Data = canvas.getImageData(obj0.width, 0, obj0.width + obj1.width, obj1.height);
          
          this.contrastImg(obj0Data, 30);
          this.contrastImg(obj1Data, 30);
          
          ctx.putImageData(obj0Data, 0, 0, obj0.width, obj0.height);
          ctx.putImageData(obj1Data, obj0.width, 0, obj0.width + obj1.width, obj1.height);
          
          ctx.drawImage(obj0, 0, 0);
          ctx.drawImage(obj1, obj0.width, 0);
          
        }
        
      }
      
    }
    
  };
  
  this.predictCategory = function() {
    
  };
  
  this.confirm = function(pair, lvl) {
    lvl1.push([this.getPair(pair), lvl]);
  };
  
  this.nomatch = function(pair) {
    nomatch.push(this.getPair(pair));
  };
  
  this.storeMem = function() {
    
  };
  
};

var mem = "";
//var hdwl = new HDWL(mem);
var c = document.getElementById("mainCanvas");
var cx = c.getContext("2d");
var img0Loaded = false, img1Loaded = false;
var img0 = document.createElement("img"), img1 = document.createElement("img");
img0.onload = function() {
  img0Loaded = true;
}
img1.onLoad = function() {
  img1Loaded = true;
}
img0.src = "img0.png";
img1.src = "img1.png";

if(img0Loaded == true && img1Loaded == true) {
  
  hwdl.compare([img0, img1]);
  
}

/*var update = setInterval(function() {
  
}, 1000 / 60);*/
