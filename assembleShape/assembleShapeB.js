// get window size
var w = window.innerWidth;
var h = window.innerHeight; 

// set all variables
var text = document.getElementById("theText");     

// shapes
var centerSQ = document.getElementById("centerSQ");
var topSQ = document.getElementById("topSQ");
var tlTri = document.getElementById("upLeftTri");
var leftSQ = document.getElementById("leftSQ");
var blTri = document.getElementById("downLeftTri");
var botSQ = document.getElementById("botSQ");
var brTri = document.getElementById("downRightTri");
var rightSQ = document.getElementById("rightSQ");
var urTri = document.getElementById("upRightTri");

var theShape = document.getElementById("finalShape"); 
                                    
// buttons
var upCont = document.getElementById("uContA");
var ulCont = document.getElementById("ulContA");
var leftCont = document.getElementById("lContA");
var dlCont = document.getElementById("dlContA");
var downCont = document.getElementById("dContA");
var drCont = document.getElementById("drControlA");
var rightCont = document.getElementById("rControlA");
var urCont = document.getElementById("urContA");

// keep track of whether the shape has been assembled
var upSet = false; 
var ulSet = false;
var leftSet = false;
var blSet = false;
var botSet = false;
var brSet = false;
var rightSet = false;
var urSet = false; 

function winText() {
    text.innerHTML = "SHAPE ASSEMBLED!!!";
    text.style.fontSize = "45px";
    text.setAttribute("class", "anim");
    document.body.setAttribute("class", "win");
    completeBot();
    completeTop();
    completeLeft();
    completeRight();
    setTimeout(function(){spinShape()}, 3000);
}

function spinShape() {
    theShape.setAttribute("class", "win");
}

function completeBot() {
    botSQ.style.Transform = "translateY(-82px) rotateX(90deg)"; 
    botSQ.style.webkitTransform = "translateY(-82px) rotateX(90deg)";
}

function completeTop() {
    topSQ.style.Transform = "translateY(102px) rotateX(90deg)";
    topSQ.style.webkitTransform = "translateY(102px) rotateX(90deg)";
}

function completeLeft() {
    leftSQ.style.Transform = "translateX(164px) rotateY(90deg)"; 
    leftSQ.style.webkitTransform = "translateX(164px) rotateY(90deg)";
}

function completeRight() {
    rightSQ.style.Transform = "translateX(-164px) rotateY(90deg)"; 
    rightSQ.style.webkitTransform = "translateX(-164px) rotateY(90deg)"; 
}

 
function checkSet() {
    if (upSet && ulSet && leftSet && blSet && botSet && brSet 
        && rightSet && urSet === true) {
        
        setTimeout(function(){winText()}, 2000);
    }
}




// move shape functions when svg buttons are clicked
function topMove() {
    topSQ.style.Transform = "translateY(102px)";
    topSQ.style.webkitTransform = "translateY(102px)";
    upSet = true;
    checkSet();

    
}



function tlMove() {
    tlTri.style.Transform = "translateY(104px)  translateX(170px)";
    tlTri.style.webkitTransform = "translateY(104px)  translateX(170px)";
    // the amount of movement on the x axis is dependent on window width
    // tlTri.style.webkitTransform = "translateY(102px)  translateX(" + w / 7.0 + "px)";
    // does not adjust to correct position based on window width... stick with fixed for now
    ulSet = true;
    checkSet();
}

function leftMove() {
    leftSQ.style.Transform = "translateX(164px)"; 
    leftSQ.style.webkitTransform = "translateX(164px)";
    leftSet = true;
    checkSet();
    
}

function blMove() {
    blTri.style.Transform = "rotate(-90deg) translateY(170px) translateX(80px)"; 
    blTri.style.webkitTransform = "rotate(-90deg) translateY(170px) translateX(80px)";
    blSet = true;
    checkSet();
}

function botMove() {
    botSQ.style.Transform = "translateY(-82px)"; 
    botSQ.style.webkitTransform = "translateY(-82px)";
    botSet = true;
    checkSet();
}

function brMove() {
    brTri.style.Transform = "rotate(90deg) translateY(164px) translateX(-80px)"; 
    brTri.style.webkitTransform = "rotate(90deg) translateY(164px) translateX(-80px)";
    brSet = true;
    checkSet(); 
} 

function rightMove() {
    rightSQ.style.Transform = "translateX(-164px)"; 
    rightSQ.style.webkitTransform = "translateX(-164px)";
    rightSet = true;
    checkSet();
} 

function urMove() {
    urTri.style.Transform = "translateY(104px) translateX(-164px)"; 
    urTri.style.webkitTransform = "translateY(104px) translateX(-164px)";
    urSet = true;
    checkSet(); 
} 
 


upCont.addEventListener("click", topMove, false);
ulCont.addEventListener("click", tlMove, false);
leftCont.addEventListener("click", leftMove, false);
dlCont.addEventListener("click", blMove, false);
downCont.addEventListener("click", botMove, false);
drCont.addEventListener("click", brMove, false);
rightCont.addEventListener("click", rightMove, false);
urCont.addEventListener("click", urMove, false);
 


 



