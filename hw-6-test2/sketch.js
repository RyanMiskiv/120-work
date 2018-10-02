var ball_x;
var ball_y;
var ball_width = 80;
var max_ball_mvt = 10;
var xc = ball_X;
var yc = ball_y;
function setup() {
    createCanvas( windowWidth, windowHeight );
    // createCanvas( windowWidth, 600 );
    background(255);

    ball_x = width * 0.5;
    ball_y = height * 0.5;
    frameRate(30);
}

function draw() {

  // xc = constrain(ball_X, 0, width);
  // xy = constrain(ball_Y, 0, height);
    // draw the ball
    fill( 'rgb(7, 180, 4)' );
    strokeWeight(5);
    ellipse(ball_x, ball_y, ball_width, ball_width);

    // we want to randomly update the position of the ball
    ball_x += random(-max_ball_mvt, max_ball_mvt);
    ball_y += random(-max_ball_mvt, max_ball_mvt);
    // ball_width += ball_width%3;
    map(ball_x,-width,width,0,width);
    map(ball_y,-height,height,0,height);
}
