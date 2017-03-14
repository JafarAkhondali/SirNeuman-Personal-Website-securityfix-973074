
var moon = document.getElementById("moon");

var hovShape = document.getElementById("assembleShape");
var triTL = document.getElementById("triTL");
var triTR = document.getElementById("triTR");
var triBL = document.getElementById("triBL");
var triBR = document.getElementById("triBR");

var wholeCan = document.getElementById("allCans");
var canL = document.getElementById("canLeft");
var canM = document.getElementById("canMid");
var canR = document.getElementById("canRight");

function orbitF(){
    moon.setAttribute("class", "front");
    setTimeout( orbitB, 2000)
    
}

function orbitB() {
    moon.setAttribute("class", "back");
    setTimeout(orbitF, 2000);
}

function assembleShape() {
    triTL.setAttribute("class", "after");
    triTR.setAttribute("class", "after");
    triBL.setAttribute("class", "after");
    triBR.setAttribute("class", "after");
}

function disassShape() {
    triTL.setAttribute("class", "before");
    triTR.setAttribute("class", "before");
    triBL.setAttribute("class", "before");
    triBR.setAttribute("class", "before");
}

function fadeCansIn() {
    canL.setAttribute("class", "after");
    canM.setAttribute("class", "after");
    canR.setAttribute("class", "after");
}

function fadeCansOut() {
    canL.setAttribute("class", "before");
    canM.setAttribute("class", "before");
    canR.setAttribute("class", "before");
}

window.addEventListener("load", orbitF, false);

hovShape.addEventListener("mouseover", assembleShape, false);
hovShape.addEventListener("mouseout", disassShape, false);

wholeCan.addEventListener("mouseover", fadeCansIn, false);
wholeCan.addEventListener("mouseout", fadeCansOut, false);


