var mem = "";
//var hdwl = new HDWL(mem);
var files = document.getElementById("fileForm");
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

ctx.drawImage(files[0], 0, 0);

//hdwl.compare(files.elements);
