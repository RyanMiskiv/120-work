/*
Ryan Miskiv
Creative Coding 1
Week 11
*/

function setup(){

  createCanvas(windowWidth,windowHeight);

}

function draw(){
  background(255);
  new Caterpillar(0,0);
}

function mousePressed(){
  new Caterpillar(mouseX,mouseY);
}
class Circle{
  constructor(x,y,width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
  }
  posX(){
    return this.x;
  }
  posY(){
    return this.y;
  }
  width(){
    return this.width;
  }

}

class Caterpillar{
  constructor(x,y){
  this.posX = x;
  this.posY = y;
  this.deltaX = 1;
  this.deltaY = 1;
  this.numOfSegs = 8;
  this.segments = [];
  //fill the array with the individual circle segment objects
  for(i=0;i<numOfSegs;i++){
    this.segments.push(new Circle(this.posX,this.posY, 10));
    }

  }

  display(){
    push();
    fill('green');
    noStroke();
    for(i=0;i<this.numOfSegs;i++){
      ellipse(segments[i].posX(),segments[i].posY(),segments[i].width(),segments[i].width());
    }
    pop();
  }
//TODO: Figure out how to make these parts move in a delayed fashion
  move(){

  }

  edgeCheck(){
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
      }
}
