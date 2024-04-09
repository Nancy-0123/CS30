// Object Notation
// Nancy Yang
// March 28, 2024
// Look at object notation

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
    //Loop through all the balls
    for(let b of ballArray){
      //advanced for loops
      b.x += b.xSpeed;
      b.y += b.ySpeed;
      circle(b.x,b.y,b.radius);
    }
}

function spawnBall(initialX, initialY){
  //create a ball object and store in the array
  let ball = {
    x: initialX,
    y: initialY,
    radius: 30,
    xSpeed: random(-5,5),
    ySpeed: random(-5,5),
  };
  ballArray.push(ball);
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}