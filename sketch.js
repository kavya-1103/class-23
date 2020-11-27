const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var box1;
var ground;


function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //by default a world is created
  world=engine.world;
  
  ground= new Ground() ;
  box1=new Box(200,70,70,50);
  box2=new Box(150,10,50,50);
}

function draw() {
  background(0); 
  Engine.update(engine) ;

  box1.display();
  box2.display();
  ground.display();
}