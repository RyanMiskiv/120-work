var ball_x;
var ball_y;
var ball_width = 20;
var max_ball_mvt = 20;
var xc = ball_X;
var yc = ball_y;
function setup() {
    createCanvas( windowWidth, windowHeight );
    // createCanvas( windowWidth, 600 );
    background(255);
    translate(width/2,height/2);

    push();
    fill(0);
    triangle(-width,-height,width,height,width,-height);
    // rect(-width,-height,width * 2,height);
    pop();

    ball_x = 0;
    ball_y = 0;

    frameRate(30);
}

function draw() {
  translate(width/2,height/2);

  rectMode(RADIUS);
  strokeWeight(5);
    // noStroke();
    // ellipse(ball_x, ball_y, ball_width, ball_width);


    push();
    fill(0);
    stroke(255);
    rect(ball_x,ball_y,ball_width,ball_width,10);
    pop();

    push();
    fill(255);
    stroke(0);
    rect(-ball_x,-ball_y,ball_width,ball_width,10);
    pop();

    // updating position
    ball_x += random(-max_ball_mvt, max_ball_mvt);
    ball_y += random(-max_ball_mvt, max_ball_mvt);

    map(ball_x,-width -100 ,width + 100,-width + ball_width, width - ball_width);
    map(ball_y,-height -100,height + 100, 0, height - ball_width);
}
