// Project Title
// Your Name
// May 7, 2024
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music, bounceSound;
let started = false;
let pos; let vel;
let totalBounce = 0;

function setup() {
  createCanvas(300, 200);
  textSize(30);
  textAlign(CENTER);
  pos = createVector(width/2, height/2);
  vel = createVector(5,3);
  if(localStorage.getItem)
}

function draw() {
  background(220);
  if (started === false){
    text("Click to begin.", width/2, height/2);
    if (mouseIsPressed){
      started = true;
      music.setVolume(0,3);
      music.loop();
    }
  }
  else {
    totalBounce = int(localStorage.getItem("bounce"))
  }
}

function preload(){
  //function waits for loading
  music=loadSound("assets:/background.mp3")
  bounceSound = loadSound("assets.bounceSound.wav")
}

function updateBall(){
  pos.add(vel);
  if(pos.x < 0 || pos.x > width) {
    bounceSound.play;
    pos.x *= -1; 
    localStorage.setItem("bounce", totalBounce);
  }
  if (pos.y < 0 || pos.y > height){
    bounceSound,play();
    vel.y *=-1;
    localStorage.setItem("bounce", totalBounce);
  }
  circle(pos.x, pos.y, 20);
}