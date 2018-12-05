let mainTV;
let mainDial;
let vidOne;
let vidTwo;
let vidThree;
let vidFour;

function preload(){
  
}
function setup(){

  createCanvas(windowWidth, windowHeight);
  background('white');
  mainTV = new tv(windowWidth/2, windowHeight/2, 800, 570);

}

function draw(){

  background('white');
  mainTV.display();
}

class tv{

  constructor(centerX,centerY,width,height){
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.color = color(117, 47, 21);
    this.dial = new dial(this.centerX + 260, this.centerY - 150, 130);
  }
  display(){
push();
    noStroke();
    rectMode(CENTER);
//main body
  push();
    fill(this.color);
    rect(this.centerX, this.centerY, this.width, this.height);
  pop();
//outline bit
  push();
    fill('rgb(182, 174, 174)');
    rect(this.centerX, this.centerY, this.width - 50, this.height - 30);
  pop();
//side panel
  push();
    fill('black');
    rect(this.centerX + 260, this.centerY, 200, 500);
  pop();
//screen
  push();
    fill('rgb(198, 195, 192)');
    rect(this.centerX - 110, this.centerY, 500, 520, 75);
  pop();
pop();
this.dial.displayDial();

  }


}
//TODO: Get rotating
class dial{
  constructor(x,y,width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.rotation = 0;
  }
  displayDial(){
    push();
      fill('rgb(185, 185, 185)');
      ellipse(this.x,this.y,this.width);
    pop();

    push();
      fill('black');
      strokeWeight(5);
      line(this.x, this.y, this.x, this.y - this.width/2);
    pop();


  }
}
