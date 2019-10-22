
let r, g, b
let cannonX;
let cannonY;
let cannonW;
let cannonL;
let cannonA;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cannonX = 75;
  cannonY = height-150;
  cannonW = 50;
  cannonL = 125;
  cannonA = 0;
}

function draw() {
  noStroke();
  fire();
  background(255);
  displayCannon();
  updateBullets();
}

function displayCannon(){
  push();
  translate(cannonX, cannonY);
  cannonA = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonA);
  fill(122.5);
  rect(0, -25, cannonL, cannonW);
  fill(129,56,7);
  ellipse(0, 0, 90);
  pop();
}

function mouseMoved(){
  fire();
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}

function fire(){
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    radius: cannonW,
    angle: cannonA,
    speed: random(1.5,30)
  };
  bullets.push(thisBullet);
}

function updateBullets(){
  for(let thisBullet of bullets){
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    fill(r, g, b)
    circle(thisBullet.x, thisBullet.y, thisBullet.radius);
  }
}