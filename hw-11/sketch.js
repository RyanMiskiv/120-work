/*
Ryan Miskiv
Creative Coding 1
Week 11
*/

//settings for the array of caterpillars
let caterpillars = [];
let max = 25;


//TODO: Make this able to make a ton of Caterpillar of various colors, sizes, and directions
function setup(){

  createCanvas(windowWidth,windowHeight);
  background('rgb(114, 230, 233)');

 for(let i = 0;i<max;i++){

   caterpillars.push(new Caterpillar(width/2, height/2, random(5,10), color(random(255) , random(255), random(255)), random(-5,5), random(-5,5)));
 }
}

function draw(){

    background('rgb(114, 230, 233)');
    // initial.frame();
    for(let i = 0; i<max;i++){
      caterpillars[i].frame();
    }

}

//store all the data for the circle segments within an object, to make things easier.
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

  constructor(x,y,numOfSegs,color,deltaX,deltaY){

//building the object, setting all the different variables we need
  this.posX = x;
  this.posY = y;
  this.color = color;
  this.deltaX = deltaX;
  this.deltaY = deltaY;
  this.numOfSegs = numOfSegs;
  this.segments = [];
  this.select = 0;
  this.separationX = this.deltaX * 4;
  this.separationY = this.deltaY * 4;

  //fill the array with the individual circle segment objects
  for(let i=0;i<this.numOfSegs;i++){
    this.segments.push(new Circle(this.posX - this.separationX,this.posY - this.separationY, 40 ,this.deltaX,this.deltaY));
    this.separationX += this.deltaX * 4;
    this.separationY += this.deltaY * 4;

    }

  }
//actually go through and draw each individual segment
  display(){

    push();

    fill(this.color);
    noStroke();

    for(let i=0;i<this.numOfSegs;i++){
      ellipse(this.segments[i].x,this.segments[i].y,this.segments[i].width);
    }
    pop();

  }
//update the selected segment with the delta
  move(){

    this.segments[this.select].x += this.segments[this.select].deltaX;
    this.segments[this.select].y += this.segments[this.select].deltaY;

  }

//ensure that the caterpillar will bounce off the boundaries
  edgeCheck() {

        // check if the selected segment has hit a vertical wall (left or right walls)
        if (this.segments[this.select].x + (this.segments[this.select].width /2) >= width || this.segments[this.select].x - (this.segments[this.select].width /2) <= 0) {
            this.segments[this.select].deltaX *= -1;
        }
        // check if the selected segment has hit a horizontal wall (top or bottom walls)
        if (this.segments[this.select].y + (this.segments[this.select].width /2) >= height || this.segments[this.select].y - (this.segments[this.select].width /2) <= 0) {
            this.segments[this.select].deltaY *= -1;
        }
    }
//Take everything and apply it to each individual segment. Everything occurs in a single frame
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
