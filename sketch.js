const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var background,backgrounImg;

var ground,ground2,ground3;

var lucky1,lucky2;

var mario1,mario;

var brick1,brick2,brick3;

var pipe1;

var enemy1,enemy2,enemyImg;

var death;

var score = 0;

var invis;

var a = 0;

function preload(){
  mario1 = loadAnimation("sprites/mario1.png","sprites/mario2.png","sprites/mario3.png");

  enemyImg = loadImage("sprites/goomba.png");

  death = loadImage("sprites/ggoomba.png");
}

function setup() {
  createCanvas(820,550);
 
  engine = Engine.create();
	world = engine.world;

  mario = createSprite(100,489,50,50);
  mario.addAnimation("running",mario1);
  mario.frameDelay = 5;

  invis = createSprite(400,490,800,50);
  invis.visible = false;

  ground1 = new Box(80,535,800,50);
  ground2 = new Box(410,535,800,50);
  ground3 = new Box(740,535,800,50);

  brick1 = new Brick(445,300,50,50);
  brick2 = new Brick(537,300,50,50);
  brick3 = new Brick(629,300,50,50);

  lucky1 = new Lucky(491,300,50,50);
  lucky2 = new Lucky(583,300,50,50);
 
  pipe1 = new Pipe(200,420,10,10);

  enemy1 = createSprite(700,432,30,30);
  enemy1.addImage(enemyImg);
  enemy1.scale = 0.5
  enemy1.velocityX = -2

  enemy2 = createSprite(700,432,30,30);
  enemy2.addImage(enemyImg);
  enemy2.scale = 0.5
  enemy2.velocityX = -2

  //var render = Render.create({ element: document.body, engine: engine, options: { width: 1000, height: 700, wireframes: false } }); Render.run(render);

  Engine.run(engine)
}

function draw() {
  background("lightblue");

  mario.collide(invis);

  if(keyDown("space")){
     mario.velocityY = -15;
  }
  mario.velocityY = mario.velocityY + 0.8;

  if(keyDown("right_arrow")){
    mario.velocityX = 2
  }
  if(keyDown("left_arrow")){
    mario.velocityX = -2
  }

  if(keyDown("right_arrow") && a===1){
    mario.mirrorX(mario.mirrorX() * -1) 
    mario.velocityX = 3;
    a = 0
  }
   if(keyDown("left_arrow") && a===0){ 
     mario.mirrorX(mario.mirrorX() * -1) 
     mario.velocityX = -3
     a = 1
    }
    else{
     mario.velocityX = 0;
    }

  console.log(enemy2.x,mario.x,enemy1.x);

  if(enemy1.x === 256){
     enemy1.velocityX = 2
  }
  if(enemy1.x === 794){
     enemy1.velocityX = -2
  }

  if(enemy2.x === 256){
    enemy2.velocityX = 2
 }
 if(enemy2.x === 794){
    enemy2.velocityX = -2
 }

 if(mario.x === enemy1.x){
  enemy1.addImage(death);
  enemy1.scale = 0.4 
  enemy1.velocityX = 0
}

if(mario.x === enemy2.x){
  enemy2.addImage(death);
  enemy2.scale = 0.4 
  enemy2.velocityX = 0
}

  ground1.display();
  ground2.display();
  ground3.display();

  brick1.display();
  brick2.display();
  brick3.display();

  lucky1.display();
  lucky2.display();

  pipe1.display();

  drawSprites();
} 
  