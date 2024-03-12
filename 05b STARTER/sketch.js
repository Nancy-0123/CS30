// Terrain Generation Starter
// Nancy Yang
// March 11, 2024
// Proceduraily generate 2D Terrain
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 20; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  drawRectangles();

}

function drawRectangles(){
  //using a single loop, generate a bunch of side to side
  //rectangles of varying height (pattern, random, noise)
  fill(0);
  for (let x = 0; x < width; x += rectWidth){
    //option 1 - pattern
    //rectHeight = x;

    //option 2 - random()
    rectHeight = random(0, height*0.5);
    rect(x, height/2, rectWidth, rectHeight);
  }
}
function draw() {
 
}
