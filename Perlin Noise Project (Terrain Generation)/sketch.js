// Perlin Noise Project (Terrain Generation)
// Nancy Yang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 5; 
let heightTime = 0;
let averageHeight=0;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(255);
  generateTerrain(); 
}

function generateTerrain(){
  //using a single loop, generate a bunch of side to side
  //rectangles of varying height
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
    

    if (topHeight < rectHeight){
      topHeight = rectHeight;
      topX = x;
    }

    totalHeight += rectHeight;
    rectCount += 1; 
  }
  averageHeight = totalHeight/ rectCount
  drawAverage(); 

  drawFlag(topX, height-topHeight);
}
function draw() {

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (rectWidth > 3){
    rectWidth -= 1;
    clear();
    generateTerrain();
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    rectWidth += 3;
    clear();
    generateTerrain();
  }
}

function drawFlag(x,y){
  fill(0)
  line(x, y, x, y-30);
  triangle(x, y-20, x+15, y-20, x, y-40);
}

function drawAverage(){
  fill(255, 180, 0);
  rect(0, height-averageHeight, width, height-averageHeight + 5);
}