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


// Image array maker
var spriteSheet = [];
var imageArrayMaker = function(hash) {
  var newHash = {};
  for(var key in hash) {
    newHash.frame = hash[key].frame;
    newHash.frame.name = key;
    spriteSheet.push(newHash);
  };
};

// Request to json
var xhr = new XMLHttpRequest;
xhr.open("GET", "/sprites/json", true);
xhr.onload = function() {
  var parsed = JSON.parse(xhr.responseText);
  var frame = parsed.frames;
  imageArrayMaker(frame);  
};
xhr.send();

console.log(spriteSheet);

