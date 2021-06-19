const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,backgroundImg;




function preload() {
 
backgroundImg =loadImage("assets/background.gif")

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 

    tower = new Tower(150,350,160,310)
   
    cannon = new Cannon(180,110,110,50,-PI/4);
  
}

function draw() {
  background(189);
 image(backgroundImg,0,0,1200,600)
  

  Engine.update(engine);
  tower.display()
  cannon.display()
  
 
}







