// Line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x;
let y;
let radius;
let dx;
let dy;
let mode = "rectangle";
let rectsize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y= height/2;
  radius = 100;
  dx = random(-15,15);
  dy = random(-15,15);
  rectsize = 100;
}

function draw() {
  moveShape();
  background(255);
  if (mode === "circle"){
    displayCircle();
  }
  else if (mode === "rectangle"){
    displayRect();
  }
}

function moveShape(){
  x += dx;
  y += dy;
}

function displayCircle(){
  if ((x + radius/2) >width || (x - radius/2) < 0){
    dx *= -1;
  }
  if ((y + radius/2) >height || (y - radius/2) < 0){
    dy *= -1;
  }
  fill(0);
  ellipse(x, y, radius);
}

function displayRect(){
  fill(0)
  rect(x, y, rectsize, rectsize)
  if (x +  rectsize > width || x < 0){
    dx *= -1
  }
  if (y + rectsize > height || y < 0){
    dy *= -1
  }
}