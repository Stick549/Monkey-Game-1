
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, ST
var gameState = "play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20)  
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
  ground = createSprite(400, 350, 900, 10)
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
}


function draw() {
  background("white")
  monkey.velocityY  = monkey.velocityY + 0.8
  monkey.collide(ground)
  if(keyDown("space")){
    monkey.velocityY = -15
  }

    foodSpawn()
  obstaclesSpawn()

  

  stroke("black")
  textSize(20)
  fill("black")
  text("Survival Time:"+ST, 100, 50)
  drawSprites()
  if (obstacleGroup.isTouching(monkey)){
    gameState = "end"
  }
  console.log(frameCount)
}
function foodSpawn(){
  if (frameCount%80 === 0){
  banana = createSprite(500, random(120,200), 20, 20)
  banana.addImage(bananaImage)
  if (gameState==="play"){
  banana.velocityX = -5
  }
  
  banana.velocityX = -5
  banana.scale = 0.1
  banana.setLifetime = 90
  FoodGroup.add(banana)
  }
  if(gameState==="end"){
    banana.velocityX = 0
  }
  if (gameState === "play"){
    ST = Math.round(frameCount/frameRate())
  }
}
function obstaclesSpawn(){
  if (frameCount%300 === 0){
  obstacle = createSprite(500, 320, 20, 20)
  obstacle.addImage(obstacleImage)
  if (gameState==="play"){
  obstacle.velocityX = -5
  }
  
  obstacle.scale = 0.2
  obstacle.setLifetime = 90
  obstacleGroup.add(obstacle)
  }
  if(gameState==="end"){
    obstacle.velocityX = 0
  }
}






