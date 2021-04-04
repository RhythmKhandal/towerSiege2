
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine,world;
var gorund;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon;
var rope;

function preload(){
    backgroundImg=loadImage("bg.PNG");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

//making ground
    ground=new Ground(650,590,1300,15);

//making stands
    stand1=new Ground(1100,200,220,10);
    stand2=new Ground(705,400,250,10);

//making boxes for stand1
    box1=new Box(1040,175,30,40);
    box2=new Box(1071,175,30,40);
    box3=new Box(1102,175,30,40);
    box4=new Box(1133,175,30,40);
    box5=new Box(1164,175,30,40);
    box6=new Box(1071,135,30,40);
    box7=new Box(1102,135,30,40);
    box8=new Box(1133,135,30,40);
    box9=new Box(1102,100,30,40);

//making boxes for stand2
    box10=new Box(615,375,30,40); 
    box11=new Box(646,375,30,40);
    box12=new Box(677,375,30,40);
    box13=new Box(708,375,30,40);
    box14=new Box(739,375,30,40);
    box15=new Box(770,375,30,40);
    box16=new Box(646,335,30,40);
    box17=new Box(677,335,30,40);
    box18=new Box(708,335,30,40);
    box19=new Box(739,335,30,40);
    box20=new Box(801,375,30,40); 
    box21=new Box(770,335,30,40);
    box22=new Box(677,300,30,40);
    box23=new Box(708,300,30,40);
    box24=new Box(739,300,30,40);
    box25=new Box(708,260,30,40);
   

    polygon=new Polygon(170,360,30,30);

    rope= new Rope(polygon.body,{x:250,y:300})

    Engine.run(engine);

    var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
    Matter.Render.run(render);
}

function draw() {

    background(backgroundImg);

    textSize(20);
    fill("white");
    text("Drag the Hexagonal stone nad release it ,to launch it towards the blocks.",40,40);

    textSize(20);
    fill("white");
    text("Press SPACE to restart the game.",40,80);


ground.display();
stand1.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
polygon.display();
rope.display();




}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.fly()
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon.body,{x:250,y:300})
		rope= new Rope(polygon.body,{x:250,y:300})
	}
}