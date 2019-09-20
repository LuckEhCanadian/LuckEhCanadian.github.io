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
let torch;
let fire;
let firesize;
let firex;

let mavY;
let mavX;

let thatY;
let thatX;

let empX;
let empY;
let empDX;
let hasFired;

function preload(){
  maverick = loadImage("assets/Mavchibi.png");
  emp = loadImage('assets/empnade.png');
  thatcher = loadImage("assets/deletthis.png");
  consulate = loadImage('assets/consulate.jpg')
  torch = loadImage('assets/propane torch.png')
  fire = loadImage('assets/fire.png')
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  mavY = (windowHeight/2);
  mavX = ((windowWidth/6*5));
  thatY = (windowHeight/2);
  thatX = ((windowHeight/6));
  empX = thatX;
  empY = thatY;
  empDX = 15;

  background(255);
}

function draw(){
  background(consulate);
  moveMav();
  thatcherMove();
  contact();
  image(maverick, mavX, mavY, 150, 165);
  image(torch, (mavX - 80), (mavY+30), 90, 90);
  image(emp, empX, empY, 90, 50);
  image(thatcher, thatX, thatY, 150, 165);
}

function moveMav(){
  if (mavY > 0 && (mavY + 150) < height){
    if (keyIsDown(87)){
      mavY -= 5;
    }
    else if (keyIsDown(83)){
      mavY += 5;
    }
  }
  else if (mavY > 0){
    mavY -= 2.5;
  }
  else if ((mavY + 150) < height){
    mavY += 2.5;
  }
  if (mavX > 0 && (mavX + 150) < width){
    if (keyIsDown(65)){
      mavX -= 5;
    }
    else if (keyIsDown(68)){
      mavX += 5;
    }
  }
  else if (mavX > 0){
    mavX -= 2.5;
  }
  else if ((mavX + 150) < height){
    mavX += 2.5;
  }
}

function thatcherMove(){
  if (thatY === mavY && mavX > thatX){
    hasFired = true;
  }
  else if (thatY < mavY){
    thatY += 2.5;
  }
  else if (thatY > mavY){
    thatY -= 2.5;
  }
  if (empX < width){
    if (hasFired === true){
      empX += empDX;
    }
    else{
      empX = thatX;
      empY = thatY+65;
    }
  }
  else{
    empX = thatX;
    empY = thatY+65;
    hasFired = false;
  }
}

function contact(){
  if (mouseIsPressed){
    image(fire, firex, (mavY + 7), firesize, 30);
    firesize += 1;
    firex -= 1;
  }
  else{
    firex = (mavX - 162.5);
    firesize = 90;
  }
}