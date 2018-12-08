let mainRadio;
let vidOne;
let vidTwo;
let vidThree;
let vidFour;
let r = 0;
let clickCount = 0;
let d;

function preload(){
  vidOne = createVideo('flextape.mp4');
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  background('white');
  angleMode(DEGREES);

  mainRadio = new radio(windowWidth/2, windowHeight/2, 800, 570);

  // frameRate(1);
  // vidOne = createVideo('flextape.mp4');
  vidOne.hide();


}

function draw(){

  background('white');
  d = dist(mainRadio.dial.x, mainRadio.dial.y, mouseX, mouseY);
  vidOne.size(500,200);
  mainRadio.display();
  mainRadio.dial.displayDial();


  // image(vidOne, mainTV.centerX - 300, mainTV.centerY - 250);
  // vidOne.loop();

//WORKING ROTATE CODE
push();
translate(mainRadio.dial.x, mainRadio.dial.y);
rotate(45);
mainRadio.dial.displayDial();
pop();
  // r++;

}
function mousePressed(){
  if(d < mainRadio.dial.r){

  push();
  translate(mainRadio.dial.x, mainRadio.dial.y);
  rotate(45);
  mainRadio.dial.displayDial();
  pop();
  console.log('is working?');
}
  }

//Creating the physical radio itself
class radio{

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
// this.dial.displayDial();

  }
  rotateDial(){
    push();
    translate(this.dial.x, this.dial.y);
    rotate(45);
    this.dial.displayDial();
    pop();
    }

}


//Dial as a seperate object created as part of the intialization of the TV, but with its own functionality. Easier to interact with it
class dial{
  constructor(x,y,width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.rotation = 0;
    this.r = width/2;
  }
  displayDial(){
    push();
    translate(this.x, this.y);
      fill('rgb(185, 185, 185)');
      ellipse(0,0,this.width);
    pop();

    push();
      translate(this.x, this.y);
      fill('black');
      strokeWeight(5);
      line(0,0, 0, 0 - this.width/2);
    pop();

  }

}
