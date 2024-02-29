// Gradient Background + Rested Loops
// Nancy
// Feb 29, 2024
// Creating a gradient + drawing with nested loops
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectHeight = 10;
let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  gradientBackground();
}

function nestedLoops(){
  //
  //
  for (let x = 0; x < 100; x += spacing){
    for(let y = 0; y < 100; y += spacing){
      circle(x,y,10);
    }
  }

}

function gradientBackground(){
  // use a single loop to draw several rectangles
  // then color them into a gradient
  let y = 0; 
  while(y< height){
    let c = color(mouseX,map(0,10, 0, height, 0, 255), map(y,0,height,0,255));
    fill(c);
    rect(0,y,width,rectHeight);
    y += rectHeight;
  }
}