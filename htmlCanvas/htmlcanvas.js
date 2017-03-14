var width = 600;
var height = 450;

// image canvas
var icanvas = document.getElementById("imageCan");
var icontext = icanvas.getContext("2d");

var bubbles = new Image();
bubbles.src = "thebubbles.jpg";

// image mover canvas
var mcanvas = document.getElementById("moverCan");
var mcontext = mcanvas.getContext("2d");

// animation canvas
var acanvas = document.getElementById("animCan");
var acontext = acanvas.getContext("2d");

// variables hold x and y values for how much we shift image canvas
var shiftx = 0; 
var shifty = 0;

// variables hold color values for color picker
var R = 0;
var G = 0;
var B = 255;
var hex = rgbToHex(R,G,B);
var selectx;
var selecty;

// variables for animation
var rotationAngle = 1;
var butA = document.getElementById("add-button");
var butS = document.getElementById("sub-button");
// number of squares that get added to animation canvas. Default is 10
var shapeNum = 10;

var mousedownID = -1;

function loadPattern() {
    var rotateShape = 0;
    animation = requestAnimationFrame(loadPattern);
    acontext.clearRect(0, 0, width, height);
    acontext.save();
    acontext.translate(width/2, height/2);
    for (var i = 1; i <= shapeNum; i++) {
        rotateShape = rotationAngle + (i / shapeNum);
        acontext.fillStyle = hex;
        acontext.globalAlpha = 0.25;
        acontext.fillRect(0, 0, 150, 150);
        acontext.rotate(rotateShape * Math.PI /180);
    }
    acontext.restore();
    
    rotationAngle += 0.1;
}

function addShape() {
    shapeNum++;
    loadPattern();
}

function subShape() {
    shapeNum--;
    loadPattern();
}


// get mouse position over image canvas
function getImgMousePosition(evt) {
    var drawingArea = icanvas.getBoundingClientRect();
    return {
        x: evt.clientX - drawingArea.left,
        y: evt.clientY - drawingArea.top
    }; 
}

// create color picker over image canvas
function pickColor(evt) {
    
    var mousePosition = getImgMousePosition(evt);
    selectx = mousePosition.x;
    selecty = mousePosition.y;
    
    var imgData = icontext.getImageData(selectx, selecty, 1, 1);
    R = imgData.data[0];
    G = imgData.data[1];
    B = imgData.data[2];
    hex = rgbToHex(R,G,B);
    mcontext.clearRect(0, 0, mcanvas.width, mcanvas.height);
    mcontext.fillStyle = hex;
    mcontext.fillRect(0, 0, mcanvas.width, mcanvas.height);
    
    
    acontext.clearRect(width, height);
    acontext.translate(width/2, height/2);
    
}





// get mouse position over mover canvas
function getMoverMousePosition(evt) {
    var drawingArea = mcanvas.getBoundingClientRect();
    return {
        x: evt.clientX - drawingArea.left,
        y: evt.clientY - drawingArea.top
    }; 
}

// moves image canvas depending on where cursor is on mover canvas
function shiftImage(evt) {
    var mousePosition = getMoverMousePosition(evt);
    shiftx = mousePosition.x * (-2.0);
    shifty = mousePosition.y * (-2.0);
    
}

/* function for converting rgb into hex (http://www.webdesignerdepot.com/2013/03/how-to-create-a-color-picker-with-html5-canvas/) */

function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
  n = parseInt(n,10);
  if (isNaN(n)) return "00";
  n = Math.max(0,Math.min(n,255));
  return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
}

// set background color of mover canvas on load
mcontext.fillStyle = hex;
mcontext.fillRect(0, 0, 600, 450);


/*
function shiftImageMD(evt) {
    if(mousedownID==-1){
        mousedownID = setInterval(whilemousedown, 100)
    }

}

function shiftImageMU(evt) {
    if(mousedownID!=-1) {
        clearInterval(mousedownID);
        mousedownID=-1;
    }

}


function whilemousedown(evt) {
    var mousePosition = getMousePosition(evt);
    shiftx = mousePosition.x * (-2.0);
    shifty = mousePosition.y * (-2.0);
    
}
*/


function drawImage() {
    icontext.clearRect(0, 0, icanvas.width, icanvas.height);
    icontext.drawImage(bubbles, shiftx, shifty);
}

window.addEventListener("load", drawImage, false);
mcanvas.addEventListener("mousemove", shiftImage, false);
mcanvas.addEventListener("mousemove", drawImage, false);
icanvas.addEventListener("click", pickColor, false);
icanvas.addEventListener("click", loadPattern, false);
butA.addEventListener("click", addShape, false);
butS.addEventListener("click", subShape, false);




