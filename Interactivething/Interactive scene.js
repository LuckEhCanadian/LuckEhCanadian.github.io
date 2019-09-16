// Line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thatcher;
let maverick;

let mavY;
let mavX;

let thatY;
let thatX;

function preload(){
  thatcher = loadImage("assets/deletthis.png");
  maverick = loadImage("assets/Mavchibi.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  mavY = (windowHeight/2);
  mavX = ((windowWidth/6*5));
  thatY = (windowHeight/2);
  thatX = ((windowHeight/6));

  background(255);
}

function draw(){
  background(255);
  moveMav();
  //thatcherMove();
  image(maverick, mavX, mavY, 150, 150);
  image(thatcher, thatX, thatY, 150, 175);
}

function moveMav(){
  if (mavY > 0 && (mavY + 150) < height){
    if (keyIsDown(87)){
      (mavY -= 5);
    }
    else if (keyIsDown(83)){
      (mavY += 5);
    }
  }
  else if (mavY > 0){
    (mavY -= 5);
  }
  else if ((mavY +150) < height){
    (mavY += 5);
  }
}
function thatcherMove(){
  if (thatY > 0 && (thatY + 175) > 0){
    (thatY += random(-20,20))
  }
}