// Cars Cars Cars
// Nancy Yang
// Date
//
let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    const y = random(height/2 - 20, height/6 + 12);
    vehicles.push(new DrawVehicle(random(0, width), y, random[0,1], ));
  }
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
    rectMode(CENTER);
    if (this.carType === 0){
      fill(0);
      rect(this.x - 15, this.y, 10, 20);
      rect(this.x + 15, this.y, 10, 20);
      fill(this.c);
      rect(this.x, this.y, 50, 15);
    }
    else if (this.carType === 1) {
      rect(this.x, this.y, 50, 20);
      rect(this.x - 15, this.y, 1, 20);
    }
  }

  move() {
    this.x += this.xSpeed;
  }

  speedUp() {

  }
}

