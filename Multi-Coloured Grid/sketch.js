// Multi-Coloured Grid
// Nancy Yang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 20;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function mousePressed() {
  if (mouseButton === "left") {
    if (squareSize > 5) {
    squareSize = squareSize - 5;
    clear();
    drawGrid();
    }
  }
  else if (mouseButton === "right") {
    squareSize = squareSize + 5;
    clear();
    drawGrid();
  }
}

function draw() {
  drawGrid();
}

function keyPressed(){
  drawGrid();
}

function drawGrid() {
  // using a loop within a loop, generate a grid arrangement
  // for some squares
  for (let x = 0; x + squareSize < width; x += squareSize) { 
    for (let y = 0; y + squareSize < height; y += squareSize) {
      stroke(0); 
      square(x, y, squareSize);
      fill(random(255), random(255), 255);
    }
  }
}

