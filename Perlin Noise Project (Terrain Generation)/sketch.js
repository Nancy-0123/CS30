// Perlin Noise Project (Terrain Generation)
// Nancy Yang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10; 
let heightTime = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);
  generateTerrain(); 
}

function generateTerrain(){
  //using a single loop, generate a bunch of side to side
  //rectangles of varying height
  let topHeight = 0;
  let topX = 0;
  fill(0);
  for (let x = 0; x < width; x += rectWidth){
    rectHeight = noise(heightTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(x, height, rectWidth, rectHeight);
    heightTime += 0.01;

    if (topHeight < rectHeight*0.5){
      topHeight = rectHeight*0.5;
      topX = x;
    }
  }
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