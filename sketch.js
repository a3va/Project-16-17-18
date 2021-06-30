
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var bg, bgImage;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bgImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

monkey = createSprite(80, 80, 20, 20);
monkey.addAnimation ("monkey1",monkey_running);
monkey.scale=0.1;
  monkey.velocityY = 12;  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(bgImage);
  
 
  
  if(keyDown("space")&& monkey.y >=530 ){ 
    monkey.velocityY = -12;
  }
  else
    {
        monkey.velocityY = monkey.velocityY + 0.8;
    }
  
  
  
    fill(2555,255,255);
    textSize(20);
   text("Score: "+ score, 500,50);
  
  
    fill(2555,255,255);
    textSize(20);
   text("Survival Time: "+ survivalTime, 300,50);
   survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
   
  
  

  
   ground = createSprite(300,580,600,20);
  ground.velocityX = -1;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  makeFood();
  makeObstacles();
  
    
  if (monkey.isTouching (FoodGroup)) {
    FoodGroup.destroyEach();
    score = score + 5;
  }
  
   if (monkey.isTouching (obstacleGroup)) {
    obstacleGroup.destroyEach();
    score = score - 5;
  }
  
  if (monkey.Y === 410){
    monkey.Y = 550;
  }

  
  monkey.collide(ground);
  
  
 /* fill(2555,255,255);
    textSize(20);
      text(mouseX+","+mouseY, 20, 20);*/
  
  
  switch(score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
      default:break;
      
  }
  
  if(monkey.isTouching (obstacleGroup)){
    monkey.scale = 0.2
  }

  
  

  drawSprites();
}

function makeFood(){

  if (frameCount % 90 === 0) {
    var food = createSprite(600,600,40,10);
    food.y = Math.round(random(450,560));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
    
    food.lifetime = 200;
    
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(food);
  }

}


function makeObstacles(){
 

 if (frameCount % 300 === 0) {
  var obstacle = createSprite(600,120,40,10);
    obstacle.y = 560;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    
    obstacle.lifetime = 200;
    
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    obstacleGroup.add(obstacle);
  }
  

 
  
  
       
    
    
  

}





