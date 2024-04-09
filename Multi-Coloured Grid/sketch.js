// Multi-Coloured Grid
// Nancy Yang
// March 8, 2024
// Using loops to generate a grid arrangement with random colours

let squareSize = 20; 

//Set up the canva
function setup() {  
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function mousePressed() {    // Change the square size when mouse is clicked 
  //(left click to make them smaller, right click to make them bigger)
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

// Draw the initial grid
function draw() {
  drawGrid();
}

// Refresh the sketch everytime a keyboard is clicked
function keyPressed(){
  drawGrid();
}

function drawGrid() {
  // Using a loop within a loop, generate a grid arrangement with random colours that fits the canva
  for (let x = 0; x + squareSize < width; x += squareSize) { 
    for (let y = 0; y + squareSize < height; y += squareSize) {
      stroke(0); 
      square(x, y, squareSize);
      fill(random(255), random(255), 255);  
    }
  }
}

