// Art Replication
// Nancy Yang
// March 27, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawLines();
}

function drawLines(){
  for(let i = 0; i <= 100; i++){
    let x = random(200);
    let y = random(200);
    stroke(0);
    line();
  }
}