// Perlin Noise Project (Terrain Generation)
// Nancy Yang
// Date
// Generating terrains 


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
  let noiseShift = 0.01;
  let totalHeight = 0; 
  let rectCount = 0;

  fill(0);
  for (let x = 0; x < width; x += rectWidth){
    rectHeight = noise(heightTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(x, height, rectWidth+x, height - rectHeight);
    heightTime += noiseShift;
    
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

function draw() {
  background(250);
  heightTime = 0 + heightShift;
  heightShift += 0.01;
  generateTerrain();
}

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
  fill(250, 200, 0);
  rect(0, height-averageHeight, width, height-averageHeight + 5);
}