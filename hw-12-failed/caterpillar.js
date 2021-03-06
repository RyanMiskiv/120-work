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
  for(let i = 0; i < this.numOfSegs; i++){
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

    for(let i = 0; i < this.numOfSegs; i++){
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
//take everything and apply it to each individual segment. Everything occurs in a single frame
  frame(){
    for(let i = 0; i < this.numOfSegs; i++){
      this.display();
      this.move();
      this.edgeCheck();
      this.select++;
    }
    this.select = 0;

  }



  


}
