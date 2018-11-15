class smile{
  constructor(x,y,width,deltaX,deltaY){
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.rad = this.width/2;
  }
  display(){
    push();
    noFill();
    stroke('white');
    // translate(this.posX, this.posY);
    ellipse(this.posX,this.posY,this.width);
    arc(this.posX,this.posY,this.width/1.5,this.width/1.5, PI/8 , 7*PI/8);

    strokeWeight(3);
    point(this.posX - this.width/7, this.posY - this.width/7);
    point(this.posX + this.width/7, this.posY - this.width/7);

    pop();
  }
  move(){
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }
  edgeCheck() {
       // check if the ball has hit a vertical wall (left or right walls)
       if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
           this.deltaX *= -1;

       }
       // check if the ball has hit a horizontal wall (top or bottom walls)
       if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
           this.deltaY *= -1;

       }
     }
    collision(otherSmiles, myId){
      // for loop touches each of the balls in the array
        for (let n = 0; n < otherSmiles.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherSmiles[n].posX, otherSmiles[n].posY);
                let combinedR = this.rad + otherSmiles[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                }
            }
    }
  }
    frame(){
      this.display();
      this.move();
      this.edgeCheck();
    }
}
