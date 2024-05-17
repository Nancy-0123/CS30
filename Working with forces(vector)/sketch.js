// Working with Forces
// Nancy
// April 22, 2024
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let particles = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.1);
}

function mousePressed(){
 
}

function draw() {
  background(220);
  for(let i = 0; i < 2; i ++){
    particles.push(new Particle(mouseX, mouseY));
  }
  for(let i = 0; i < particles.length; i++){
    let p = particles[i];
    p.move();
    p.display();
    //check for removal
    if(p.alive===false){
      particles.splice(i,1);
    }
  }
}

class Particle{
  constructor(x,y){
    this.position = createVector(x,y);  this.s = 20;
    this.velocity = createVector(random(-3,3), random(-5,-3));
    this.c = color(0, 100, random(150,255), 100);
  }

  move(){
    //Apply force first (in this case, add gravity to velocity)
    this.velocity.add(gravity);
    //also there could be other forces (wind, friction...)

    //apply  our velocity to our position
    this.position.add(this.velocity);
    if(this.position.y > height){
      this.alive = false;
    }
    if(this.position.x < 0){
      this.position.x = 0;
      this.velocity.x *= -1;
    }
  }

  display(){
    //Draw our sprite
    fill(this.c); noStroke();
    push();
    translate(this.position.x, this.position.y);
    circle(0,0, this.s);
    pop();


  }
}