var pos = {};
pos.rect_x = 0;
pos.rect_y = 0;
//TODO: Get some of these variables in an array
var rectSettings =[];
var rect_width = 20;
var max_rect_mvt = 20;

function setup() {
    createCanvas( windowWidth, windowHeight );

    background(255);
    translate(width/2,height/2);
    frameRate(24);

    //creating background
    push();
    fill(0);

    rect(-width,-height,width * 2,height);
    pop();


}

function draw() {
  translate(width * 0.5,height * 0.5);

//Settings for the rectangles
  rectMode(RADIUS);
  strokeWeight(5);


    obj();
    move();
    bound();

}

function move(){
  // updating position
  pos.rect_x += floor(random(-max_rect_mvt, max_rect_mvt));
  pos.rect_y += floor(random(-max_rect_mvt, max_rect_mvt));
}

function bound(){
  //setting boundaries
  pos.rect_x = constrain(pos.rect_x,-width/2 + 20,width/2 - 20);
  pos.rect_y = constrain(pos.rect_y,-height/2 + 20,height/2 - 20 );
}

function obj(){
  //drawing the rectangles
      push();
      fill(0);
      stroke(255);
      rect(pos.rect_x,pos.rect_y,rect_width,rect_width,10);
      pop();

      push();
      fill(255);
      stroke(0);
      rect(-pos.rect_x,-pos.rect_y,rect_width,rect_width,10);
      pop();
}
