var HWDL = function(mem) {
  
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");
  var lvl1 = [], lvl2 = [], lvl3 = [], nomatch = [];
  var pairs = [];
  
  this.read = function(xStart, yStart, xEnd, yEnd) {
    
  };
  
  this.getLastPair = function() {
    return pairs[pairs.length - 1];
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
    
    for(var i = 0; i < objList.length; i++) {
      
      for(var n = 0; n < objList.length; n++) {
        
        if(n == i) {
          
        }
        
        else {
          
          pairs.length = 0;
          pairs[0] = obj0;
          pairs[1] = obj1;
          
          canvas.width = obj0.width + obj1.width;
          canvas.height = (obj0.height > obj1.height) ? obj0.height : obj1.height;
          
          canvas.drawImage(obj0, 0, 0);
          canvas.drawImage(obj1, obj0.width, 0);
          
          var obj0Data = canvas.getImageData(0, 0, obj0.width, obj0.height);
          var obj1Data = canvas.getImageData(obj0.width, 0, obj0.width + obj1.width, obj1.height);
          
          this.contrastImg(obj0Data, 30);
          this.contrastImg(obj1Data, 30);
          
          canvas.putImageData(obj0Data, 0, 0, obj0.width, obj0.height);
          canvas.putImageData(obj1Data, obj0.width, 0, obj0.width + obj1.width, obj1.height);
          
          canvas.drawImage(obj0, 0, 0);
          canvas.drawImage(obj1, obj0.width, 0);
          
        }
        
      }
      
    }
    
  };
  
  this.predictCategory = function() {
    
  };
  
  this.confirm = function(lvl) {
    lvl1.push([this.getLastPair(), lvl]);
  };
  
  this.nomatch = function() {
    nomatch.push(this.getLastPair());
  };
  
  this.storeMem = function() {
    
  };
  
};
