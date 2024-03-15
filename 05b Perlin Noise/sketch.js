// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let segmentLength = 35;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  segmentLine1();
  segmentLine2();
  segmentLine3();
}

let greyTime = 0;
function segmentLine1(){
  //using a loop, draw one line made up of many lines
  strokeWeight(30);
  let x = 0;
  while (x < width){
    greyValue = noise(greyTime);  //0 - 1
    greyValue = map(greyValue,0,1,0,255);
    greyTime += 10;

    stroke(greyValue);
    line(20, height/2, width/3, height/2 );
   
    x += segmentLength;
  }
}

function segmentLine2(){
line(x + width/3, height/2, width*2/ 3, height/2 );
}

function segementLine3(){
  line(x , height/2, x+segmentLength, height/2 );

}