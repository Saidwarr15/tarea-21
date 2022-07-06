const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall, wall2, wall3;

function setup() {
  createCanvas(1518,400);

  engine = Engine.create();
  world = engine.world;
  
  

  var ball_options ={
	isStatic: false,
	restitution: 0.3,
	frictionAir:0,
  density: 1
  }
   
   var ground_options ={
     isStatic: true
   };
  
  ground = Bodies.rectangle(800,390,2000,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(800,280,10,200,ground_options);
  World.add(world,wall);

  wall2= Bodies.rectangle(900,280,10,200,ground_options);
  World.add(world,wall2);

  wall3= Bodies.rectangle(1500,150,10,500,ground_options);
  World.add(world,wall3);

  ball = Bodies.circle(50,10,20,ball_options);
  World.add(world,ball);

 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 
  rect(ground.position.x,ground.position.y,1600,20);
  ellipse(ball.position.x,ball.position.y,20);
  rect(wall.position.x,wall.position.y,10,200);
  rect(wall2.position.x,wall2.position.y,10,200);
  rect(wall3.position.x,wall3.position.y,30,500);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:0});
	
	  }
}
	

