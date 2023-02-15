// Assignment 2, Question 2: Avery Haskell

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  
// Fill Color For My Custom Shape
  fill("red")
  stroke(255)
  strokeWeight(5)
  
// Custom Shape ( Heart <3 ) Vertices
  beginShape();
  vertex(120, 80);
  vertex(200, 140);
  vertex(280, 80);
  vertex(350, 180);
  vertex(200, 340);
  vertex(50, 180);
  vertex(120, 80)
  endShape();
  
}
