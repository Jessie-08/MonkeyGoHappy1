
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  //ground.velocityX=-4;
  //ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
}


function draw() {
  background("white");
  
  textSize(20);
  stroke("black");
  fill("black");
  text("Survival Time: "+score,250,50);
  
  score=score + Math.round(getFrameRate()/60);
  
  if(ground.x<0){
      ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY= -12;
  }
  
  //add gravity
  monkey.velocityY=monkey.velocityY+0.8;
 
  monkey.collide(ground);
 
  banana();
  
  obstacles();
  
drawSprites();  
}

function banana(){
  if(frameCount % 80 === 0){
    var banana  = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=200;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,350,900,10);
    obstacle.y = Math.round(random(333,333));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
    
    obstacleGroup.add(obstacle);
  }
}