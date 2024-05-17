// Puzzle Game Starter
// Nancy Yang
// May 17, 2024
// Create a puzzle game

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 255, 0, 0, 0],
  [255, 255, 255, 0, 0]
];
let type = 0;  // Initialize the flipping pattern to be cross
let overlay;

function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  RandomizeStartingBoard();
  overlay = createGraphics(width, height);
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();   //render the current game board to the screen (and the overlay)
  checkWin();
  drawOverlay();
}

//Press space to change between flipping in a cross pattern or a square pattern
function keyPressed() {
  if (key === ' ') {  
    if (type === 1) {
      type = 0;
    } else if (type === 0) {
      type = 1; 
    }
  }
}

function mousePressed() {
  if (keyIsPressed && keyCode === SHIFT) {
    flip(currentCol, currentRow);    //Cheater cheater
  }
  
  //Flip a  a cross pattern. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  else if (type === 0) {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  } 
  //Flip a square pattern
  else if (type === 1) {
    flip(currentCol, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow + 1);
    flip(currentCol + 1, currentRow + 1);
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

function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

//Check if all 20 rectangles have the same colour and diaplay the win message
function checkWin() {
  let allSame = gridData[0][0];
  let i = 0;
  
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gridData[row][col] === allSame) {
        i++;
        if (i === 20){
          textSize(50);
          textAlign(CENTER, CENTER);
          fill(0, 255, 0);
          text("You Win", width / 2, height / 2);
        }
      }
    }
  }
}

//Randomize the starting Arrangement
function RandomizeStartingBoard() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      gridData[row][col] = int(random(2)) * 255;
    }
  }
}

//Draw colored overlay to indicate which rectangles will be impacted on a click
function drawOverlay() {
  if (type === 1) {  // square
    overlay.fill(50, 170, 80, 100);
    overlay.rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    overlay.rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
    overlay.rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    overlay.rect((currentCol + 1) * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
  } 
  else {  // cross
    overlay.fill(50, 168, 82, 100);
    overlay.rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    overlay.rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
    overlay.rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    overlay.rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
    overlay.rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
  }
  image(overlay, 0, 0);
  overlay.clear();
}