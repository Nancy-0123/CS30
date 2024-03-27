// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //just for now
  background(220);
  angleMode(DEGREES);
  stroke(0, 80);
}

function draw() {
  translate(width/2, height/2);
  for(let i =0; i < 500; i ++) {
    randomElement(random(20, 70)); 
  }
}

function randomElement(currentLen) {
  //create one irregular line using
  //retate transformations
  push();  //isolate the coordinate transformations
  rotate(random(150));
  while(currentLen > 5){
    rotate(random(40, 40));
    line(0,0,0, currentLen);
    translate(0, currentLen);
    currentLen *= 0.75

  }
  pop();

}