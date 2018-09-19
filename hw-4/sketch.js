/*
Ryan Miskiv
Creative Coding 1
Week 4 Homework: Portrait
*/
function setup(){
  //setting up canvas for drawing
  createCanvas(800,800);

  background(100);

}

function draw(){
  //Set origin to center of canvas
  translate(400,400);
  // *****************************************************
     // create a sandbox for the entire character
  push();


     // ** BODY **********************************
     push();
     // body code goes here

     pop();
     // **END BODY**


     // ** ARMS **********************************
     push();
     // arms code goes here

     pop();
     // **END ARMS**


     // ** HEAD **********************************
     push();

     // head code goes here
     // make skull first


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
