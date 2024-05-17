// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //concentricCircle(width);
  //cantor(width*0.1, height*0.3, width *0.8, 9)
  noFill();
  circleFractal(width/2, height/4, width/2, 6);
}

// recursive 1 - concentric circles
function concentricCircle(diameter){
  if (diameter > 10){
    //recursively draw circles at canvas center using diameter 
    circle(width/2, height/2, diameter);
    //concentricCircle(diameter - 10);
  }
  //Implicite base case (diameter <= 10)
}

function cantor(x, y, len, depth){
  if(depth > 1){
    rect(x,y,len,10);
    y += 20; //drop down y for the next generation
    cantor(x,y,len/3, depth-1);
    cantor(x+ len*2/3, y, len/3, depth-1);
  }
}

function circleFractal(x,y,diameter,depth){
  if (depth> 0){
    circle(x,y,diameter);
    circleFractal(x,y,diameter);
    //recurse
    circleFractal(x-diameter/2, y, diameter/2, depth-1);
    circleFractal(x+diameter/2, y, diameter/2, depth-1);
    circleFractal(x-diameter/2, y+diameter/2, diameter/2, depth-1);
  }
}
