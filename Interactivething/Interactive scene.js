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
let canMove;

let thatY;
let thatX;
let fireY;

let empX;
let empY;
let empDX;
let hasFired;
let youWin;
let youDied;
let thatMove;

function preload(){
  maverick = loadImage("assets/Mavchibi.png");
  emp = loadImage('assets/empnade.png');
  thatcher = loadImage("assets/deletthis.png");
  consulate = loadImage('assets/consulate.jpg')
  torch = loadImage('assets/propane torch.png')
  fire = loadImage('assets/fire.png')
  youWin = loadImage('assets/youwin.jpg')
  youDied = loadImage('assets/youdied.jpg')
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
  canMove = true;
  thatMove = true;

  background(255);
}

function draw(){
  background(consulate);
  moveMav();
  thatcherMove();
  tortch();
  contact();
  image(maverick, mavX, mavY, 150, 165);
  image(torch, (mavX - 80), (mavY+30), 90, 90);
  image(emp, empX, empY, 90, 50);
  image(thatcher, thatX, thatY, 150, 165);
}

function moveMav(){
  fireY = (mavY + 7);
  if (canMove === true){
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
        mavX -= 2.5;
      }
      else if (keyIsDown(68)){
        mavX += 2.5;
      }
    }
    else if (mavX > 0){
      mavX -= 2.5;
    }
    else if ((mavX + 150) < height){
      mavX += 2.5;
    }
  }
}

function thatcherMove(){
  if (thatMove === true){
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
}

function tortch(){
  if (mouseIsPressed){
    image(fire, firex, fireY, firesize, 30);
    firesize += 1;
    firex -= 1;
    canMove = false;
  }
  else{
    firex = (mavX - 162.5);
    firesize = 90;
    canMove = true;
  }
}

function contact(){
  if (empX < mavX + 165 && empX > mavX && empY > mavY && empY < mavY + 150){
    image(youDied, 0,0,windowWidth, windowHeight)
    thatMove = false;
    canMove = false;
  }
  if ((firex+firesize) < thatX + 165 && (firex+firesize) > thatX && fireY > thatY && fireY < thatY + 150){
    image(youWin, 0,0,windowWidth, windowHeight);
    thatMove = false;
    canMove = false;
  }
}