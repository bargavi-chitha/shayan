
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball,box1,box2,box3;

var engine,world;

function setup() {
	createCanvas(1200, 500);
    

	engine = Engine.create();
	Engine.run(engine);
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,490,1400,20);

	ball= new Paper(200,200,20);
  
	box1=new Dustbin(1000,470,280,20);
}


function draw() {
  background(0);


  box1.display();
  
  ground.display();
  ball.display();
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-50});
	}
}


