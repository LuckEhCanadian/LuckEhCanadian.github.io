// Interactive scene
// Aiden Jorgensen
// Wednesday September 25 2019
//
// Extra for Experts:
// - Thatcher yells when emp grenades are thrown

//creation my list of variables
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

//loading all the images
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

//setting my variables tjhat are needed right away as well as making the canvas
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

//calling all the functions here as well as spawning the images
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

//this is Mvaericks movement code
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

//this is thatcher's movement code
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

//this is the functional part of the torch and freezing Maverick while the torch is active
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

//function that controls winning and loosing
function contact(){
  if (empX < mavX + 165 && empX > mavX && empY > mavY && empY < mavY + 150){
    image(youDied, 0,0,windowWidth, windowHeight);
    noLoop();
  }
  if (firex < thatX + 150 && firex > thatX && fireY > thatY && fireY < thatY + 150){
    if (mouseIsPressed){
      image(youWin, 0,0,windowWidth, windowHeight);
      noLoop();
    }
  }
}
