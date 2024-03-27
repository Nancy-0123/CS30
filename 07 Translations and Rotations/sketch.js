// An analog clock exercise
// Nancy Yang
// March 19, 2024
// using basic transformations


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawStaticClock();
  drawClockHands();  
}

function drawStaticClock(){
  // using basic transformations
  // draw an analog clock face
  // main circle first:
  stroke(0);
  translate(width/2, height/2);
  push(); //new coordinate system
  circle(0,0,300);

  //all the individual ticks
  let count = 0; let angle = 6;
  while(count < 60){
    if (count %5 === 0){
      line(110,0,140,0);
    }
    else {
      strokeWeight(1);
      line(125, 0, 140, 0);
    }
    rotate(angle);
    count++;
  }
  pop();
}

function drawClockHands(){
  push();
  //seconds hand first:
  fill(200,0,0);
  strokeWeight(1);
  rotate(second()*6);
  line(0,0,0,130);

  //minutes hand second:
  strokeWeight(2);
  rotate(minute())
  line(0,0,0,110);

  //Hour hand third:
  strokeWeight(3);
  rotate(hour())
  line(0,0,0,80);
  pop();
}