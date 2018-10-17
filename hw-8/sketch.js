/*
Homework 8
For Loop sketch
Ryan Miskiv
Creative Coding 1
*/

//global variables
varhorizSpacing = 15;

function setup(){
  createCanvas(windowWidth,windowHeight);

}

function draw(){

  strokeWeight(3);

  //mouse movement variables mapped
  let vertiSpacing = map(mouseY,0,height, 20,200);
 horizSpacing = map(mouseX,0,width,15,30);

  //Color invert based on clicking the mouse
  if(mouseIsPressed == false){
    stroke('black');
    background('white');
    }
    else{
      stroke('white');
      background('black');
    }

    //drawing the actual lines
    for(let i = 0;i<=height - vertiSpacing + 20; i+=horizSpacing){
      line(0,i,width/2,i + vertiSpacing);
      line(width,i,width/2, i + vertiSpacing);
    }

}
