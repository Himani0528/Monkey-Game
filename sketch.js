
var player , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
player = createSprite(50,340,20,50);
player.addAnimation("monkey",monkey_running);
player.scale=0.1;

  ground= createSprite(400,372,800,10);
 ground.velocityX= -4;
 
  console.log(ground.x);

 foodGroup= createGroup();
 obstacleGroup= createGroup();

 score=0;

  
}


function draw() {
 console.log(player.y);
  
    background(255);
    
     //jump when the space key is pressed
    if(keyDown("space")&&player.y>=336.3){
    player.velocityY = -10 ;
    }      
   
   //add gravity
    player.velocityY = player.velocityY + 0.8;
   
    //resting the ground and make it infinite
  
     console.log(World.frameRate);
     console.log(World.frameCount);
      //stop player from falling down   
     createEdgeSprites();
     player.collide(ground);
  
   if (ground.x<0) {
      ground.x=ground.width/2;
    }
  
  var survivalTime=0;
  stroke=("white");
  textSize(24);
  fill("white");
  text("Score:" + score ,500,50);
  
     
     textSize(20);
     fill('black');
     survivaltime=Math.ceil(frameCount/frameRate());
     text("Survival Time:" + survivaltime ,100,50);
     
     obstacle();
    food();
    drawSprites();
  }
  
  function obstacle(){
    
     if(World.frameCount % 300 === 0) {
      var obstacles = createSprite(400,360,10,40);
      obstacles.velocityX = -6 ;
      
      //generate random obstacles 
     
      obstacles.addImage("obstace",obstaceImage);
      
      
      //assign scale and lifetime to the obstacle           
      obstacles.scale = 0.1;
      obstacles.lifetime = 70;
      //add each obstacle to the group
      obstacleGroup.add(obstacles);
    }
  
}

function food(){
     if(World.frameCount % 80 === 0) {
      var banana = createSprite(400,280,10,40);
      banana.velocityX = -6 ;
      
      //generate random obstacles 
      
      banana.addImage("bannana", bananaImage);
      
      
      //assign scale and lifetime to the obstacle           
      banana.scale = 0.1;
      banana.lifetime = 70;
      //add each obstacle to the group
     foodGroup.add(banana);
    }
  }
  




