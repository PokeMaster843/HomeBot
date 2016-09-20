var HWDL = function(mem) {
  
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");
  var lvl1 = [], lvl2 = [], lvl3 = [], nomatch = [];
  var lastPair = [];
  
  this.read = function(xStart, yStart, xEnd, yEnd) {
    
  }
  
  this.lookAt = function(obj) {
    
    if(lastPair.length >= 2) {
      
      lastPair = [];
      lastPair.push(obj);
      
    }
    
    else {
      lastPair.push(obj);
    }
    
  }
  
  this.getLastPair = function() {
    return lastPair;
  }
  
  this.compare = function() {
    
  }
  
  this.predictCategory = function() {
    
  }
  
  this.confirm = function(lvl) {
    lvl1.push([this.getLastPair(), lvl]);
  }
  
  this.nomatch = function() {
    nomatch.push(this.getLastPair());
  }
  
  this.storeMem = function() {
    
  }
  
}
