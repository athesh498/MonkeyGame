
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;
var ground;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png")
 
}



function setup() {
  createCanvas(400,400);
monkey = createSprite(50,354,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  ground = createSprite(0,390,800,10);
    obstaclesGroup = createGroup();
  monkey.setCollider("circle",0,0,400)
  //monkey.debug=true;

}


function draw() {

  background("white");
  
  if(keyDown("space")){//&&//monkey.Y > 350){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  if(obstaclesGroup.isTouching(monkey)){
    obstacle.velocityX = 0;
    obstaclesGroup.setVelocityXEach=0;
    survivaltime = 0;
    //obstaclesGroup.destroyEach();
  }
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.round(frameCount/frameRate());
  text("Survival Time: "+survivaltime,100,50);
  monkey.collide(ground)
  console.log(monkey.y);
  spawnBananas();
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%100===0){
    obstacle = createSprite(400,365,50,50);
    obstacle.addImage("bubu",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-2;
    obstacle.lifetime=300;
        obstaclesGroup.add(obstacle);

  }
}
function spawnBananas(){
  if(frameCount%100===0){
    banana = createSprite(400,random(200,300),25,25)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-4;
  }
}






