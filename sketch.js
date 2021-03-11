const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var slide1;
var slide2;
var slide3;
var wall1;
var wall2;
var wall3;
var wall4;
var car1;
var car2;
var car3;
var car4;
function preload() {
   
} 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    slide1 = createSprite(200,100,400,10);
    slide2 = createSprite(200,200,400,10);
    slide3 = createSprite(200,300,400,10);
    wall1 = createSprite(380,50,10,40);
    wall2 = createSprite(380,150,10,40);
    wall3 = createSprite(380,250,10,40);
    wall4 = createSprite(380,350,10,40);
    car1 = createSprite(20,50,10,10);
    car2 = createSprite(20,150,10,10);
    car3 = createSprite(20,250,10,10);
    car4 = createSprite(20,350,10,10);
  }
function draw(){
    background("black");
    Engine.update(engine);
    car1.velocityX = 2;
    car2.velocityX = 2;
    car3.velocityX = 2;
    car4.velocityX = 2;
    if(car1.isTouching(wall1)){
        car1.velocityX = 0;
        car1.shapeColor = "white";
    }
    if(car2.isTouching(wall2)){
        car2.velocityX = 0;
        car2.shapeColor = "yellow";
    }
    if(car3.isTouching(wall3)){
        car3.velocityX = 0;
        car3.shapeColor = "red";
    }
    if(car4.isTouching(wall4)){
        car4.velocityX = 0;
        car4.shapeColor = "green";
    }
    drawSprites();
}