let pack;
let filteredImage;
function preload(){
  pack = loadImage("assets/alphapack.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  filteredImage = grayScale(pack);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(filteredImage, mouseX, mouseY);
  
}

function grayScale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  //load pixles
  img.loadPixels();
  sourceImage.loadPixels();
  for(let x = 0; x < sourceImage.width; x++){
    for(let y = 0; y < sourceImage.height; y++){
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + g) / 3;

      img.set(x, y, color(average, average, average));
    }
  }
  img.updatePixels();
  return img;
}
