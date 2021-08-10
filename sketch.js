var Runner,RunnerImg,Runner_running;
var path,pathImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
   path=createSprite(400,400);
   path.addImage(pathImg);
    path.Y = 4;
   path.scale = 1.2;

}

function draw() {
  background(0);
 
  drawSprites();
}
