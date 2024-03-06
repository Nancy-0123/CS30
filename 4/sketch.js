// Repositioning Rectangles
// Nancy
// March 6, 2024
// Creating some geometry that can be picked up and moved around
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let x,y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let pickedUp = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth = 200, rHeight = 100;
}

function updateEdgePosition(){
  //update the top/right/left/bottom values
  rLeft = x - width/2; rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y + rHeight/2;
}

function draw() {
  background(220);
  drawRectangle();
}

function drawRectangle(){
  //render the rectangle and calculate any movement
  updateEdgePosition()
  print("L:", rLeft, "\tT:", rTop, "\tR:", rRight, "\B", rBottom);
  if (inRectangle()){
    fill(100, 250, 150);
  }
  else {
    fill(255);
  }

  //check if the rectangle has beeen "picked up"
  if (pickedUp){
    x = mouseX;
    y = mouseY;
  }
  rect(x, y, rWidth, rHeight)
}

function inRectangle(){
  //return true if the mouse is within the rectangle
  if(mouseX < rRight && mouseX > rLeft){
    //horizontal match
    if (mouseY > rTop && mouseY < rBottom){
    return true;
    }
  }
  return false;
}

function mousePressed(){
  //triangle exactly once per click (on the mouse down)
  if (inRectangle()){
    pickedUp = true;
  }
}

function mouseReleased(){
  pickedUp = false;
}