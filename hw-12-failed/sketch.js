/*
Ryan Miskiv
Creative Coding 1
Week 11
*/

//settings for the array of caterpillars
let caterpillars = [];
let max = 5;


function setup(){

  createCanvas(windowWidth,windowHeight);
  background('rgb(114, 230, 233)');

 for(let i = 0; i < max; i++){

   caterpillars.push(new Caterpillar(random(100, width-100), random(100, height-100), random(5,10), color(random(255) , random(255), random(255)), random(-5,5), random(-5,5)));
 }
}

function draw(){

    background('black');
    for(let i = 0; i < max; i++){
      caterpillars[i].frame();

    }
    for(let f = 0; f < caterpillars.length; f++){
      collision(caterpillars, f);
    }

}

function collision(array, myID){
  //this will choose which caterpillar we are working with
  let current = array[myID];
  for(let c = 0; c < array.length; c++){
  //ensure we are not testing a caterpillar against itself
    if(myID != c){
          //this will loop through each individual segment and see if the head of the selected
    for(let s = 0; s < array[c].numOfSegs; s++){
      //find the distance between the head of the selected caterpillar and the current segment we are on
      let d = dist(current.segments[0].x, current.segments[0].x,array[c].segments[s].x, array[c].segments[s].y);
      let combinedR = current.segments[0].width + array[c].segments[s].width;

        if(d <= combinedR){
          for(let i = 0;i<array[myID].numOfSegs; i++){
            array[myID].segments[i].deltaX *= -1;
            array[myID].segments[i].deltaY *= -1;
          }
        }


      }
    }

  }
}
