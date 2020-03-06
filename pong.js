scoreL = 0;
scoreR = 0;

puckX = 200;
puckY = 200;
puckXSpeed = 2;
puckYSpeed = 2;
puckSize = 15;

paddleWidth = 10;
paddleLength = 60;

paddleLY = 50;
paddleRY = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  rectMode(CENTER);
  fill(255);
  noStroke();
  rect(10, paddleLY, paddleWidth, paddleLength);
  rect(width-10, paddleRY, paddleWidth, paddleLength);
  
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
    paddleRY = paddleRY - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    paddleRY = paddleRY + 5;
  }
  
    if (keyIsDown(87)) {
    paddleLY = paddleLY - 5;
  }
  if (keyIsDown(83)) {
    paddleLY = paddleLY + 5;
  }
  
  // game logic
  if (paddleRY > height - 30) {
    paddleRY = height - 30;
  }
  if (paddleRY < 30) {
    paddleRY = 30;
  }
  
    if (paddleLY > height - 30) {
    paddleLY = height - 30;
  }
  if (paddleLY < 30) {
    paddleLY = 30;
  }
  
  if (puckX < 15 && puckY < paddleLY + paddleLength/2 && puckY > paddleLY - paddleLength/2) {
    puckXSpeed = -puckXSpeed;
  }
  
    if (puckX > width - 15 && puckY < paddleRY + paddleLength/2 && puckY > paddleRY - paddleLength/2) {
    puckXSpeed = -puckXSpeed;
  }
  
}
