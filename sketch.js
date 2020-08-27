
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage


function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	Engine.run(engine);

	stone1 = new Stone (400,300,25);
	ground = new Ground (400,650,800,25);
	tree = new Tree (600,450,400,400);
	mango1 = new Mango(100,400,40,40);
	console.log(mango1)
  
}


function draw() {
 
  background("pink");
  image(boyImage,50,490,200,200);
  stone1.display();
  ground.display();
  tree.display();
  mango1.display();


  
 
}



