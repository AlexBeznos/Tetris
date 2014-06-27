var cantag = document.getElementById("main");
var ctx = cantag.getContext("2d");

cantag.width = '500';
cantag.height ='1000';

//strang img bug
var img = new Image();
img.src = "/sprites/json.png";
ctx.drawImage(img, 0, 0);


// Draw image
var imgDrawer = function(object) {
  var img = new Image();
  img.src = "/sprites/json.png";
  ctx.drawImage(img, object.x, object.y, object.w, object.h, 0, 0, object.w, object.h);
};

// Image array maker
var spriteSheet = [];
var imageArrayMaker = function(hash) {
  var newHash = {};
  for(var key in hash) {
    newHash = hash[key].frame;
    newHash.name = key;
    spriteSheet.push(newHash);
  };
  imgDrawer(spriteSheet[6]);
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
