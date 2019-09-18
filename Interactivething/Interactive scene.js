// Line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thatcher;
let maverick;
let emp;
let consulate;

let mavY;
let mavX;

let thatY;
let thatX;

let empX;
let empY;
let empDX;
let hasFired;

function preload(){
  thatcher = loadImage("assets/deletthis.png");
  maverick = loadImage("assets/Mavchibi.png");
  emp = loadImage('assets/empnade.png');
  consulate = loadImage('assets/consulate.jpg')
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  mavY = (windowHeight/2);
  mavX = ((windowWidth/6*5));
  thatY = (windowHeight/2);
  thatX = ((windowHeight/6));
  empX = thatX;
  empY = thatY;
  empDX = 10;

  background(255);
}

function draw(){
  background(consulate);
  moveMav();
  thatcherMove();
  image(maverick, mavX, mavY, 150, 165);
  image(emp, empX, empY, 90, 50)
  image(thatcher, thatX, thatY, 150, 165);
}

function moveMav(){
  if (mavY > 0 && (mavY + 150) < height){
    if (keyIsDown(87)){
      mavY -= 10;
    }
    else if (keyIsDown(83)){
      mavY += 10;
    }
  }
  else if (mavY > 0){
    mavY -= (height - 165);
  }
  else if ((mavY + 150) < height){
    mavY += (height-150);
  }
  if (mavX > 0 && (mavX + 150) < width){
    if (keyIsDown(65)){
      mavX -= 10;
    }
    else if (keyIsDown(68)){
      mavX += 10;
    }
  }
  else if (mavX > 0){
    mavX -= (width - 165);
  }
  else if ((mavX + 150) < height){
    mavX += (width + 165);
  }
}
function thatcherMove(){
  if (thatY === mavY){
    hasFired = true;
    launch();
  }
  else if (thatY < mavY){
    thatY += 5;
  }
  else if (thatY  > mavY){
    thatY -= 5;
  }
}

function launch(){
  if (hasFired = true){
    if (empX < width){
      empX += empDX;
    }
    else{
      hasFired = false;
    }
    
  }
  else{
    empX = thatX;
    empY = thatY+65;
  }
}