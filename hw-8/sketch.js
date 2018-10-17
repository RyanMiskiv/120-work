/*
Homework 8
For Loop sketch
Ryan Miskiv
Creative Coding 1
*/

//global variables
var spacing = 15;

function setup(){
  createCanvas(windowWidth,windowHeight);

}

function draw(){
  strokeWeight(3);
  //default color set
  if(mouseIsPressed == false){
    stroke('black');
    background('white');
    }

    //lines
    for(let i = 0;i<=height; i+= spacing){
      line(0,i,width/2,i + 50);
      line(width,i,width/2, i +50);
    }

}
function mousePressed(){
  stroke('white');
  background('black');
}
