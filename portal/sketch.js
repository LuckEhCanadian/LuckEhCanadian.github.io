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
let playerX = 5;
let playerY = 5;
let cellSize;
let playerPos;


function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
    cellSize = height/cols;
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  grid = createRoom();
  grid[playerX][playerY] = 1;
}

function draw() {
  displayGrid(grid, rows, cols);
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else if(grid[y][x] === "wall"){
        fill(125);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function keyPressed(){
  
  if(key === 'w'){
    if(playerY > 1){
      if (grid[playerX][playerY-1] === "wall"){
        grid[playerY][playerX] = 0;
        playerY+=1
      }
      else{
        grid[playerY][playerX] = 0;
        playerY -= 1;
      }
    }
  }
  if (key === 's'){
    if(playerY < cols-2){
      grid[playerY][playerX] = 0;
      playerY += 1
    }
  }
  if(key === 'd'){
    if (playerX < cols-2){
      grid[playerY][playerX] = 0;
      playerX += 1
    }
  }
  if(key === 'a'){
    if (playerX > 1){
      grid[playerY][playerX] = 0;
      playerX -= 1
    }
  }
  grid[playerY][playerX] = 1;
}

function createEmptyGrid(){
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for(let y = 0; y < rows; y++){
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function createRoom(){
  let room = [];
  for (let x = 0; x < cols; x++){
    room.push([]);
    for(let y = 0; y < rows; y++){
      if (x === 0 || y === 0 || x === cols-1 || y === cols-1 || (y === 10 && x === 5)){
        room[x].push("wall");
      }
      else{
        room[x].push(0);
      }
    }
  }
  return room;
}