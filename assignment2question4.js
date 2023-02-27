// Assignment 2, Question 4 - Avery Haskell
// Argentina & Honduras.

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(220);

  // Background (Rectangles)
  // Colors taken from both Honduras & Argentina flags.
  noStroke();
  fill(125, 188, 228); // Color taken from Honduras flag.
  rect(0, 0, 70, 300);
  fill(255);
  rect(70, 0, 100, 300);
  fill(146, 166, 186); // Color taken from Argentina flag.
  rect(160, 0, 70, 300);
  rect(230, 0, 270, 300);

  // Large star(s)
  stroke(255);
  strokeWeight(5);
  fill("lightgoldenrodyellow");
  addStar(50, -130, 1.5);
  fill("khaki");
  strokeWeight(1);
  addStar(110, -75, 1.2);
  // Small star(s)
  fill("whitesmoke");
  addStar(75, 5, 0.2);
  addStar(75, 75, 0.2);
  addStar(75, 150, 0.2);
  addStar(75, 220, 0.2);
}

// Custom function to add stars where desired + at the size desired.
function addStar(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  beginShape();
  vertex(200, 40);
  vertex(250, 130);
  vertex(350, 130);
  vertex(270, 200);
  vertex(300, 300);
  vertex(200, 250);
  vertex(100, 300);
  vertex(130, 200);
  vertex(50, 130);
  vertex(150, 130);
  vertex(200, 40);
  endShape();
  pop();
}
