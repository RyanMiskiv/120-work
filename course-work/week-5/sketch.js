let myVar = 100;

function setup() {
    createCanvas( 800, 600 );
    background( 'rgb(255, 210, 94)' );

}

function draw() {
    noCursor();
    fill( 'red' );
    rect(mouseX,mouseY,myVar,myVar);
}

function mousePressed(){
  myVar = myVar - 10;
}
