// Puzzle Game Starter
// Nancy Yang
// April 30, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  RandomizeStartingBoard();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();   //render the current game board to the screen (and the overlay)
  checkWin();
}




function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if(keyIsPressed && keyCode === SHIFT){
    flip(currentCol, currentRow);
  }
  
  else{
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function checkWin() {
  let allSame = gridData[0][0];
  let i = 0;
  
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gridData[row][col] === allSame || gridData[row][col] === allSame) {
        i++;
        if (i===20){
          textSize(50);
          textAlign(CENTER, CENTER);
          fill(0, 255, 0);
          text("You Win", width / 2, height / 2);
        }
      }
    }
  }
}

function RandomizeStartingBoard(){
  for (let row = 0; row < NUM_ROWS; row++){
    for (let col = 0; col < NUM_COLS; col++){
      gridData[row][col] = int(random(2)) * 255;
    }
  }
}