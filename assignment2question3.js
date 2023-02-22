// Assignment 2, Question 3: Avery Haskell

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  
// Fill Color For My Custom Shape
  fill("red")
  stroke(255)
  strokeWeight(5)
  
  addHeart(0, 0, 1)

}

// Custom Shape ( Heart <3 ) Vertices + Custom Function 'addHeart'
function addHeart(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  beginShape();
  vertex(120, 80);
  vertex(200, 160);
  vertex(280, 80);
  vertex(340, 160);
  vertex(200, 320);
  vertex(40, 160);
  vertex(120, 80)
  endShape();
  pop(); 
  
}
