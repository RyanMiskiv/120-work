/*
Ryan Miskiv
Creative Coding 1
Week 5 HW - Animation
*/
let centerX = windowWidth/2;
let centerY = windowHeight/2;
function setup(){
  createCanvas(windowWidth,windowHeight);
  translate(width/2,height/2);

}



function draw(){

  background('rgb(131, 173, 236)');
  textSize(36);
  text("Mouse X: " + mouseX, 10, 40);
  text("Mouse Y: " + mouseY, 10, 80);
  //
  //
    // line(width/2,-(height),width/2,height);
    // line((height/2),width/2,width/2,0);



    //body
    push();
    fill('red');
    noStroke();
    //main body
    quad(mouseX -37.5,mouseY,
       mouseX + 37.5, mouseY,
        width/2 +37.5,height,
        width/2 -37.5,height);
    // quad(mouseX -37.5,mouseY,
    //     mouseX +37.5,mouseY,
    //     centerX + 37.5, height,
    //     centerX -37.5, height);

    // ellipse(mouseX, mouseY - 40,125);

    //head bit
    arc(mouseX,mouseY,75,75,PI,TWO_PI);

    //arms
      push();
        quad(mouseX -100,mouseY,
            mouseX -50,mouseY,
            mouseX,mouseY +200,
            mouseX,mouseY +250);
      pop();

    pop();


}
