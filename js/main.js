var cantag = document.getElementById("main");
var ctx = cantag.getContext("2d");

cantag.width = '500';
cantag.height ='1000';



var RectByCoor = {
  Draw :
  function () {
      
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(0,this.index,500,100);
        this.index += 100;  
        setTimeout ( function () { RectByCoor.Clear();},950); 
      
  },
    index : 0,
  Clear  : function () {
    ctx.clearRect(0,0,500,1000);
  }
};
setInterval ( function () { RectByCoor.Draw();},1000);

