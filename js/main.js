var cantag = document.getElementById("main");
var ctx = cantag.getContext("2d");

cantag.width = '500';
cantag.height ='1000';


// Draw image
var imgDrawer = function(object) {
  var img = new Image();
  img.src = "/sprites/json.png";
  img.onload = function() {
    ctx.drawImage(img, object.x, object.y, object.w, object.h, 0, 0, object.w, object.h);
  }
};

// Image array maker
var spriteSheet = [];
var imageArrayMaker = function(hash) {
  var newHash = {};
  var rand = Math.floor((Math.random() * 7) + 0);
  for(var key in hash) {
    newHash = hash[key].frame;
    newHash.name = key;
    spriteSheet.push(newHash);
  };
  imgDrawer(spriteSheet[rand]);
};

// Parser for json
var parser = function(req) {
  var parsed = JSON.parse(req.responseText);
  var frame = parsed.frames;
  imageArrayMaker(frame); 
};

// Request to json
var request = function() {
  var xhr = new XMLHttpRequest;
  xhr.open("GET", "/sprites/json", true);
  xhr.onload = function() {
    parser(xhr); 
  };
  xhr.send();
};

request();
