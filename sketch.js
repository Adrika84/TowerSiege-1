
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var polygon, polygonImg;

function preload(){
	polygonImg = loadImage("polygon.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world; 

	base1 = new base(600, 500, 300, 20);
	base2 = new base(983, 250, 230, 20);

	block1 = new block(500, 460)
	block2 = new block(550, 460)
	block3 = new block(600, 460)
	block4 = new block(650, 460)
	block5 = new block(700, 460)

	blocka = new block(525, 400);
	blockb = new block(575, 400);
	blockc = new block(625, 400);
	blockd = new block(675, 400);

	block6 = new block(550, 340);
	block7 = new block(600, 340);
	block8 = new block(650, 340);

	blocke = new block(575, 280);
	blockf = new block(625, 280);

	block9 = new block(600, 220);

	blockg = new block(930, 210);
	blockh = new block(980, 210);
	blocki = new block(1030, 210);

	block10 = new block(955, 150);
	block11 = new block(1005, 150);

	blockj = new block(980, 90);

	polygon = Bodies.circle(50, 200, 20);
	World.add(world, polygon);

	slingShot = new SlingShot(this.polygon, {x: 100, y: 200});
}

function draw(){
    background("brown");
    Engine.update(engine);

	textSize(25);
	text("Draw the hexagonal stone and release it to launch it towards the blocks.", 250, 30);

    strokeWeight(2);

    base1.display();
	base2.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();

	blocka.display();
	blockb.display();
	blockc.display();
	blockd.display();

	block6.display();
	block7.display();
	block8.display();

	blocke.display();
	blockf.display();

	block9.display();

	blockg.display();
	blockh.display();
	blocki.display();

	block10.display();
	block11.display();

	blockj.display();

	slingShot.display();

	imageMode(CENTER);
	image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged() {
	Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	slingShot.fly();
}