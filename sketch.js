const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  //physics properties for ball
  var body_options = {
    restitution: 1.0,
    density:1.0,
    friction:0.8,
  }
 //creating ball body
 ball= Bodies.rectangle(200,100,20,20,body_options);
 //adding ball to the world
  World.add(world,ball);
  
  //physics properties for ground
  var ground_options={
    isStatic: true
  }
  //ground body
  ground = Bodies.rectangle(200,390,200,20,ground_options);
 //adding ground to the world
  World.add(world,ground);
  
  
  /*console.log(object)
  console.log(object.position.x);
  console.log(object.position.y);
  console.log(ball.position.y)*/
}

function draw() {
background(0);  
//starting the physics engine
Engine.update(engine);
rectMode(CENTER)
fill(255)
rect(ground.position.x, ground.position.y,400,20);
rect(ball.position.x,ball.position.y,50,50);
}

