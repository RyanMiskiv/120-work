/*
Ryan Miskiv
Creative Coding 1
Week 4 Homework: Monster

I will be creating a robotic monster.
*/
function setup(){
  //setting up canvas for drawing
  createCanvas(600,800);

  // background(50);

}

function draw(){
  //Set origin to center of canvas
  translate(300,400);

  //making axes to help work with
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

     push();
     fill('rgba(167, 27, 18,.4)');
     ellipse(100,-80,45);
     ellipse(-100,-80,45);
     pop();

     pop();
     // **END EYES**


  // ** HEAD **********************************
    push();

     //lines on the side of his mask going up
     strokeWeight(2);
     line(-225,-60,-225,-200);
     line(225,-60,225,-200);

     // ARC ON THE TOP
     // arc(0,-350,450,30,radians('60'),radians(120));
     push();
      noFill();
      ellipse(0,-200,450,75);
     pop();

     push();
      noStroke();
      fill(255);
      rect(-300,-400,600,200);
     pop();

     //Diagonal Lines going into the jaw
     push();
       strokeWeight(1);
       line(-225,-60,-190,10);
       line(225,-60,190,10);


       //Lines down into the jaw
       line(-190,10,-190,100);
       line(190,10,190,100);

       //Straight Jaw Lines
       line(-250,100,-250,220);
       line(250,100,250,220);

       //Triangular Jaw lines
       // line(-250,220,0,350);
       // line(250,220,0,350);
       fill(255);
       triangle(-250,220,0,350,250,220);
      pop();




     // **TEETH**
     push();
     // TEETH code goes here
     //each tooth spans 55 pixels starting from left to right
     triangle(-250,100,-222.5,50,-195,100);
     triangle(-195,100,-167.5,50,-140,100);
     triangle(-140,100,-112.5,50,-85,100);
     pop();
     // **END TEETH**

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
