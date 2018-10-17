/*
Homework 8
For Loop sketch
Ryan Miskiv
Creative Coding 1
*/
var spacing = 15;

function setup(){
  createCanvas(windowWidth,windowHeight);
  stroke(10);
}

function draw(){
  if(mouseIsPressed == false){
    fill('black');
    background('white');
    }
    for(let i = 0;i<=height; i+= spacing){
      line(0,i,width/2,i + 50);
      line(width,i,width/2, i +50);
    }
}
function mousePressed(){
  fill('white');
  background('black');
}
