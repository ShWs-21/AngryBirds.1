
  const  Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;


   var engine,world;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground();
  ball= new Ball();
}

function draw()
{
  background("white");
  Engine.update(engine);
  ground.display();
  ball.display();
}