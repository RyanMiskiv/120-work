/*
Ryan Miskiv
Creative Coding 1
Week 4 Homework: Monster

I will be creating a robotic monster portrait.
*/
function setup(){
  //setting up canvas for drawing
  createCanvas(600,800);

  // background(50);

}

function draw(){
  //Set origin to center of canvas
  translate(300,400);

  // //making axes to help work with
  // line(-300,0,300,0);
  // line(0,400,0,-400);

  // *****************************************************
     // create a sandbox for the entire character
  push();


     // ** FACE **********************************
     push();
     // body code goes here
     //Nose Code, lines
     strokeWeight(2);
     line(20,0,0,-50);
     line(-20,0,0,-50);
     line(20,0,0,20);
     line(-20,0,0,20);

     //accenting lines
     strokeWeight(1);
     line(0,-50,0,20);
     line(-20,0,0,-10);
     line(20,0,0,-10);
     pop();
     // **END NOSE**


     // ** EYES **********************************
     push();

     //eyes
     fill(0);
     ellipse(100,-80,80);
     ellipse(-100,-80,80);
     //pupils
     noStroke();
     fill('rgb(167, 27, 18)');
     ellipse(100,-80,25);
     ellipse(-100,-80,25);

     pop();
     // **END EYES**


     // ** HEAD **********************************
     push();

     //lines on the side of his mask going up
     strokeWeight(2);
     line(-225,-60,-225,-175);
     line(225,-60,225,-175);

     //TODO: ARC ON THE TOP, LAB?
     // arc(0,-350,450,30,radians('60'),radians(120));

     //Diagonal Lines going into the jaw
     push();
     strokeWeight(1)
     line(-225,-60,-190,10);
     line(225,-60,190,10);
     pop();

     //Lines down into the jaw
     line(-190,10,-190,100);
     line(190,10,190,100);





     pop();
     // **MOUTH**
     push();
     // mouth code goes here

     pop();
     // **END MOUTH**

     // **EYES**
     push();
     // eye code goes here

     pop();
     // **END EYES**

     pop();
     // **END HEAD**


     // ** END CHARACTER SANDBOX *******************
 pop();


}
