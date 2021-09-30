let color = 0;
let speed = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  fill(0);
  push();
  translate(0, 600);
  rotate(speed);
  ellipse(width/2, 0, 80, 80);
  pop();

  //black handle rectangle
  push();
  translate(width/2, 250);
  rotate(speed);
  rect(0, 200, 80, 300);
  pop();

  fill(255); //white
  //bottom white circle

  push();
  translate(width/2+40, 300);
  rotate(speed);
  ellipse(-40, 300, 40, 40);
  pop();

  //white thin handle part
  push();
  translate(width/2, 155);
  rotate(speed);
  rect(0, 300, 5, 270);
  pop();

  //wrench head circle
  fill(0);
  push();
  translate(width/2-50, 250);
  rotate(speed);
  ellipse(50, 0, 150, 150);
  pop();

  //angled wrench head
  fill(255);
  push();
  translate(width / 2-20, height / 2 - 180);
  rotate(151);
  rect(0, 0, 60, 110, 10);
  pop();
  speed = speed+0.25;
}




