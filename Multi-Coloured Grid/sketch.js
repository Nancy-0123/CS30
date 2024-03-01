// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  nestedLoops();
}

function nestedLoops() {
  // using a loop within a loop, generate a grid arrangement
  // for some squares
  for (let x = 0; x < width; x += squareSize) { 
    for (let y = 0; y < height; y += squareSize) {
      stroke(0); 
      square(x, y, squareSize);
    }
  }
}
