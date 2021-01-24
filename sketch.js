
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var mango1, mango2, mango3, mango4, mango5;
var stone, tree, boy;
 

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here.
  tree = new Tree(250, 50, 50, 100);
  mango1 = new Mango(300, 300, 10);
  mango2 = new Mango(475, 300, 10);
  mango3 = new Mango(650, 300, 10);
  mango4 = new Mango(400, 125, 10);
  mango5 = new Mango(550, 125, 10);
  stone = new Stone(125, 100, 10);
  
  boy = loadImage("assets/boy.png");
  
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  image(boy, 100, 500, 200, 200);
  stone.display();

  
  drawSprites();
 
}

function detectCollision(stone, mango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyposition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
  }
}



