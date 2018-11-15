class smile{
  constructor(x,y,width,deltaX,deltaY){
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }
  display(){
    push();
    noFill();
    stroke('white');
    ellipse(this.posX,this.posY,this.width);
    arc(this.posX,this.posY,this.width/1.5,this.width/1.5, PI/8 , 7*PI/8);
    ellipse(this.posX - this.width/2, this.posY - this.height/2, 20);
    ellipse(this.posX + this.width/2, this.posY + this.height/2, 20);
    pop();
  }
}
