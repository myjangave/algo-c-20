var p1,p2;

function setup() {
  createCanvas(800,400);
  p1 = createSprite(400, 200, 50, 50);
  p1.shapeColor = "black";

  p2 = createSprite(100,200,50,50);
  p2.shapeColor = "black";
}

function draw() {
  background(255,255,255);  

  p2.y = World.mouseY;
  p2.x = World.mouseX;

console.log(p2.x-p1.x);

if(p2.x-p1.x<p2.width/2 + p1.width/2 && (p1.x-p2.x < p1.width/2+p2.width/2)
&&(p1.y-p2.y < p1.height/2+p2.height/2)&&(p2.y - p1.y < p2.height/2 + p1.height/2)){
p2.shapeColor = "green";
p1.shapeColor = "red";
}
 else{
   p1.shapeColor = "black";
   p2.shapeColor = "black"

 } 


  drawSprites();
}
