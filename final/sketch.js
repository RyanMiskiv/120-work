let mainRadio;
let songOne;
let songTwo;
let songThree;
let songFour;
let effect;
let r = 0;
let clickCount = 0;
let d;

function preload(){
  effect = loadSound('RadioEffect.wav');
  songOne = loadSound('Lifetime Achievement Award.mp3');
  songTwo = loadSound('Tactile Sensation.mp3');
  songThree = loadSound('Homeless in Heathrow.mp3');
  songFour = loadSound('Tell Me.mp3')
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  background('white');
  angleMode(DEGREES);

  mainRadio = new radio(windowWidth/2, windowHeight/2, 800, 570);

}

function draw(){

  background('white');
  d = dist(mainRadio.dial.x, mainRadio.dial.y, mouseX, mouseY);
  // vidOne.size(500,200);
  mainRadio.display();
  mainRadio.dial.displayDial();

}
function mousePressed(){
  //rotates the dial on press
  if(d < mainRadio.dial.r){
    effect.play();
    mainRadio.dial.rotation = (mainRadio.dial.rotation + 90) % 360 ;
  //
    // if(mainRadio.dial.rotation == 360){
    //   mainRadio.dial.rotation = 0;
    // }

    if(mainRadio.dial.rotation == 90){
      songFour.pause();
      songOne.play();
    }
    if(mainRadio.dial.rotation == 180){
      songOne.pause();
      songTwo.play();
    }
    if(mainRadio.dial.rotation == 270){
      songTwo.pause();
      songThree.play();
    }
    if(mainRadio.dial.rotation == 0){
      songThree.pause();
      songFour.play();
    }
    console.log(mainRadio.dial.rotation);
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
    this.rotation = 0;
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

//speaker
  push();
    fill('rgb(94, 94, 94)');
    ellipse(this.centerX - 110, this.centerY, 500);
pop();

//Speaker detail
push();
  fill('rgba(0, 0, 0, 0.84)');
  strokeWeight(15);
  //Horizontal Lines
  rect(this.centerX - 110, this.centerY, 30, 500, 30);
  rect(this.centerX - 200, this.centerY, 30, 460, 30);
  rect(this.centerX - 290, this.centerY, 30, 325, 30);
  rect(this.centerX - 20, this.centerY, 30, 460, 30);
  rect(this.centerX + 70, this.centerY, 30, 325, 30);

  //Vertial Lines
  rect(this.centerX - 110, this.centerY, 500, 30, 30);
  rect(this.centerX - 110, this.centerY + 90, 460, 30, 30);
  rect(this.centerX - 110, this.centerY + 180, 325, 30, 30);
  rect(this.centerX - 110, this.centerY - 90, 460, 30, 30);
  rect(this.centerX - 110, this.centerY - 180, 325, 30, 30);

pop();
this.dial.displayDial();
pop();
  }
  // rotateDial(){
  //   push();
  //   translate(this.dial.x, this.dial.y);
  //   rotate(45);
  //   this.dial.displayDial();
  //   pop();
  //   }

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
    rotate(this.rotation) ;
        push();
          fill('rgb(185, 185, 185)');
          ellipse(0,0,this.width);
        pop();

        push();
          fill('black');
          strokeWeight(5);
          line(0,0, 0, 0 - this.width/2);
          // console.log('?');
        pop();
      pop();
  }

}
