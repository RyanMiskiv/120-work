var pos = {};
pos.rect_x = 0;
pos.rect_y = 0;
var rect_width = 20;
var max_rect_mvt = 20;

function setup() {
    createCanvas( windowWidth, windowHeight );
    // createCanvas( windowWidth, 600 );
    background(255);
    translate(width/2,height/2);

    push();
    fill(0);
    // triangle(-width,-height,width,height,width,-height);
    rect(-width,-height,width * 2,height);
    pop();

    frameRate(24);
}

function draw() {
  translate(width * 0.5,height * 0.5);
//Settings for the rectangles
  rectMode(RADIUS);
  strokeWeight(5);

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

    // updating position
    pos.rect_x += floor(random(-max_rect_mvt, max_rect_mvt));
    pos.rect_y += floor(random(-max_rect_mvt, max_rect_mvt));

    //setting boundaries
    if(pos.rect_x < -width){
      pos.rect_x = 0;
    }
    if(pos.rect_y < -height) {
      pos.rect_y = 0;
    }
    map(pos.rect_x,-width -80 ,width + 80,-width + rect_width, width - rect_width);
    map(pos.rect_y,-height -80,height + 80, 0, height - rect_width);
    pos.rect_x = constrain(pos.rect_x,-width/2 + 20,width/2 - 20);
    pos.rect_y = constrain(pos.rect_y,-height/2 + 20,height/2 - 20 );
}
