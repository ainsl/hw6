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
  background(255);
  
  stroke(255, 0, 0);
  line(200, 0, 200, 10);
  line(200, 20, 200, 30);
  line(200, 40, 200, 50);
  line(200, 60, 200, 70);
  line(200, 80, 200, 90);
  line(200, 100, 200, 110);
  line(200, 120, 200, 130);
  line(200, 140, 200, 150);
  line(200, 160, 200, 170);
  line(200, 400, 200, 390);
  line(200, 380, 200, 370);
  line(200, 360, 200, 350);
  line(200, 340, 200, 330);
  line(200, 320, 200, 310);
  line(200, 300, 200, 290);
  line(200, 280, 200, 270);
  line(200, 260, 200, 250);
  line(200, 240, 200, 230);
  noFill();
  ellipse(60, 60, 40);
  ellipse(60, 340, 40);
  ellipse(340, 60, 40);
  ellipse(340, 340, 40);
  
  fill(255);
  stroke(0, 0, 255);
  ellipse(200, 200, 60);
  line(125, 0, 125, 400);
  line(275, 0, 275, 400);
  ellipse(0, 200, 80);
  ellipse(400, 200, 80);
  
  noStroke();
  fill(255, 0, 0);
  ellipse(200, 200, 20);
  
  rectMode(CENTER);
  fill(255, 0, 0);
  noStroke();
  rect(10, paddleL, paddleWidth, paddleLength);
  fill(0, 0, 255);
  rect(width-10, paddleR, paddleWidth, paddleLength);
  
  textFont('Courier');
  fill(0);
  textSize(40);
  text("" + scoreL, 50, 40);
  text("" + scoreR, 325, 40);
  
  fill(0);
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
