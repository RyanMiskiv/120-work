/*
Ryan Miskiv
Creative Coding 1
Week 11
*/
var initial;
function setup(){

  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  background(0);
 // initial = new Caterpillar(width/2,height/2);
 initial = new Caterpillar(width/4,height/4,8,'rgb(14, 255, 1)');
}

function draw(){
    background(0);
    initial.frame();

}

function mousePressed(){
  new Caterpillar(mouseX,mouseY);
}
class Circle{
  constructor(x,y,width,deltaX,deltaY){
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }


}

class Caterpillar{
  constructor(x,y,numOfSegs,color){
  this.posX = x;
  this.posY = y;
  this.color = color;
  this.deltaX = 5;
  this.deltaY = 5;
  this.numOfSegs = numOfSegs;
  this.segments = [];
  this.select = 0;
  this.separation = 40;
  //fill the array with the individual circle segment objects
  for(let i=0;i<this.numOfSegs;i++){
    this.segments.push(new Circle(this.posX - this.separation,this.posY - this.separation, 50 ,this.deltaX,this.deltaY));
    this.separation += 20;
    }

  }

  display(){
    push();
    fill(this.color);
    noStroke();
    // translate(this.posX,this.posY);
    for(let i=0;i<this.numOfSegs;i++){
      ellipse(this.segments[i].x,this.segments[i].y,this.segments[i].width);
    }
    pop();
  }
//TODO: Figure out how to make these parts move in a delayed fashion
  move(){

    this.segments[this.select].x += this.segments[this.select].deltaX;
    this.segments[this.select].y += this.segments[this.select].deltaY;
  }


  edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.segments[this.select].x + (this.segments[this.select].width /2) >= width || this.segments[this.select].x - (this.segments[this.select].width /2) <= 0) {
            this.segments[this.select].deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.segments[this.select].y + (this.segments[this.select].width /2) >= height || this.segments[this.select].y - (this.segments[this.select].width /2) <= 0) {
            this.segments[this.select].deltaY *= -1;
        }
    }
  // frame(){
  //   this.display();
  //   this.move();
  //   this.select++;
  //   if(this.select == numOfSegs){
  //     this.select = 0;
  //   }
  //   this.edgeCheck();
  // }
  frame(){
    for(let i = 0;i<this.numOfSegs;i++){
      this.display();
      this.move();
      this.edgeCheck();
      this.select++;
    }
    this.select = 0;

  }


}
