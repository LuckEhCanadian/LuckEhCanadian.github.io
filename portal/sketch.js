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
let orangeX;
let orangeY;
let blueX;
let blueY;
let cellSize;
let playerPos;
let portalColor;


function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
    cellSize = height/cols;
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  state = "chamber1"
  grid = createRoom();
  grid[playerX][playerY] = 1;
  portalColor = 1;
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
      else if(grid[y][x] === "portalO"){
        fill(255,119,0);
      }
      else if(grid[y][x] === "portalB"){
        fill(0,177,255);
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
    if (grid[playerY-1][playerX] === "wall"){
    }
    else{
      grid[playerY][playerX] = 0;
      playerY -= 1;
    }
  }
  if (key === 's'){
    if (grid[playerY+1][playerX] === "wall"){
    }
    else{
      grid[playerY][playerX] = 0;
      playerY += 1
    }
  }
  if(key === 'd'){
    if (grid[playerY][playerX+1] === "wall"){
    }
    else{
      grid[playerY][playerX] = 0;
      playerX += 1
    }
  }
  if(key === 'a'){
    if (grid[playerY][playerX-1] === "wall"){
    }
    else{
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

function mousePressed(){
  let cellSize = width/cols;
  if(portalColor === 1){
    orangeY = floor(mouseY / cellSize);
    orangeX = floor(mouseX / cellSize);
    if (grid[orangeY][orangeX] != "wall"){
      grid[orangeY][orangeX] = "portalO";
      if (portalColor === 0){
        portalColor += 1
      }
      else if(portalColor === 3){
        grid[orangeY][orangeX] = 0;
        portalColor -= 1
      }
    }
  }
  else if(portalColor === 0){
    grid[blueY][blueX] = 0;
    blueY = floor(mouseY / cellSize);
    blueX = floor(mouseX / cellSize);
    if (grid[blueY][blueX] != "wall"){
      grid[blueY][blueX] = "portalB";
      if (portalColor === 1){
        portalColor += 1
      }
      else if (portalColor === 2){
        grid[orangeY][orangeX] = 0;
        portalColor += 1
      }
    }
  }
}

function createRoom(){
  let room = [];
  if (state === "chamber1"){
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
  }
  return room;
}