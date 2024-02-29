// Drawing with Loops 1
// Nancy
// February 27, 2024
// Using loops + Arrays to create some visualization
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Clobal Variables
let xPos, yPos;   //declaration only

function setup() {
  createCanvas(400, 400);
  xPos = []; yPos = [];
  initialWithLoops();
  secondLoop();
  thirdLoop();
  forthLoop();
  //xPos =[width* 0.05, width* 0.95, width* 0.05, width* 0.95];
  //yPos = [height* 0.05, height* 0.05, height* 0.95, height* 0.95];
}

function draw() {
  background(220);
  cornersAndMouseLoop();
}

function mousePressed(){
  //this calls automatically on a mousePressed
  xPos.push(mouseX);
  yPos.push(mouseY);
}

function initialWithLoops(){
  //Lay down
  for(let x = 10; x< width; x+=30){
    xPos.push(x);
    yPos.push(height);
  }
}

function secondLoop(){
  for(let x = 10; x< width; x+=30){
    xPos.push(x);
    yPos.push(0);
  }
}

function thirdLoop(){
  for(let y = 40; y< width; y+=30){
    xPos.push(0);
    yPos.push(y);
  }
}

function forthLoop(){
  for(let y = 20; y< width; y+=30){
    xPos.push(width);
    yPos.push(y);
  }
}


function cornersAndMouseLoop(){
  let i = 0;
  while(i < xPos.length){
    let x = xPos[i];
    let y = yPos[i];
    circle(x,y,20);
    line(x,y,mouseX, mouseY);
    i++;
  } 
  circle(mouseX, mouseY, 20);
}

function cornersAndMouse(){
  // draw some circles near each of the four corners
  // and connect some lines from there to the mouse position
  fill(255);
  circle(width* 0.05, height* 0.05, 20);
  circle(width* 0.95, height* 0.05, 20);
  circle(width* 0.05, height* 0.95, 20);
  circle(width* 0.95, height* 0.95, 20);
  circle(mouseX, mouseY, 20);
  // lines
  line(width* 0.05, height* 0.05, mouseX, mouseY);
  line(width* 0.95, height* 0.05, mouseX, mouseY);
  line(width* 0.05, height* 0.95, mouseX, mouseY);
  line(width* 0.95, height* 0.95, mouseX, mouseY);

}
