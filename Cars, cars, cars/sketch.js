//Cars, cars, cars
// Nancy Yang
// April 26, 2024
//

let eastbound = [];
let westbound = [];
let trafficLight;

//
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    const y = random(height / 4.3, height / 2.2);
    eastbound.push(new Vehicle(random(0, width), y, 1));
  }


  for (let i = 0; i < 20; i++) {
    const y = random(height / 1.9, height / 1.4);
    westbound.push(new Vehicle(random(0, width), y, 0));
  }
  trafficLight = new TrafficLight();
}


function draw() {
  background(220);
  drawRoad();
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }
  trafficLight.switchLight();
}

//Adding more cars
//left click: add an eastbound car
//shift + left click: add a westbound car
function mouseClicked() {
  if(mouseButton === LEFT){
    eastbound.push(new Vehicle(mouseX, mouseY, 1));
  }
  if (mouseButton === LEFT && keyCode === SHIFT){
    westbound.push(new Vehicle(mouseX, mouseY, 0));
  }
}

//Draw the road
function drawRoad() {
  fill(0);
  rect(0, height / 5 + 20, width, height / 2+ 20);
  fill(255, 204, 0);
  for (let i = 0; i < width; i += 60) {
    rect(i, height / 2, 40, 4);
  }
}


class Vehicle {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.carType = int(random(2));
    this.c = color(random(255), random(255), random(255));
    this.dir = dir;
    if (this.dir === 1){
       this.xSpeed = random(1, 15);
    }
    else {
      this.xSpeed = random(-15, -1);
    }
  }


  action() {
    if (trafficLight.type ===0){
       this.move();
    }
    this.display();
    let chance = int(random(0, 100));
    if (chance === 1){
      this.speedUp();
    }
    if (chance === 1){
      this.speedDown();
    }
    if (chance === 1){
      this.changeColor();
    }
  }

  //Display the two types of cars
  display() {
    if (this.carType === 0) {
      this.drawCar();
    } else if (this.carType === 1) {
      this.drawTruck();
    }
  }

  //Draw cars
  drawCar() {
    fill(255);
    rect(this.x - 15, this.y, 10, 20);
    rect(this.x + 15, this.y, 10, 20);
    fill(this.c);
    rect(this.x - 20, this.y + 2, 50, 15);
  }

  //Draw trucks
  drawTruck() {
    if (this.dir === 0) {
      fill(this.c);
      rect(this.x, this.y, 40, 25);
      rect(this.x + 10, this.y, 1, 25);
    }
    else {
      fill(this.c);
      rect(this.x, this.y, 30, 25);
      rect(this.x + 30, this.y, 10, 25);
    }
  }

  //Let the cars move
  move() {
    this.x += this.xSpeed;
    if (this.dir === 0) {
      if (this.x < 0) {
        this.x = width;
      }
    } else if (this.dir === 1) {
      if (this.x > width) {
        this.x = 0;
      }
    }
  }
 
  //Let the cars speedup
  speedUp(){
    if (this.dir === 0){
      if (this.xSpeed > -15){
        this.xSpeed -= 0.5;
      }
    }
    else if (this.dir === 1){
      if (this.xSpeed < 15)
      this.xSpeed += 0.5;
    }
  }
  
  //
  speedDown(){
    if (this.dir === 0){
      if (this.xSpeed < 0 && this.xSpeed > -15){
        this.xSpeed += 0.5;
      }
    }
    else if (this.dir === 1){
      if (this.xSpeed > 0 && this.xSpeed < 15){
        this.xSpeed -= 0.5;
      }
    }
  }
 
  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }
}

class TrafficLight{
  constructor(){
    this.type = 0;
    this.frame = 0;
  }

  drawTrafficLight(){
    if (this.type === 0) {
      fill(0, 255, 0);
    }
    else {
      fill(255, 0, 0);
    }
    circle(150, 150, 30);
  }

  switchLight(){
    this.drawTrafficLight();
    this.frame ++;
    if (this.type === 0) {
        if (this.frame > 120) {
            this.type = 1; 
            this.frame = 0; 
        }
    } 
    else if (this.type === 1) {
        if (this.frame > 120) {
            this.type = 0; 
            this.frame = 0; 
        }
    }
  }
}


