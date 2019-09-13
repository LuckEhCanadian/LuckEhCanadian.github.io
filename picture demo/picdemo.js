// Line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let thatcher;
let w = 500
let h = 681


function preload(){
  thatcher = loadImage("assets/deletthis.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      (w *= 1.1);
      (h *= 1.1);
    }
    else if (keyCode === DOWN_ARROW){
      (w /= 1.1);
      (h /= 1.1);
    }
  }
  background(255);
  imageMode(CENTER)
  image(thatcher, mouseX, mouseY, w, h)
}