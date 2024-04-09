// Art Replication
// Nancy Yang
// March 27, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let a,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  a=100;
  b=100;
  drawLines();
  noLoop();
}


function drawLines(){
  for(let i = 0; i <= 100; i++){
    let x = random(200,width-200);
    let y = random(100,height-100);
    if (i%2===0){
      line(a,b,x,b);
      a=x;
    }
    else {
      line(a,b,a,y);
      b=y;
    }
  }
}