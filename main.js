var mem = "";
//var hdwl = new HDWL(mem);
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var img0 = document.createElement("img"), img1 = document.createElement("img");
img0.src = "img0.png";
img0.width = 960;
img0.height = 480;
img1.src = "img1.png";
img1.width = "960";
img1.height = "480";

canvas.drawImage(img0, 0, 0);
canvas.drawImage(img1, img0.width, 0);

//hdwl.compare(img0, img1);
