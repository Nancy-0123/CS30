// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let racers = [];
const NUM_RACERS = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_RACERS; i++){
    let c = color(random(255),random(255),random(255));
    racers.push(new Racer(200+50*i,c));
  }
}

function draw() {
  background(220);
  for(let r of racers){
    r.move();
    r.display();
  }
}

class Racer {
  constructor(y, col){
    this.speed = random(3,15); 
    this.col = col;
    this.y = y;
    this.x = 0;
  }

  display(){
  fill(this.col);
  circle(this.x, this.y, 20);
  }

  move(){
    if (this.x > width){
      this.x = 0;
    }
    else {
      this.x += this.speed;
    }
  }
}