//Global Variables
var banana,bananaimage,foodgroup;
var monkey,monkeyimage;
var obstacleimage,obstaclegroup;
var back,score,bg,ground,groundimage;
 
function preload(){
  bananaimage=loadImage("banana.png")

monkeyimage=loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  obstacleimage=loadImage("stone.png")

  back=loadImage("jungle.jpg")

  
}


function setup() {
  createCanvas(600,300);

  foodgroup = new Group();
  obstaclegroup= new Group();
  bg = createSprite(300,20,600,600);
  bg.addImage("background",back);
  monkey=createSprite(550,590,10,10);
  monkey.addAnimation("monkey",monkeyimage);
  ground=createSprite(300,590,400,10);

}

function draw(){
 background(255); 
  monkey.collide(ground);
  
  text("score:"+score,300,100)
  
  monkey.velocityY=0.8
  
  createBanana();
  createObstacles();
  
  if(keyDown("space")) {
    monkey.velocityY=-7;
  }
  
  if(foodgroup.isTouching(monkey)){
    foodgroup.destroyeach();
    score=score+1;
  }
  
  if (score == 10 || 20 || 30 || 40) {
    switch(score){
      case 10: player.scale=0.12;
              break;
      case 20: player.scale=0.14;
              break;
      case 30: player.scale=0.16;
              break;
      case 40: player.scale=0.18;
              break;
      default: break;
    }
  }
  
  if(obstaclegroup.isTouching(monkey)){
       monkey.scale = 0.2;
    }
  
 
  drawSprites()
}

function createBanana(){  
  if(World.frameCount%80===0){
    banana=createSprite(390,270,10,10);
    banana.y=random(550,500);
    banana.scale=0.05;
    banana.addImage("banana",bananaimage);
    foodgroup.add(banana);
    banana.velocityX=-4;
    banana.lifetime=200;
  }
}
function createObstacles(){
  if(World.frameCount%300===0){
    obstacle=createSprite(390,270,10,10);
    obstacle.addImage("Stone",obstacleimage);
    obstacle.scale=0.15;
    obstacle.velocityX=-5;
    obstacle.lifetime=200;
    obstaclegroup.add(obstacle);
  }
}
