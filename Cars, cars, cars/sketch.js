// Cars Cars Cars
// Nancy Yang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  fill(0);
  rect(0, height/5, width, height/2);
  fill(255, 204, 0);
  for(let i = 0; i < width; i += 60) {
    rect(i, height/2.2, 40, 5);
  }
}

class Vehicle {
  constructor(x, y, carType, direction, xSpeed){
    this.x = x;
    this.y = y;
    this.carType = carType;
    this.c = (random(255), random(255), random(255));
    this.direction = direction;
    this.xSpeed = xSpeed;
  }
  
  display(){
    if (carType === 0){
      rect(this.x, this.y, 40, 20);
    }
  }
}

