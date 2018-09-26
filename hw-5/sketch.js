/*
Ryan Miskiv
Creative Coding 1
Week 5 HW - Animation
*/
function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background('rgb(131, 173, 236)');
  textSize(36);
  text("Mouse X: " + mouseX, 10, 40);
  text("Mouse Y: " + mouseY, 10, 80);
}
