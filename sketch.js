const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,groungimage,ground,randx;

var handle;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  handle = new Handle(400,100,400,30);

  bob = new Bob(400,400);
  chain1 = new chain(handle.body,bob.body);
}


function draw() {
  background(80,80,80);
  Engine.update(engine);

  bob.display();
  handle.display();
  chain1.display();

  

if(bob.body.position.x>0){
  bob.body.position.x = bob.body.position.x + 10;
}

if(bob.body.position.x==800 ){
  bob.body.position.x = bob.body.position.x - 700;
}

  drawSprites();
}
