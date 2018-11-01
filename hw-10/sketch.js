var pos = {
rect_x: 0,
rect_y: 0
};

var set = {
rect_width: 20,
max_rect_mvt: 20
};

var info = [pos,set];


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

    settings();
    obj();
    move();
    bound();

}

function move(){
  // updating position
  info[0].rect_x += floor(random(-info[1].max_rect_mvt, info[1].max_rect_mvt));
  info[0].rect_y += floor(random(-info[1].max_rect_mvt, info[1].max_rect_mvt));
}

function bound(){
  //setting boundaries
  info[0].rect_x = constrain(info[0].rect_x,-width/2 + 20,width/2 - 20);
  info[0].rect_y = constrain(info[0].rect_y,-height/2 + 20,height/2 - 20 );
}

function obj(){
  //drawing the rectangles
      push();
      fill(0);
      stroke(255);
      rect(info[0].rect_x,info[0].rect_y,info[1].rect_width,info[1].rect_width,10);
      pop();

      push();
      fill(255);
      stroke(0);
      rect(-info[0].rect_x,-info[0].rect_y,info[1].rect_width,info[1].rect_width,10);
      pop();
}
function settings(){
  //Settings for the rectangles that need to be recalled with every instance of draw()
  translate(width * 0.5,height * 0.5);
  rectMode(RADIUS);
  strokeWeight(5);

}
