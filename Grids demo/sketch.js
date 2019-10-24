let grid = [];
let cols = 30;
let rows = 30;

function setup() {
  createCanvas(800, 800);
  grid = make2dArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid);
  fill(random(0,255));
}

function keyTyped(){
  if (key === 'r'){
    
  }
  if(key === 'c'){
    for(let x = 0; x< cols; x++){
      for (let y = 0; y < rows; y++){
        grid[y][x] = 1;
      }
    }
  }
}

function mousePressed(){
  let cellSize = width/cols;
  let xcoord = floor(mouseX/cellSize);
  let ycoord = floor(mouseY/cellSize);
  if (grid[ycoord][xcoord] === 1){
    grid[ycoord][xcoord] = 0;
  }
  else{
    grid[ycoord][xcoord] = 1;
  }
}

function displayGrid(theGrid){
  //assumes the grid is a square
  let cellSize = width/ cols;
  for(let y = 0; y < rows; y++){
    for(let x = 0; x< cols; x++){
      if (theGrid[y][x]===0){
        fill(255);
      }
      else{
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function make2dArray(cols, rows){
  let someArray = [];
  for(let i = 0; i<cols;i++){
    someArray.push([]);
    for (let j = 0; j<rows;j++){
      if(random(100)<50){
        someArray[i].push(1);
      }
      else{
        someArray[i].push(0);
      }
    }
  }
  return someArray;
}