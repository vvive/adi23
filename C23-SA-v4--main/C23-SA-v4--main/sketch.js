


//Create namespace for Engine
const Engine=Matter.Engine
//Create namespace for World
const World=Matter.World
//Create namespace for Bodies
const Bodies=Matter.Bodies
//Create namespace for Body
const Body=Matter.Body


function setup() {
  createCanvas(400,400);
//create the engine
AdiEngine=Engine.create();
  //Add world to the engine
  AdiWorld=AdiEngine.world
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground=Bodies.rectangle(200,390,400,20, ground_options);
//add to world
World.add(AdiWorld,ground)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(AdiWorld,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(AdiEngine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,400,20)


  
  
}

