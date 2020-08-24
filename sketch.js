
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	stone1 = new Stone (400,300,25);
	ground = new Ground (50,650,1600,25);
  
}


function draw() {
 
  background("pink");

  stone1.display();
  ground.display();
  
  
 
}



