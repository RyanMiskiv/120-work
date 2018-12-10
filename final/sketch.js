
//Global Variable needed for the radio
let mainRadio;
let songOne;
let songTwo;
let songThree;
let songFour;
let effect;
let d;
let switchOn;
let switchOff;

//Load up all the songs/sound effects
function preload(){

//Sound Effects
  effect = loadSound('sounds/RadioEffect.wav');
  switchOn = loadSound('sounds/switchon.wav');
  switchOff = loadSound('sounds/switchoff.wav');

//Songs
  songOne = loadSound('sounds/Lifetime Achievement Award.mp3');
  songTwo = loadSound('sounds/Tactile Sensation.mp3');
  songThree = loadSound('sounds/Homeless in Heathrow.mp3');
  songFour = loadSound('sounds/Tell Me.mp3');

}

function setup(){

  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
//Create the radio obejct
  mainRadio = new radio(windowWidth/2, windowHeight/2, 800, 570);

//Initially set the volumes of these. They won't be affected or updated but they were slightly too loud
  switchOn.setVolume(0.5);
  switchOff.setVolume(0.5);

//Start all the songs at the same time
  songOne.loop();
  songTwo.loop();
  songThree.loop();
  songFour.loop();

}

function draw(){

  background('rgb(159, 145, 145)');

//Keep track of where the mouse is in relation to the dial, so we can figure out when it gets clicked
  d = dist(mainRadio.dial.x, mainRadio.dial.y, mouseX, mouseY);

//Draw the radio and the dial from the object classes
  mainRadio.display();
  mainRadio.dial.displayDial();


//Volume control based on on/off status & 'station' selection
  if(mainRadio.on == false){
    songOne.setVolume(0);
    songTwo.setVolume(0);
    songThree.setVolume(0);
    songFour.setVolume(0);
    effect.setVolume(0);
  }
  else{

  //Lifetime Achievement Award
      if(mainRadio.dial.rotation == 90){
        songFour.setVolume(0);
        songOne.setVolume(0.5);
      }
  //Tactile Sensation
      if(mainRadio.dial.rotation == 180){
        songOne.setVolume(0);
        songTwo.setVolume(0.5);
      }
  //Homeless in Heathrow
      if(mainRadio.dial.rotation == 270){
        songTwo.setVolume(0);
        songThree.setVolume(0.25);
      }
  //Tell me
      if(mainRadio.dial.rotation == 0){
        songThree.setVolume(0);
        songFour.setVolume(0.25);
      }
      effect.setVolume(0.5);
    }

}

function mousePressed(){
  //rotates the dial on press
  if(d < mainRadio.dial.r){
    effect.play();
    mainRadio.dial.rotation = (mainRadio.dial.rotation + 90) % 360 ;

  }

//Switching on/off button on click
  if(mouseX < mainRadio.centerX + 310 && mouseX > mainRadio.centerX + 210
    && mouseY < mainRadio.centerY + 215 && mouseY > mainRadio.centerY + 185){
      mainRadio.on = !mainRadio.on;
      if(mainRadio.on == false){
        switchOff.play();
      }
      else{
        switchOn.play();
      }
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
    this.on = false;

  }
  //Drawing everything up
  display(){

  push();
    noStroke();
    rectMode(CENTER);

//main body
  push();
    fill(this.color);
    rect(this.centerX, this.centerY, this.width, this.height, 20);
  pop();

//outline bit
  push();
    fill('rgb(117, 82, 45)');
    rect(this.centerX, this.centerY, this.width - 50, this.height - 30, 10);
  pop();

//side panel
  push();
    fill('black');
    rect(this.centerX + 260, this.centerY, 200, 500);
  pop();

//speaker
  push();
    fill('rgb(43, 43, 43)');
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

//On button bg
push();

fill('rgb(129, 129, 129)');
rect(this.centerX + 260 ,this.centerY + 200, 100, 30, 10);
pop();

//Button Text
push();
fill('white');
textSize(16);
textAlign(CENTER);
text('OFF  /  ON', this.centerX + 260, this.centerY + 235);
pop();

//On button switch
push();
fill('rgb(106, 15, 15)');
if(this.on == false){
  rect(this.centerX + 235, this.centerY + 200, 50, 27, 15);
}
if(this.on == true){
  rect(this.centerX + 285, this.centerY + 200, 50, 27, 15);
}
pop();
//TODO: Add in an antenna
pop();

  }

}


//Dial as a seperate object created as part of the intialization of the radio, but with its own functionality. Easier to interact with it
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
        pop();
      pop();
  }

}
