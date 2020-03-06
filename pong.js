scoreL = 0;
scoreR = 0;

puckX = 200;
puckY = 200;
puckXSpeed = 2;
puckYSpeed = 2;
puckSize = 15;

paddleWidth = 10;
paddleLength = 60;

paddleL = 50;
paddleR = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  rectMode(CENTER);
  fill(255);
  noStroke();
  rect(10, paddleL, paddleWidth, paddleLength);
  rect(width-10, paddleR, paddleWidth, paddleLength);
  
  textFont('Courier');
  fill(255);
  textSize(40);
  text("" + scoreL, 50, 40);
  text("" + scoreR, 325, 40);
  
  ellipse(puckX, puckY, puckSize);
  puckX = puckX + puckXSpeed;
  puckY = puckY + puckYSpeed;
  
  //puck movement
  if (puckX > width + 15) {
   puckX = width/2;
   puckY = height/2;
   puckXSpeed = -puckXSpeed; 
   scoreL += 1;
  }
  
  if (puckX < -15) {
   puckX = width/2;
   puckY = height/2;
   puckXSpeed = -puckXSpeed; 
   scoreR += 1;
  }
  
  if (puckY > height) {
   puckYSpeed = -puckYSpeed; 
  }
  
  if (puckY < 0) {
   puckYSpeed = -puckYSpeed; 
  }
    
  
  // user input
  if (keyIsDown(UP_ARROW)) {
    paddleR = paddleR - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    paddleR = paddleR + 5;
  }
  
    if (keyIsDown(87)) {
    paddleL = paddleL - 5;
  }
  if (keyIsDown(83)) {
    paddleL = paddleL + 5;
  }
  
  // game logic
  if (paddleR > height - 30) {
    paddleR = height - 30;
  }
  if (paddleR < 30) {
    paddleR = 30;
  }
  
    if (paddleL > height - 30) {
    paddleL = height - 30;
  }
  if (paddleL < 30) {
    paddleL = 30;
  }
  
  if (puckX < 15 && puckY < paddleL + paddleLength/2 && puckY > paddleL - paddleLength/2) {
    puckXSpeed = -puckXSpeed;
  }
  
    if (puckX > width - 15 && puckY < paddleR + paddleLength/2 && puckY > paddleR - paddleLength/2) {
    puckXSpeed = -puckXSpeed;
  }
  
}
