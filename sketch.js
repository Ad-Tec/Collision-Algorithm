function setup() {
  createCanvas(400,400);
  movingsprite=createSprite(300, 200, 50, 50);
  movingsprite.shapeColor="Green";
  fixedsprite=createSprite(200, 200, 50, 50);
  fixedsprite.shapeColor="Red";
  wanderingsprite=createSprite(100,200,50,50);
  wanderingsprite.shapeColor="Blue";
  joggingsprite=createSprite(300,200,50,50);
  joggingsprite.shapeColor="Yellow";
}

function draw() {
  background(255,255,255);  
  movingsprite.x=World.mouseX;
  movingsprite.y=World.mouseY;
  drawSprites();

d=collision(movingsprite,wanderingsprite);
if(d===true){
  movingsprite.shapeColor= rgb(random(10,100),random(10,100),random(10,100));
  wanderingsprite.shapeColor= rgb(random(10,100),random(10,100),random(10,100));
  }
  else{
  movingsprite.shapeColor="green";
  wanderingsprite.shapeColor="blue";
  }
}

