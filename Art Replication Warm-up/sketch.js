// Art Replication
// Nancy Yang
// April 12, 2024
// Replicate the artwork "Vertical-Horizontal No. 3"

let a,b;

function setup(){
  createCanvas(windowWidth, windowHeight);
  a = random(200, width-200);
  b = random(100, height-100);
  drawLines();
}

//Draw vertical and horizontal lines at random locations
function drawLines(){
  for(let i = 0; i <= 100; i++){
    let x = random(200, width-200);
    let y = random(100, height-100);
    if (i % 2===0){
      //draw horizontal lines
      line(a,b,x,b);
      a=x;
    }
    else {
      //draw vertical lines
      line(a,b,a,y);
      b=y;
    }
  }
}