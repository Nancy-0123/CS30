// Inheritance + using multiple files
// Nancy Yang
// May 9, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let object = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i ++){
    object.push(new AnimatedObject(random(width), random(height)));
    object.push(new CircleObj(random(width), random(height)));
    object.push(new LineObj());
  }
}

//Parent class(or "super" class)
class AnimatedObject{
  constructor(x,y){
    this.x = x; this.y = y;
    this.size = 1;
  }

  move(){
    this.x += random(-2,2);
    this.y += random(-2, 2);
  }

  display(){
    strokeWeight(2);
    point(this.x, this.y)
  }
}

function draw() {
  background(220);
  for (let o of object){
    o.move();
    o.display();
  }
}

//Child class#1-circle
class CircleObj extends AnimatedObject{
  constructor(x,y){
    super(x,y);
    this.size = random(20, 40);
  }
  
  display(){
    strokeWeight(2);
    if(dist(this.x, this.y, mouseX, mouseY)< this.size/2){
      fill(255, 0,0);
    }
    else fill(255);

    circle(this.x, this.y, this.size);
  }
}

//Child Class #2 - Line
class LineObj extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
  }

  move(){ //overriding
    super.move(); //starts with the parent's move() code
    this,x = 5;
    if(this.x < 0) this.x = width;
  }

  display(){
    if(mouseIsPressed) strokeWeight(10);
    else strokeWeight(2);
    line(this.x, this.y, this.x+15, this.y);
  }
}