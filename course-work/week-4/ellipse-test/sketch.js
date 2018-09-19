function setup() {
    createCanvas( 800, 500 );
    background( 'rgb(221, 23, 23)' );
}

function draw() {
    fill('rgb(15, 207, 195)');
    noStroke();
    // a rectangle with 10px corners
    rect( 20, 20, 300, 200, 10 );

    // a rectangle with 90px corners
    rect( 20, 280, 300, 200, 90 );
}
