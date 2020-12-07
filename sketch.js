//const Body=Matter.Body;
const Constraint=Matter.Constraint;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var box1,box2,box3,box4,box5,box6,box7,box8;
var rope1,ball1,engine,world;




function setup(){
    createCanvas(1000,700);
    engine=Engine.create();
    world=engine.world;
    ground1=new ground(600,600,1200,20);
    box1=new box(700,650,50,50);
    box2=new box(750,650,50,50);
    box3= new box(800,650,50,50);
    box4=new box(850,650,50,50);
    box5=new box (725,630,50,50);
    box6=new box(775,630,50,50);
    box7=new box(825,630,50,50);
    box8=new box(775,400,50,50)
    ball1=new ball(250,400,40,40);
    rope1=new rope(ball.body,{x:500,y:50})
    //engine.run();
}

function draw(){
    background("white")
    Engine.update(engine);
    //display(){

        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        ball1.display();
        rope1.display();
        ground1.display();
    }

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

