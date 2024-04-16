// Objects in Objects
// Nancy 
// April 12, 20244
// Starting objects on objects, overwriting objects, basic transformations



function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
  angleMode(DEGREES);
}

function draw() {
  background(220);
}

class Planet {
  constructor(x,y) {
    this.x = x; this.y = y; this.s = 100;
    this.moon = [];
  }

  relocate(){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
    
  }



  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  display(){
    circle(this.x, this.y, this.s);
    for (let m of moons) {
      m.update();
  }
 }
}

class Moon{
  constructor(x,y){
    this.x = x; this.y = y; this.speed = 2;
    this.angle = 0; this.orbitRadius = 80; this.s = 25;
  }

  move(){
    this.angle += this.speed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}

function mouseClicked(){
  if(keyIsPressed && keycode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;

  }
}