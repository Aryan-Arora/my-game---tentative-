var gameState=0;

function preload(){
  arrow_Img=loadImage("arrow0.png")
  balloonBackground_Img=loadImage("background0.png")
  blueballoon_Img=loadImage("blue_balloon0.png")
  greenballoon_Img=loadImage("green_balloon0.png")
  pinkballoon_Img=loadImage("pink_balloon0.png")
  redballoon_Img=loadImage("red_balloon0.png")
  monkeyBackground_Img=loadImage("jungle.jpg")
  door_Img=loadImage("door.png")
  climber_Img=loadImage("climber.png")
  bow_Img=loadImage("bow0.png")
  banana_Img=loadImage("banana.png")
  ghost_Img=loadImage("ghost-jumping.png")
  trexGround_Img=loadImage("ground2.png")
  monkeyObstacle_Img=loadImage("obstacle.png")
  tower_Img=loadImage("tower.png")
  trex_animation=loadAnimation("trex1.png","trex3.png","trex4.png")
  monkey_animation=loadAnimation("sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png",)
  trexObstacle1_Img=loadImage("obstacle1.png")
  trexObstacle2_Img=loadImage("obstacle2.png")
  trexObstacle3_Img=loadImage("obstacle3.png")
  trexObstacle4_Img=loadImage("obstacle4.png")
  trexObstacle5_Img=loadImage("obstacle5.png")
  trexObstacle6_Img=loadImage("obstacle6.png")
  cloud_Img=loadImage("cloud.png")
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  if(gameState===0){
  form1=new form();
  form1.display();
  }
  if(gameState===1){
    monkeygame();
  }
  if(gameState===2){
    balloonbustergame();
    
  }
  if(gameState===3){
    ghostgame();
  }
  if(gameState===4){
   
   trexgame();
  }
  drawSprites();
}

function monkeygame(){
  
  background(monkeyBackground_Img)
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_animation);
 
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10);
  
  ground.velocityX=-10
  ground.x=ground.x+ground.width/10
  console.log(ground.x)
  ground.visible=false;
    

 
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  obstacleGroup.collide(ground)
  
  score=0;
  monkey.collide(ground)

  if(keyDown("SPACE")&& monkey.y>=100){
    monkey.y=monkey.y-12
     monkey.y=monkey.y+0.8 
     
                                  
   }

  if(ground.x<300){
    ground.x=200
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(bananaGroup.isTouching(monkey)){
    score=score+1
    
    bananaGroup.destroyEach();
    
  }
  if(obstacleGroup.isTouching(monkey)){
    
    ground.velocityX=0
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    bananaGroup.velocityX=0
    obstacleGroup.velocityX=0
    gameState="end"
    monkey.scale=0.1
    
  }
  
  
  
  
  switch(score){
      case 10: monkey.scale=0.10
               break;
      case 20: monkey.scale=0.16
               break;
      case 30:monkey.scale=0.22
               break;
      case 40: monkey.scale=0.28
             break;
             default: break;
  
               
  }

  if(frameCount%150===0){
    banana=createSprite(400,250,10,10);
    banana.addImage();
    banana.scale=0.09
      banana.velocityX=-2
      banana.lifetime=250
      bananaGroup.add(banana_Img)
    }
    if(frameCount%200===0){
      obstacle=createSprite(400,ground.y,10,10)
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1
      obstacle.velocityX=-2
      obstacle.lifetime=250
      obstacle.collide(ground)
      obstacleGroup.add(monkeyObstacle_Img)
    }
}


function ghostgame(){
  var railing;

var background;
var PLAY=1;
var END=0;
var gamestate=1;
var invsibleBlock;
var invisibleBlockgroup;


var doorGroup;
var railingGroup;

var door;

var ghost;


doorGroup=new Group();
  railingGroup=new Group();
  
  ghost=createSprite(200,200,10,10);
  ghost.addImage(ghost_Img)
  ghost.scale=0.3
  
  invisibleBlockgroup=new Group();

background1=createSprite(0,0,800,400)
background1.addImage(tower_Img)
  if(gamestate===PLAY){
    if(background1.y>300){
      background1.y=200
    }
    background1.velocityY=2
    drawSprites();
    
    
    
    
    if(keyDown("left")){
      ghost.x=ghost.x-3
      
      
    }
    
    if(keyDown("right")){
      ghost.x=ghost.x+3
      
      
    }
    
    if(keyDown("up")){
      ghost.y=ghost.y-3
      
      
    }
    
    if(keyDown("space")){
       
      ghost.y=ghost.y- 10
      
    }
    
    
    
  if(ghost.isTouching(invisibleBlockgroup)){
    
   gameState=END;
    ghost.destroy();
    
  }
      
    
    if(gamestate===END){
      
      stroke("yellow"); 
      fill("yellow"); 
      textSize(30);
      text("Game Over", 230,250) }
    }
    if(frameCount%150===0){
      door=createSprite(Math.round(random(100,300)),10,10,10)
      door.addImage(door_Img)
      door.velocityY=2
        door.lifetime=300
        doorGroup.add(door)
    }

    if(frameCount%150===0){
      railing=createSprite(door.x,65,10,10)
      railing.addImage()
      railing.velocityY=2
      railing.lifetime=300
      railingGroup.add(climber_Img)
      
      invisibleBlock = createSprite(200,15,10,10); invisibleBlock.width = railing.width
    invisibleBlock.height = 2;
  invisibleBlock.x = railing.x;
  invisibleBlock.velocityY =2;
  invisibleBlock.lifetime = 300;
  invisibleBlockgroup.add(invisibleBlock);
      invisibleBlock.debug = true;
    }
  
    
    
    
  

}

function trexgame(){
  var play = 1;
var end = 0;
var gameestate = 1;

var trex;
var ground, invisibleGround

var cloudsGroup;
var obstaclesGroup;

var score;

trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_animation );
 
  

  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",trexGround_Img);
  ground.x = ground.width /2;
  
  
  
  
 
 
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();

  
  trex.setCollider("rectangle",0,0,trex.width,trex.height);
  trex.debug = true
  
  score = 0;

  text("Score: "+ score, 500,50);
  
  
  if(gameestate === play){

   
    
    ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
    
    
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    
    //add gravity
    trex.velocityY = trex.velocityY + 0.8
  
    if (frameCount % 60 === 0){
      var obstacle = createSprite(600,165,10,40);
      obstacle.velocityX = -(6 + score/100);
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(trexObstacle1_Img);
                 break;
         case 2: obstacle.addImage(trexObstacle2_Img);
                 break;
         case 3: obstacle.addImage(trexObstacle3_Img);
                 break;
         case 4: obstacle.addImage(trexObstacle4_Img);
                 break;
         case 5: obstacle.addImage(trexObstacle5_Img);
                 break;
         case 6: obstacle.addImage(trexObstacle6_Img);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.5;
       obstacle.lifetime = 300;

      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }

    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,40,10);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloud_Img);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }


    
    if(obstaclesGroup.isTouching(trex)){
        
        
        gameestate = end;
        
      
    }
  }

  if(gameestate===end){
    form1.display();
  }
   
     
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0);    
   
  
 
  //stop trex from falling down
  trex.collide(invisibleGround);
}
  
function balloonbustergame(){
var bow;
var balloon;
var ground;
var arrow ;
var balloonGroup;

balloonGroup=new Group();

ground=createSprite(0,0,600,600);
  ground.addImage("ground",balloonBackground_Img);
  ground.scale=2.5
  
  bow=createSprite(500,200,10,10);
  
  bow.addImage("bow",bow_Img);
  
  
  ground.velocityX=-2
  if (ground.x < 100){
    ground.x = ground.width/2;
    
    
  }
 
bow.y=mouseY
  

if(keyWentDown("space")){
   
  
  arrow=createSprite(475,200,10,10)
  arrow.addImage("arrow",arrow_Img)        
  arrow.scale=0.3
  arrow.velocityX=-2
   lifetime=200
    arrow.velocityX=-2
   lifetime=200 
    arrow.y=bow.y
  }
 if(frameCount%40===0){
   balloon=createSprite(0,Math.round(random(20,200)),10,10)
   var num=Math.round(random(1,4))
   switch(num){
    case 1:balloon.addImage(greenballoon_Img)
    break;
    
    case 2:balloon.addImage(pinkballoon_Img)
    break;

    case 3:balloon.addImage(blueballoon_Img)
    break;

    case 4:balloon.addImage(redballoon_Img)
    break;

    default:
    break;
   }
   balloonGroup.add(balloon)
 }
if(arrow.isTouching(balloonGroup)){
balloonGroup.destroyEach();
}
}
  
