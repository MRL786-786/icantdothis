const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var paper;


function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	
	bin2 = new Dustbin(440, 490, 20, 120);
	bin3 = new Dustbin(660, 490, 20, 120);
  paper = new Paper(300 ,20, 3,3);
  ground = new Ground(400, 550, 1100, 20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();

  drawSprites();
  keyPressed();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Mater.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}
