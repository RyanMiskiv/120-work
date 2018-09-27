/*
Ryan Miskiv
Creative Coding 1
Week 5 HW - Animation "Nightmare Mike Wazowski"
*/
function setup(){
  createCanvas(windowWidth,windowHeight);
  translate(width,height);
}
let rotateIncrement = 1;
function draw(){

  background('rgb(131, 173, 236)');
  // textSize(36);
  // text("Mouse X: " + mouseX, 10, 40);
  // text("Mouse Y: " + mouseY, 10, 80);

  noCursor();
  noStroke();

//Horns
  push();
  fill('white');
//left horn
  triangle(mouseX -25, mouseY -100, //right most point
          mouseX -55, mouseY -80,   //left most point
          mouseX - 55, mouseY -120);//center point
//right horn
  triangle(mouseX +25, mouseY -100, //left most point
          mouseX +55, mouseY -80,   //right most point
          mouseX + 55, mouseY -120);//center point
  pop();

//Arms
  push();
  fill('rgb(0, 254, 41)');
  //left arm
  quad(mouseX - 90,mouseY,
      mouseX - 90,mouseY + 40,
      width/2 - 150, height/2 + 150,
      width/2 - 170, height/2 + 150);
  //right arm
  quad(mouseX + 90,mouseY,
      mouseX + 90,mouseY + 40,
      width/2 + 150, height/2 + 150,
      width/2 + 170, height/2 + 150);
  //hands
  ellipse(width/2 -160,height/2 + 150, 30, 30);
  ellipse(width/2 +160,height/2 + 150, 30, 30);
  //lower arms
  // rect(width/2 - 170, height/2 + 150,15,75);
  // rect(width/2 + 150, height/2 + 150,15,75);
  //TODO: finish these awful arm bits
  pop();

//Legs
  push();
  fill('rgb(0, 254, 41)');
  //upper legs
  quad(mouseX - 60,mouseY + 60,
      mouseX - 80,mouseY + 60,
      width/2 - 100, height/2 + 250,
      width/2 - 80, height/2 + 250);
  quad(mouseX + 60,mouseY + 60,
      mouseX + 80,mouseY + 60,
      width/2 + 100, height/2 + 250,
      width/2 + 80, height/2 + 250);

    //knees
    ellipse(width/2 + 90, height/2 + 250, 21, 30);
    ellipse(width/2 - 90, height/2 + 250, 21, 30);

    //lower Legs
    rect(width/2 -100, height/2 + 250, 20, 100);
    rect(width/2 +80, height/2 + 250, 20, 100);

    //Feet
    ellipse(width/2 -100,height/2 + 350, 45, 20);
    ellipse(width/2 +80, height/2 + 350, 45, 20);
  pop();

//Main Body
push();
  push();
  noStroke();
  fill('rgb(0, 254, 41)');
  point(0, 0);
  ellipse(mouseX, mouseY, 200, 210);

  //Eye
    push();
    fill('white');
    ellipse(mouseX, mouseY - 50, 85);
    pop();

  //Pupil
    push();
    fill('green');
    ellipse(mouseX, mouseY - 50, 35);
    pop();

  //Inner Pupil/Mouth
    push();
    fill('black');
    ellipse(mouseX, mouseY - 50, 20);
    arc(mouseX, mouseY + 25, 150 , 100, TWO_PI, PI);
    pop();

  //Teeth
    push();
    fill('white');
    arc(mouseX - 60, mouseY + 25, 30, 20, TWO_PI, PI);
    arc(mouseX - 30, mouseY + 25, 30, 20, TWO_PI, PI);
    arc(mouseX, mouseY + 25, 30, 20, TWO_PI, PI);
    arc(mouseX + 30, mouseY + 25, 30, 20, TWO_PI, PI);
    arc(mouseX + 60, mouseY + 25, 30, 20, TWO_PI, PI);
    pop();

  pop();
  push();
  translate(mouseX,mouseY);
  rotate(radians(rotateIncrement));
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text("Mike Wazowski", mouseX, mouseY - 200);
  pop();
  rotateIncrement += 1;
}
