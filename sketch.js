const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;


//function preload()
//{
//	paper_img = loadImage("paper.png");
//	dustbin_img = loadImage("dustbingreen.png");
//}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	groundSprite =createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor = color(255)
	
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true})
	World.add(world,ground);

	//Create the Bodies Here.
	paperObject = new Paper(200,450,40);
 
	dustbinObj = new Dustbin(1200,650);
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  dustbinObj.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}



