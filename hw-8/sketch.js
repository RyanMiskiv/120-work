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
  let density = map(mouseY,0,height, 20,70);
  spacing = map(mouseX,0,width,15,30);
  //default color set
  if(mouseIsPressed == false){
    stroke('black');
    background('white');
    }
    else{
      stroke('white');
      background('black');
    }

    //lines
    for(let i = 0;i<=height; i+= spacing){
      line(0,i,width/2,i + density);
      line(width,i,width/2, i + density);
    }

}
