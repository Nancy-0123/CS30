// Generative Arts - HSB and custom palettes
// Nancy Yang
// March 26, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 50, rectHeight = 10; 
let colors = ["9CF7E9", "9EF4F1", "9ADBF3", "9AC4F3", "9AAEF4"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawCustom(width*0.7);
}

function drawRGB(x){
  //draw a stack of rectangles at x = x. Using R,G,B random
  colorMode(RGB);
  for(let y=0; y < height; y += rectHeight){
    fill(random(255), random(255), random(255));
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawHSB(x){
  //draw a stack of rectangles at x = x. Using HSB 0-360
  colorMode(HSB);
  for(let y=0; y < height; y += rectHeight){
    let hue = map(y, 0, height, 0, 360);
    fill(hue, 360, 360);
    rect(x,y, rectWidth, rectHeight);
  }
}

function drawCustom(x){
  //draw a stack of rectangles at x = x. Using custom palettes
  colorMode(RGB);
  let index = 0;
  for(let y=0; y < height; y += rectHeight){
    //option 1: cycle through custom palettes
    fill(colors[index % colors.length]);
    //option 2: -> random selection from palettes
    fill(colors[int(random(colors.length))]);
    rect(x, y, rectWidth, rectHeight);
    index++;
  }
}