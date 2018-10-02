/*
Ryan Miskiv
Creative Coding 1
Week 6 - Algorithmic sketch
I'll be creating something that progresses gradually to make a piece of Algorithmic
*/
var tri = {};
tri.point1X = 0;
tri.point1Y = 0;
tri.point2X = 0;
tri.point2Y = 0;
tri.point3X = 0;
tri.point3Y = 0;


var col = {};
col.R = 0;
col.B = 0;
col.G = 0;
col.A = 0;



function setup(){
  createCanvas(windowWidth,windowHeight);
  // translate(width/2,height/2);
  // background('rgb(161, 238, 238)');
  frameRate(1);
}

function draw(){
noStroke();
// translate(width/2,height/2);
tri.point1X = random(width - 50);
tri.point1Y = random(height - 50);
tri.point2X = random(width - 50);
tri.point2Y = random(height - 50);
tri.point3X = random(width - 50);
tri.point3Y = random(height - 50);

col.R = floor(random(256));
col.B = floor(random(256));
col.G = floor(random(256));
col.A = floor(random());

// Text(10, 10, "col.R = " + col.R );

fill(col.R,col.G,col.B);
// fill('')
triangle(tri.point1X,tri.point1Y,tri.point2X,tri.point2Y,tri.point3X,tri.point3Y);
// rect(tri.point3X,tri.point3Y, tri.point1X, tri.point1Y);
}
