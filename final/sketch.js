let MainTV;

function setup(){

  createCanvas(windowWidth, windowHeight);
  background('white');
  MainTV = new tv(windowWidth/2, windowHeight/2, 800, 570);

}

function draw(){

  background('white');
  MainTV.display();
}

class tv{

  constructor(centerX,centerY,width,height){
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.color = color(117, 47, 21);

  }
  display(){

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
    rect(this.centerX + 260, this.centerY, 200, 520);
  pop();
//screen
  push();
    fill('rgb(198, 195, 192)');
    rect(this.centerX - 110, this.centerY, 500, 520, 75);
  pop();

  }
  dial(){

  }

}
