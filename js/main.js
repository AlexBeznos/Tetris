var canvas = document.getElementById("main");
canvas.style.marginLeft = ((screen.width - canvas.width)/2);
var ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);