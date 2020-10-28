
var wall,thickness;
var bullet,speed,weight;

thickness = random(22,83);

function setup() {
  createCanvas(1600,400);

 wall = createSprite(1200,203,thickness,height/2);

 speed = random(223,321);
 weight = random(30,52);

}

function draw() {
  background(255,255,255); 

  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)

{
  return true;
}
return false;
}


if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 weight * speed * speed/(thickeness * thickeness *thickness);
|
 if (damege > 10)
{
  wall.shapeColor = color(255,0,0);
}

if(damege < 10)
{
  wall.shapeColor = color(0,255,0)
}
}