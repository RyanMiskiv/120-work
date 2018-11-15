
let smiles = [];
let max = 10;

function setup(){

  createCanvas(windowWidth, windowHeight);
    background('black');
    for(let i = 0; i < max; i++){
      smiles.push(new smile(random(150, width - 150), random(150, height - 150), random(25, 150), random(-5,5), random(-5,5)));
    }
}

function draw(){

  background('black');
  for(let i = 0; i < max; i++){
    smiles[i].frame();
    smiles[i].collision(smiles, i);

  }
}
