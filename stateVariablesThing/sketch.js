// State variables project
// Aiden Jorgensen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

state = "start"
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function draw() {
  if (state === "start"){
    displayBox();
  }
  else if(state === "genreSelect"){
    displayGenres();
  }
}

function displayBox(){
  rectMode(CENTER)
  background(0, 0, 0);
  fill(187,44,16);
  ellipse(windowWidth/2, windowHeight- (windowHeight/2), windowWidth/3);
  rect(windowWidth/2, windowHeight - windowHeight/4, windowWidth/3, windowHeight/2);
  fill(249,123,12);
  arc(windowWidth/2, windowHeight- (windowHeight/2), windowWidth/3.5, windowWidth/3.5, PI, 0, open);
  rect(windowWidth/2, windowHeight - windowHeight/2.5, windowWidth/5, windowHeight/30,);
  rect(windowWidth/2, windowHeight - windowHeight/2.85, windowWidth/5, windowHeight/15);
  fill(187,44,16);
  arc(windowWidth/2, windowHeight- (windowHeight/2), windowWidth/6, windowWidth/6, PI, 0, open);
  rect(windowWidth/2 - windowWidth/6.5, windowHeight - windowHeight/4, windowWidth/30, windowHeight/2);
  rect(windowWidth/2 + windowWidth/6.5, windowHeight - windowHeight/4, windowWidth/30, windowHeight/2);
  rect(windowWidth/2, windowHeight,windowWidth/3, windowHeight/20);
  if (keyIsPressed){
    if (keyCode === 32){
      state = "genreSelect";
    }
  }
}

function displayGenres(){
  background (249,123,12);
  fill(187,44,16);
  rectMode(CORNER);
  rect(0,0,windowWidth/10, windowHeight*2);
  rect(windowWidth - (windowWidth/10), 0, windowWidth/10, windowHeight*2);
  ellipse(windowWidth/5 + 150, windowHeight/4, 90);
  ellipse(windowWidth/5 + 150, windowHeight/4 + (windowHeight/4), 90);
  fill(0);
  text("Rock page 1", windowWidth/5, windowHeight/4);
  text("Rock page 2", windowWidth/5, windowHeight/4 + (windowHeight/4));
}