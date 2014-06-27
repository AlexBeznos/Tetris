var cantag = document.getElementById("main");
var ctx = cantag.getContext("2d");

cantag.width = '250';
cantag.height ='500';

var timeInterval = 40;


  var img = new Image();
  img.src = "/sprites/json.png";

// function for saving blocks on the game field
var savedBlocks = [];
var blockSaver = function(hash, x, y) {
  hash.ex = x;
  hash.ey = y;
  savedBlocks.push(hash);
  for(var id in savedBlocks){
    img.onload = function() {
      ctx.drawImage(img, savedBlocks[id].x, 
                  savedBlocks[id].y, 
                  savedBlocks[id].w, 
                  savedBlocks[id].h, 
                  savedBlocks[id].ex, 
                  savedBlocks[id].ey, 
                  savedBlocks[id].w, 
                  savedBlocks[id].h
                 )
    };
  };
  randomiser();
};


// Calculator of block stop
var calculator = function(height, key) {
  var numb = cantag.height - height;
  var answer = (key < numb) ? true : false;
  return answer
};

// Draw image
var imgDrawer = function(object) {
  var i = 0;
  img.onload = function() {
    var interval = setInterval( function() {
      i+=2;
      ctx.clearRect ( 0, i-2, object.w , object.h );
      var calc = calculator(object.h, i); 
      if(calc) {
        ctx.drawImage(img, object.x, 
                      object.y, 
                      object.w, 
                      object.h, 
                      0, i, 
                      object.w, 
                      object.h);
      } else if (!calc) { clearInterval(interval); blockSaver(object, 0, i); }; //send object, x and y for saving on the game field
    }, timeInterval);
  }
};

// Randomiser
var randomiser = function() {
  var rand = Math.floor((Math.random() * 7) + 0);
  imgDrawer(spriteSheet[rand]);
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
  randomiser();
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
