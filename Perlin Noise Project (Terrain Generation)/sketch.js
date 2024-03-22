// Perlin Noise Project (Terrain Generation)
// Nancy Yang
// March 22, 2024
// Generate terrains by using noise function, find the highest peak, and draw the average line

let rectWidth = 5; 
let heightTime = 0;
let averageHeight = 0;
let heightShift = 1;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(255);
  generateTerrain(); 
}

function generateTerrain(){
  let topHeight = 0;
  let topX = 0;
  let totalHeight = 0; 
  let rectCount = 0;

  // Generate a smoother terrain by using noise function
  fill(0);
  for (let x = 0; x < width; x += rectWidth){
    rectHeight = noise(heightTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(x, height, rectWidth+x, height - rectHeight);
    heightTime += 0.01;
    
    // Find the highest peak
    if (topHeight < rectHeight){
      topHeight = rectHeight;
      topX = x;
    }
    // Determine the average height
    totalHeight += rectHeight;
    rectCount += 1; 
  }
  averageHeight = totalHeight/ rectCount
  drawAverage(); 
  drawFlag(topX, height-topHeight);
}

// Makes the screen scroll
function draw() {
  background(250);
  heightTime = 0 - heightShift;
  heightShift += 0.01;
  generateTerrain();
}

// Press right arrow to increase the width of the rectangles and left arrow to decrease the width
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (rectWidth > 1){
    rectWidth -= 1;
    clear();
    generateTerrain();
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    rectWidth += 1;
    clear();
    generateTerrain();
  }
}

// Draw a flag
function drawFlag(x,y){
  fill(0)
  line(x, y, x, y-30);
  triangle(x, y-20, x+15, y-20, x, y-40);
}

// Draw the average line
function drawAverage(){
  fill(255, 0, 0);
  rect(0, height-averageHeight, width, height-averageHeight + 5);
}