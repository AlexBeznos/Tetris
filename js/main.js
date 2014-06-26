function setup() {
  canvas = document.getElementById("main");
  //canvas.style.marginLeft = (((screen.width - canvas.width) - 100) / 2);
  ctx = canvas.getContext('2d');
  ctx.width = canvas.width;
  ctx.height = canvas.height;
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  var i = 0;
  var render = function() {
    i++;
    var b = ctx.width;
    console.log(b+ " " +i);
    ctx.fillStyle = "0000000";
    ctx.fillRect(i,b, 100, 10);
  };
  setInterval(function(){ render() }, 3000);
  
  //rendered = JSON.parse('sprite/octo');
  //frame = rendered.frames[0].frame;

};

setup();