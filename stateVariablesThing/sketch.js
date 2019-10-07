// State variables project
// Aiden Jorgensen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

state = "start"
let optionA;
let optionB;
let optionC;
let optionD;
let optionE;
let optionF;
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
  else if(state === 'classicRock'){
    displayClassic();
  }
  else if(state === 'punkRock'){
    diplayPunk();
  }
  else if(state === 'popIsh'){
    displayPopIsh();
  }
  else if (state === 'newRock'){
    diplayNew();
  }
  else if (state ==='memes'){
    displayMemes();
  }
  else if (state === 'oddBalls'){
    displayOdd();
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
  optionA = "1.Classic Rock";
  optionB = "3.Punk Rock";
  optionC = "4.New Rock";
  optionD = "2.Oddballs";
  optionE = '5.Memes'
  optionF = '6.Pop-ish'
  displayMain();
  if (keyIsPressed){
    if (keyCode === 49 ||keyCode === 35){
        state = "classicRock";
    }
    else if (keyCode === 50 ||keyCode === 40){
      state = "oddBalls";
    }
    else if (keyCode === 51 ||keyCode === 34){
      state = "punkRock";
    }
    else if (keyCode === 52 ||keyCode === 37){
      state = "newRock"
    }
    else if (keyCode === 53 ||keyCode === 12){
      state = "memes"
    }
    else if (keyCode === 54 ||keyCode === 39){
      state = "popIsh"
    }
  }
}

function displayMain(){
  background (249,123,12);
  fill(187,44,16);
  rectMode(CORNER);
  rect(0,0,windowWidth/10, windowHeight*2);
  rect(windowWidth - (windowWidth/10), 0, windowWidth/10, windowHeight*2);
  ellipse(windowWidth/5 + 150, windowHeight/4, 90);
  ellipse(windowWidth/5 + 150, windowHeight/4 + (windowHeight/4), 90);
  ellipse(windowWidth/5 + 150, windowHeight/4 + 2*(windowHeight/4), 90);
  ellipse(3* windowWidth/5 + 150, windowHeight/4 + 2*(windowHeight/4), 90);
  ellipse(3* windowWidth/5 + 150, windowHeight/4 + (windowHeight/4), 90);
  ellipse(3* windowWidth/5 + 150, windowHeight/4, 90);
  fill(0);
  text(optionA, windowWidth/5, windowHeight/4);
  text(optionB, windowWidth/5, windowHeight/4 + (windowHeight/4));
  text(optionC, windowWidth/5, windowHeight/4 + 2*(windowHeight/4));
  text(optionD, (3* windowWidth/5), windowHeight/4);
  text(optionE, (3* windowWidth/5), windowHeight/4 + (windowHeight/4));
  text(optionF, (3* windowWidth/5), windowHeight/4 + 2*(windowHeight/4));
}