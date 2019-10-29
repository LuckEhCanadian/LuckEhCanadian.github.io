// Portal
// Aiden Jorgensen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols = 20;
let rows = 20;
let grid;
let chamber;
let playerX;
let playerY;
let cellSize;


function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
    cellSize = height/cols;
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  playerX = 1
  playerY = 1
}

function draw() {
  displayGrid(grid, rows, cols);
}

function displayGrid(grid, rows, cols){
  let cellSize = width/rows;
  grid = [];
  for(let x = 0; x < cols; x++){
    grid.push([]);
    for(let y = 0; y < rows; y++){
      grid[x].push([0]);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
  return grid;
}

function keyPressed(){
  let cellSize = width/cols;
  let xCoord = floor(playerX*cellSize);
  let yCoord = floor(playerY*cellSize);

  
  if(key === 'w'){
    playerY -= 1;
  }
  if (key === 's'){
    playerY += 1
  }
  if(key === 'd'){
    playerX += 1
  }
  if(key === 'a'){
    playerX -= 1
  }
}