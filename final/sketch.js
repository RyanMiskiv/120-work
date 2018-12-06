let mainTV;
let mainDial;
let vidOne;
let vidTwo;
let vidThree;
let vidFour;
let r = 0;

// function preload(){
//   vidOne = createVideo(flextape.mp4);
// }
function setup(){

  createCanvas(windowWidth, windowHeight);
  background('white');
  mainTV = new tv(windowWidth/2, windowHeight/2, 800, 570);
  // frameRate(1);
  vidOne = createVideo('flextape.mp4');
  vidOne.hide();
  vidOne.size(10,10);
  angleMode(DEGREES);
}

function draw(){

  background('white');
  mainTV.display();
  // mainTV.rotateDial();
  // image(vidOne, 50,50);
  // vidOne.loop();
  push();
  translate(mainTV.dial.x, mainTV.dial.y);
  rotate(r);
  mainTV.dial.displayDial();
  pop();
  r++;
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
  rotateDial(){
    // push();
    for(let i = 0; i < 45; i++){
    push();
    // translate(this.dial.x, this.dial.y);
    rotate(degrees(i));
    this.dial.displayDial();
    pop();
    // pop();
    }
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
