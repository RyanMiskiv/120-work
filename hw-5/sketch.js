/*
Ryan Miskiv
Creative Coding 1
Week 5 HW - Animation
*/
let newCenterX = windowWidth/2;
let newCenterY = windowHeight/2;
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
    quad(mouseX,mouseY,
       mouseX + 75,
       mouseY, width/2 +37.5,
       height,width/2 -37.5,height);

    ellipse(mouseX + 37.5,mouseY - 40,125);
    pop();


}
