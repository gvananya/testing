function setup() {
  createCanvas(400, 400);

  //RGB values
  background(24, 0, 43);

  //this is the brush
  strokeWeight(5);
  //colour of the brush
  stroke(255, 255, 0);
}
function draw() {
  let posY1 = mouseY;
  let posX1 = mouseX;
  point(posX1, posY1);
  point(posX1 + 30, posY1 + 30);
  point(posX1+40,posY1)
  
  
  
}
