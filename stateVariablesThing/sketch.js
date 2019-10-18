// State variables project
// Aiden Jorgensen
// Monday October 24 2019
//the state varible is used to check what page is showing

// Extra for Experts:
// - not sure if it counts but using links to websites wasn't something we did in class and neither was using fonts in Javascript

//this is where i declare all my variables i'm going to use later
state = "start"
let optionA;
let optionB;
let optionC;
let optionD;
let optionE;
let optionF;
let font;
let songHistory = [];

//the only thing i'm pre loading is the font
function preload(){
  font = loadFont('assets/rock_font.ttf');
}

//creating the canvas, seting text size and font
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  textFont(font);
  textSize(36);
}

//where all my main functions are called
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
}

//this mass of code is mainly links to YouTube videos of all the songs i'm playing
//and making sure they're being added to song history(song history is in the console after you press 6.)
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
      state = "popIsh"
    }
    else if (keyCode === 53 ||keyCode === 12){
      state = "memes"
    }
    else if (keyCode === 54 ||keyCode === 39){
      state = "history"
    }
  }
  //all the classic rock links
  else if(state === "classicRock"){
    if (keyCode === 49 ||keyCode === 35){
        window.open('https://www.youtube.com/watch?v=y8OtzJtp-EM');
        songHistory.push(optionA);
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=qBdFA6sI6-8');
      songHistory.push(optionD);
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=T0ZmErXkbxE');
      songHistory.push(optionB);
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=MhkPWV97GQU');
      songHistory.push(optionE);
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=fKhTk0IynHM');
      songHistory.push(optionC);
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=EJRdDhnTRoo');
      songHistory.push(optionF);
    }
    else if (keyCode === 27){
      state = 'genreSelect'
    }
  }
  //all the puck rock links
  else if (state === "punkRock"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=iymtpePP8I8');
      songHistory.push(optionA);
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=z7hhDINyBP0');
      songHistory.push(optionD);
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=kJsNeFdEBmU');
      songHistory.push(optionB);
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=tuK6n2Lkza0');
      songHistory.push(optionE);
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=hTWKbfoikeg');
      songHistory.push(optionC);
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=JoC3PUBmhFs'); 
      songHistory.push(optionF);
    }
    else if (keyCode === 27){
      state = 'genreSelect'
    }
  }
  //all the Alt-rock links
  else if (state === "altRock"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=I7rCNiiNPxA');
      songHistory.push(optionA);
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=z7hhDINyBP0');
      songHistory.push(optionD);
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=ENXvZ9YRjbo');
      songHistory.push(optionB);
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=mzJj5-lubeM');
      songHistory.push(optionE);
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=LAZUsCONjIQ');
      songHistory.push(optionC);
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=XFkzRNyygfk'); 
      songHistory.push(optionF);
    }
    else if (keyCode === 27){
      state = 'genreSelect'
    }
  }
  //all the (kinda)pop links
  else if(state === "popIsh"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=bc0KhhjJP98');
      songHistory.push(optionA);
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=m7Bc3pLyij0');
      songHistory.push(optionD);
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=G8dsvclf3Tk');
      songHistory.push(optionB);
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=s93NCuXt7x4');
      songHistory.push(optionE);
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=Hy_xJRbTq2Q');
      songHistory.push(optionC);
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=2K2Lo-vThho');
      songHistory.push(optionF);
    }
    else if (keyCode === 27){
      state = 'genreSelect'
    }
  }
  //all the meme links
  else if(state === "memes"){
    if (keyCode === 49 ||keyCode === 35){
      window.open('https://www.youtube.com/watch?v=E9s1ltPGQOo');
      songHistory.push(optionA);
    }
    else if (keyCode === 50 ||keyCode === 40){
      window.open('https://www.youtube.com/watch?v=CSvFpBOe8eY');
      songHistory.push(optionD);
    }
    else if (keyCode === 51 ||keyCode === 34){
      window.open('https://www.youtube.com/watch?v=SYnVYJDxu2Q');
      songHistory.push(optionB);
    }
    else if (keyCode === 52 ||keyCode === 37){
      window.open('https://www.youtube.com/watch?v=L_jWHffIx5E');
      songHistory.push(optionE);
    }
    else if (keyCode === 53 ||keyCode === 12){
      window.open('https://www.youtube.com/watch?v=q6-ZGAGcJrk');
      songHistory.push(optionC);
    }
    else if (keyCode === 54 ||keyCode === 39){
      window.open('https://www.youtube.com/watch?v=FTQbiNvZqaY');
      songHistory.push(optionF);
      
    }
    else if (keyCode === 27){
      state = 'genreSelect'
    }
  }
  else if(state === "history"){
    console.log(songHistory);
    state = 'genreSelect';
  }
}

//this is where i draw the Jukebox at the start of the code
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

//this is the menu I use everywhere
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

//the selection of genres avalible
function displayGenres(){
  optionA = "1.Classic Rock";
  optionB = "3.Punk Rock";
  optionC = '5.Memes'
  optionD = "2.Alternative Rock";
  optionE = "4.Pop-ish";
  optionF = "6.History";
  displayMain();
}

//selections of classic songs availible
function displayClassic(){
  optionA = "1.Immigrant Song - Led Zepplin";
  optionB = "3.Paradice City - Guns & Roses";
  optionC = "5.For Those About To Rock - ACDC";
  optionD = "2.Fox On The Run - Sweet";
  optionE = '4.Bohemian Rhasody - Queen';
  optionF = '6.Gimme Shelter - The Rolling Stones';
  displayMain();
  
}

//selection of punk rock songs availible
function displayPunk(){
  optionA = "1.Blitzkrieg Bop - Ramones";
  optionB = "3.Holiday/Boulevard Of Broken Dreams - Green Day";
  optionC = "5.Smells Like Teen Spirit - Nirvana";
  optionD = "2.The Rock Show - Blink 182";
  optionE = '4.Are You Gonna Be My Girl - Jet';
  optionF = '6.In To Deep - Sum 41';
  displayMain();
}

//selection of alternative rock availible
function displayAlt(){
  optionA = "1.Monkey Wrench - Foo Fighters";
  optionB = "3.Say It Ain't So - Weezer";
  optionC = "5.New Orleans Is Sinking - The Tragically Hip";
  optionD = "2.The Rock Show - Blink 182";
  optionE = '4.Scar Tissue - Red Hot Chilli Peppers';
  optionF = '6.Creep - Radio Head';
  displayMain();
}

//selection of songs that are made by pop artists
function displayPopIsh(){
  optionA = "1.Come And Get Your Love - Redbone";
  optionB = "3.Mr. Blue Sky - Electric Light Orchestra";
  optionC = "5.Hit It - Americain Authors";
  optionD = "2.Happier - Marshmello";
  optionE = '4.Blow - Ed Sheeran';
  optionF = '6.HeartBeat - Verite';
  displayMain();
}

//I was really just having fun here. enjoy the memes
function displayMemes(){
  optionA = "1.Mii Channel Theme - Nintendo";
  optionB = "3.Ra Ra Rasputin - Boney M.";
  optionC = "5.Spooky Scary Skeletons - Andrew Gold";
  optionD = "2.Chop Seuy! - System Of A Down";
  optionE = '4.All Star - Smash Mouth';
  optionF = '6.Africa - Toto';
  displayMain();
}

//making sure if the cosole is open it will go back to normal after it's closed
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}