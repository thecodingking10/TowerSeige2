
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    block1 = new Block(300,275,30,40)
    block2 = new Block(331,275,30,40)
    block3 = new Block(362,275,30,40)
    block4 = new Block(393,275,30,40)
    block5 = new Block(424,275,30,40)
    block6 = new Block(455,275,30,40)
    block7 = new Block(486,275,30,40)
    
    block8 = new Block(330,235,30,40)
    block9 = new Block(362,235,30,40)
    block10 = new Block(393,235,30,40)
    block11= new Block(424,235,30,40)
    block12 = new Block(455,235,30,40)

    block13 = new Block(362,195,30,40)
    block14 = new Block(393,195,30,40)
    block15 = new Block(424,195,30,40)

    block16 = new Block(393,155,30,40)

    block17 = new Block(640,175,30,40)
    block18 = new Block(671,175,30,40)
    block19 = new Block(702,175,30,40)
    block20 = new Block(733,175,30,40)
    block21 = new Block(764,175,30,40)

    block22 = new Block(671,145,30,40)
    block23 = new Block(702,145,30,40)
    block24 = new Block(733,145,30,40)

    block25 = new Block(702,115,30,40)

    ball = Bodies.circle(50,200,20)
    World.add(world,ball)

    slingshot = new Slingshot(this.ball, {x:100, y:200})
    



    
}

function draw(){
    background("white")
    ground.display();
    stand1.display();
    stand2.display();
    fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("red")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("green")
    block13.display();
    block14.display();
    block15.display();
    fill("orange");
    block16.display();
    fill("orange");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("green");
    block22.display();
    block23.display();
    block24.display();
    fill("red");
    block25.display();

    slingshot.display();

    imageMode(CENTER)
    image(polygonImg, ball.position.x, ball.position.y, 40,40)

    drawSprites();
    }

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX , y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}