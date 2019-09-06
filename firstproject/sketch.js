// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let redamount = 150;
let redchangeamount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function draw() {
  fill(redamount, 0, 255);
  noStroke();
  ellipse(mouseX,mouseY,100,100);

  redamount+=redchangeamount;

  if (redchangeamount >= 255){
     redchangeamount *= -1;
  }
  if (redchangeamount <= 0){
    redchangeamount *= -1
  }
  console.log(redamount);
}
