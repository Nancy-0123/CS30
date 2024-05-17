// Block Pusher 
// Your Name
// Date
// One more crack at 2D arrays 


let tiles = []; //0 grass  1 chicken  2 cow 3 
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
]

const COLUMNS = 5; const ROWS = 5; let TILE_SIZE = 100;
let playerX = 3; let playerY = 4;

function preload(){
  for (let i = 0; i< 4; i++){
    tiles.push(loadImage("assets" + i + "png"))
  }

}

function setup() {
  createCanvas(COLUMNS *  TILE_SIZE, ROWS * TILE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  background(220);
}

function swap(x1, y1, x2, y2){
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[x2][y2] = temp;
}

function renderBoard(){
  //interpret data in our 2D array (level), place image on canvas
  for(let x = 0; x < COLUMNS; x++){
    for(let y = 0; y< ROWS; y++){
      for (let type = 0; x < COLUMNS; x++){
        let type = 
      }
    }
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY-1);
    playerY --;
  }

  if(keyCode === LEFT_ARROW && playerX > 0){
    if (level[playerY][playerX-1] === 0){
      swap(playerX, playerY, playerX-1, playerY);
      playerX --;
    }
    else if(level[playerY][playerX] === 1){
      
    }
  }

  if(keyCode === RIGHT_ARROW){
    swap(playerX, playerY, playerX + 1, playerY);
    playerY ++;
  }

  if (keyCode === LEFT_ARROW){
    swap(playerX, playerY, playerX, playerY + 1);
  }
}
