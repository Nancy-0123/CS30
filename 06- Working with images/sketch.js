// Working with images
// Nancy 
// March 14, 2024
// 
// Loading and Display Images / animations

let lionL, lionR;
let pinImage = [];
let currentIndex = 0; 

function preload(){
  //runs before setup. Function won't end unitll all loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  // now load the pinwheerl images
  for (let i = 0; i < 9; i++){
  pinImages,push(loadImages("assets/pin-0" + i + ".png"))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //draw the picture
}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  
  image(pinImage[currentIndex%9], width/2, height/2);
  currentIndex ++;
}

