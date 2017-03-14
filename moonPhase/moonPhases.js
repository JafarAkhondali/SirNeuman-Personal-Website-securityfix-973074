var moonOrb = document.getElementById("moonOrbit");
var moon = document.getElementById("moon");
var info = document.getElementById("theInfo");
var dText = document.getElementById("date");
var moonRot = 45;
var d = new Date();

var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

function orbit() {
    // set the day of the month to affect the rotation of the moon's orbit
    // note: this is not at all an accurate postioning of the moon on that day, but the day does
    // affect the position
    moonRot = (day * 12) // 30 days translates to a total 360 degrees
    
    // display date to user
    dText.innerHTML = month + "/" + day + "/" + year;
    
    // reset moon rotation if it goes greater than 360
    if (moonRot >= 360) {
        moonRot = 0;
    }
    // rotates position of moon around earth
    animation = requestAnimationFrame(orbit); // call function recursively
    moonOrb.style.transform = "rotate(" + moonRot + "deg)";
    moonOrb.style.webkitTransform = "rotate(" + moonRot + "deg)";
    
    // rotates moon itself
    moon.style.transform = " scale(0.3) rotate(" + (moonRot + 40) * (-1)  + "deg)";
    moon.style.webkitTransform = "scale(0.3) rotate(" + (moonRot + 40) * (-1)  + "deg)";
    
    // tell user what phase the moon is in
    if (moonRot < 100 && moonRot >= 30){
        info.innerHTML = "Waxing Gibbous";
    }
    else if (moonRot >= 10  && moonRot < 20) {
        info.innerHTML = "First Quarter";
    }
    else if (moonRot >= 100  && moonRot < 120) {
        info.innerHTML = "Full Moon";
    }
    else if (moonRot >= 120  && moonRot < 195) {
        info.innerHTML = "Waning Gibbous";
    }
    else if (moonRot >= 195  && moonRot < 205) {
        info.innerHTML = "Third Quarter";
    }
    else if (moonRot >= 205  && moonRot < 280) {
        info.innerHTML = "Waning Crescent";
    }
    else if (moonRot >= 280  && moonRot < 300) {
        info.innerHTML = "New Moon";
    }
    else{
        info.innerHTML = "Waxing Crescent";
    }
    
    // for presentation purposes... Constantly rotates moon around
    //moonRot = moonRot + 1;
}

function addDay() {
    day += 1;
    if (day > 30) {
        day = 1;
    }
    
}

window.addEventListener("load", orbit, false);
moon.addEventListener("click", addDay, false);


//var earth = document.getElementById("earth");
//var earthY = 0; 
//var earthX = 0;
//var directionX = 1;
//var directionY = 1;
//
//function spinEarth() {
//    animation = requestAnimationFrame(spinEarth); // call function recursively
//    earth.style.backgroundPositionX = earthX + "px";
//    earth.style.backgroundPositionY = earthY + "px";
//    earthY += directionX;
//    earthX += directionY;
//    if (earthX > 300 || earthX < 0) {
//        directionX *= -1;
//    }
//    if (earthY > 300 || earthY < 0) {
//        directionY *= -1;
//    }
//    spinEarth();
//}
//
//window.addEventListener("load", orbit, false);
//window.addEventListener("load", spinEarth, false);