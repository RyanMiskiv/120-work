

var ball = {};
ball.width = 30;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 2;
ball.scale_y = 2;

var col = {};
col.R = 0;
col.B = 0;
col.G = 0;
col.A = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}



function draw() {
  //Change location of the ball
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

//Bound the ball into the canvas
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    noStroke();
    // fill(255);
    //random color or move color back to white when mouse is not pressed
    if(mouseIsPressed == true){
      col.R = floor(random(256));
      col.B = floor(random(256));
      col.G = floor(random(256));

    }
    else{
      col.R = 255;
      col.B = 255;
      col.G = 255;
    }
    //Ball
    fill(col.R,col.B,col.G);
    ellipse(ball.x, ball.y, ball.width, ball.width);

    //Reset Button code
    push();
    fill('red');
    rect(0,0,80,40);
    textSize(16);
    fill(0);
    text('Reset',20,25);
    pop();

    if(mouseX < 80 && mouseX > 0 && mouseY < 40 && mouseY > 0 && mouseIsPressed == true){
      background(0);
      ball.x = 10;
      ball.y = 10;

    }

}
//Changing velocity based on mouse position
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
