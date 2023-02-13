// Assignment 2, Question 1: Avery Haskell

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
// Fill + Stroke for Background Squares
  
  fill(300,150,200)
  stroke(255)
  
// Custom Function Called x5
  
  initial(0)
  initial(80)
  initial(160)
  initial(240)
  initial(320)
  
// Fill for Initial Squares (Purple)

  fill(150,0,150)
  square(80,0, 80)
  square(160,0,80)
  square(240,0,80)
  square(0,80,80)
  square(320, 80, 80)
  square(0,160,80)
  square(80,160,80) 
  square(160,160,80)
  square(240, 160, 80)
  square(320, 160, 80)
  square(0,240,80)
  square(320, 240, 80)
  square(0,320,80)
  square(320, 320, 80)
  
}

// Custom Function

function initial(y) {

  rect(0, y, 80, 80)
  rect(80, y, 80, 80)
  rect(160, y, 80, 80)
  rect(240, y, 80, 80)
  rect(320, y, 80, 80)
  
}
