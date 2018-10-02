var rect = {};
rect.rect_x;
rect.rect_y;
rect.rect_width = 20;
rect.max_rect_mvt = 20;

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

    rect.rect_x = 0;
    rect.rect_y = 0;

    frameRate(30);
}

function draw() {
  translate(width/2,height/2);

  rectMode(RADIUS);
  strokeWeight(5);
    // noStroke();
    // ellipse(rect_x, rect_y, rect_width, rect_width);


    push();
    fill(0);
    stroke(255);
    rect(rect.rect_x,rect.rect_y,rect.rect_width,rect.rect_width,10);
    pop();

    push();
    fill(255);
    stroke(0);
    rect(-rect.rect_x,-rect.rect_y,rect.rect_width,rect.rect_width,10);
    pop();

    // updating position
    // if(-width/2 + 80 < rect.rect_x < width/2 - 80 ){
    rect.rect_x += random(-rect.max_rect_mvt, rect.max_rect_mvt);
    // }

    rect.rect_y += random(-rect.max_rect_mvt, rect.max_rect_mvt);

    // if (rect_X < 1) {
    //   rect_X = rect_X * -1;
    // }
    //map(rect_x,-width -100 ,width + 100,-width + rect_width, width - rect_width);
    //map(rect_y,-height -100,height + 100, 0, height - rect_width);
}
