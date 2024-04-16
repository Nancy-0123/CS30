// Object Demo Two (Objects Interaction)
// Nancy Yang
// April 10, 2024
// Objects Recap, Perlin noise, Object interaction

// Global Variables
let points = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let p of points){
    //this style of loop os perfect as long as we don't need to delete any items from the array.
    p.move();
    p.connect(points);
    p.display();
  }
}

function mouseClicked(){
  //trigger on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX, mouseY));
}

class MovingPoint{
  constructor(x,y){
    //related to position/rendering
    this.x = x; this.y = y; this.size = 20;
    this.c = color(random(255), random(255), random(255));

    //related to motion
    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 5;
  }

  //class methods/functions
  display(){
    let c = 6;
    fill(this.c);
    noStroke();

    let d = (dist(mouseX, mouseY, this.x, this.y));
    if(d< reach){
      this.size = map(d,0,reach,60,20);
    }
    else{
      this.size = 20;
    }

    circle(this.x, this.y, this.size);
  }

  getX() {return this.x;}
  getY() {return this.y;}

  connect(pointArray){
    //check if any point are nearby other points, and if so, join with a line segment
    stroke(this.c);
    for(let p of points){
      //this.x, this.y, p.getX, p.getY()
      if (p !== this){
        let d = dist(this.x, this.y, p.getX(), p.getY());
        if (d<reach){
          line(this.x, this.y, p.getX(), p.getY());
        }
      }
    }
  }

  move(){
    //using perlin noise, move horizontally/vertically
    let xSpeed = noise(this.xTime); //0,1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift; //0.01

    this.x += xSpeed;

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;

    //add some wrap-around code
    if (this.x < 0) this.x = width;
    else if (this.x > width) this.x = 0;

    if (this.y < 0) this.y = height;
    else if (this.y > height) this.y = 0;
  }
}