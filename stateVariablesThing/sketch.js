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
let font;

function preload(){
  font = loadFont('assets/rock_font.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  textFont(font);
  textSize(36);
}

function draw() {
  if (state === "start"){
    displayBox();
  }
  else if(state === "genreSelect"){
    displayGenres();
  }
  else if(state === 'classicRock'){
    textSize(26);
    displayClassic();
  }
  else if(state === 'punkRock'){
    textSize(26);
    displayPunk();
  }
  else if(state === 'popIsh'){
    textSize(26);
    displayPopIsh();
  }
  else if (state === 'altRock'){
    textSize(26);
    displayAlt();
  }
  else if (state ==='memes'){
    textSize(26);
    displayMemes();
  }
  else if (state === 'oddBalls'){
    textSize(26);
    displayOdd();
  }
}

function keyPressed() {
  if (state === "genreSelect") {
    if (keyCode === 49 ||keyCode === 35){
      state = "classicRock";
    }
    else if (keyCode === 50 ||keyCode === 40){
      state = "altRock";
    }
    else if (keyCode === 51 ||keyCode === 34){
      state = "punkRock";
    }
    else if (keyCode === 52 ||keyCode === 37){
      state = "oddBalls"
    }
    else if (keyCode === 53 ||keyCode === 12){
      state = "memes"
    }
    else if (keyCode === 54 ||keyCode === 39){
      state = "popIsh"
    }
  }
  else if(state === "classicRock"){
    if (keyCode === 49 ||keyCode === 35){
        window.open('https://www.youtube.com/watch?v=y8OtzJtp-EM');
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=qBdFA6sI6-8');
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=T0ZmErXkbxE');
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=MhkPWV97GQU');
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=fKhTk0IynHM');
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=EJRdDhnTRoo');
      
    }
  }
  else if (state === "punkRock"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=iymtpePP8I8');
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=z7hhDINyBP0');
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=kJsNeFdEBmU');
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=tuK6n2Lkza0');
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=hTWKbfoikeg');
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=JoC3PUBmhFs');
      
    }
  }
  else if (state === "altRock"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=I7rCNiiNPxA');
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=z7hhDINyBP0');
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=ENXvZ9YRjbo');
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=mzJj5-lubeM');
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=LAZUsCONjIQ');
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=XFkzRNyygfk');
      
    }
  }
  else if(state === "popIsh"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=I7rCNiiNPxA');
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=z7hhDINyBP0');
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=ENXvZ9YRjbo');
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=LAZUsCONjIQ');
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=mzJj5-lubeM');
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=XFkzRNyygfk');
      
    }
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
  optionC = '5.Memes'
  optionD = "2.Alternative Rock";
  optionE = "4.Oddballs";
  optionF = '6.Pop-ish'
  displayMain();
}

function displayMain(){
  background (249,123,12);
  fill(187,44,16);
  rectMode(CORNER);
  rect(0,0,windowWidth/10, windowHeight*2);
  rect(windowWidth - (windowWidth/10), 0, windowWidth/10, windowHeight*2);
  ellipse(1.1* windowWidth/5 - 100, windowHeight/4, 90);
  ellipse(1.1* windowWidth/5 - 100, windowHeight/4 + (windowHeight/4), 90);
  ellipse(1.1* windowWidth/5 - 100, windowHeight/4 + 2*(windowHeight/4), 90);
  ellipse(3.18* windowWidth/5 - 100, windowHeight/4 + 2*(windowHeight/4), 90);
  ellipse(3.18* windowWidth/5 - 100, windowHeight/4 + (windowHeight/4), 90);
  ellipse(3.18* windowWidth/5 - 100, windowHeight/4, 90);
  fill(0);
  text(optionA,windowWidth/5, windowHeight/4);
  text(optionB, windowWidth/5, windowHeight/4 + (windowHeight/4));
  text(optionC, windowWidth/5, windowHeight/4 + 2*(windowHeight/4));
  text(optionD, (3.1* windowWidth/5), windowHeight/4);
  text(optionE, (3.1* windowWidth/5), windowHeight/4 + (windowHeight/4));
  text(optionF, (3.1* windowWidth/5), windowHeight/4 + 2*(windowHeight/4));
}

function displayClassic(){
  optionA = "1.Immigrant Song - Led Zepplin";
  optionB = "3.Paradice City - Guns & Roses";
  optionC = "5.For Those About To Rock - ACDC";
  optionD = "2.Fox On The Run - Sweet";
  optionE = '4.Bohemian Rhasody - Queen'
  optionF = '6.Gimme Shelter - The Rolling Stones'
  displayMain();
  
}

function displayPunk(){
  optionA = "1.Blitzkrieg Bop - Ramones";
  optionB = "3.Holiday/Boulevard Of Broken Dreams - Green Day";
  optionC = "5.Smells Like Teen Spirit - Nirvana";
  optionD = "2.The Rock Show - Blink 182";
  optionE = '4.Are You Gonna Be My Girl - Jet'
  optionF = '6.In To Deep - Sum 41'
  displayMain();
}

function displayAlt(){
  optionA = "1.Monkey Wrench - Foo Fighters";
  optionB = "3.Say It Ain't So - Weezer";
  optionC = "5.New Orleans Is Sinking - The Tragically Hip";
  optionD = "2.The Rock Show - Blink 182";
  optionE = '4.Scar Tissue - Red Hot Chilli Peppers'
  optionF = '6.Creep - Radio Head'
  displayMain();
}
//haven't done popish links yet
function displayPopIsh(){
  optionA = "1.Come And Get Your Love - Redbone";
  optionB = "3.Mr. Blue Sky - Electric Light Orchestra";
  optionC = "5.New Orleans Is Sinking - The Tragically Hip";
  optionD = "2.Happier - Marshmello";
  optionE = '4.'
  optionF = '6.Creep - Radio Head'
  displayMain();
}