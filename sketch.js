const Engine=Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;
var engine,world;
var g,b1,b2;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
g=new Ground(200,380,400,20);
b1=new box(200,300,50,50);
b2=new box(240,100,50,100);
}

function draw() {
  background(0); 
  Engine.update(engine);
  g.display();
  b1.display();
  b2.display();
}