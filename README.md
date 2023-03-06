# assignment-2-averyhas
assignment-2-averyhas created by GitHub Classroom

Assignment 2 focused on positioning sprites.


A2Q1 - The first question of assignment 2 was to recreate our gridded initial from the previous assignment, however this time using a function to create each
line of squares.

I created a function titled initial, which held the parameters of my rectangles and used the Y coordinate called
at the top of my code in order to create rows of squares. From this, I copy and pasted the code from my previous sketch--which placed the squares which 
made up my initial--in the draw functino, which essentially "placed" these new purple squares overtop the pink background squares.


A2Q2 - The second question of assignment 2 was to create a custom shape using the beginShape(), endShape(), and vertex() codes. 

I chose to create a heart shape, using 6 different vertices. I did this with the code/coordinates:

  beginShape();
  vertex(120, 80);
  vertex(200, 140);
  vertex(280, 80);
  vertex(350, 180);
  vertex(200, 340);
  vertex(50, 180);
  vertex(120, 80)
  endShape();
  
and proceeded to fill the shape with a red color.
 
 
A2Q3 - The third question of assignment 2 was to duplicate the shape from the previous questions, however this time put it in a function and make it 
possible to reposition the shape.
 
I created a function titled addHeart, which used the "variables" x, y, and size. I put the x and y coordinates inside translate in the function, and size
inside scale in the function. I then placed my code to create the heart inside of the function addHeart.
 
After this, I called the function under the draw function and added my desired parameters:
 
   addHeart(0, 0, 1)
   
   
A2Q4 - The fourth and final question of assignment 2 was to create a personal flag using two pre-existing flags from countries which match my first
 and last initials.
 
For this assignment, I chose Argentina and Honduras.
 
I chose to use muted tones of both blues found in each flags, and created three rectangles at varying sizes using these two colors as well as white.

I then created a function titled addStar, which held the code to generate stars in varying sizes and colors.

I chose to create 5 stars total -- mirroring the number of stars which reside on the Honduras flag. Four of these stars were colored a light gray and
placed in a vertical line along the white rectangle. I then added overlapping larger stars in varying yellow colors on a larger scale on the right side
of the canvas.

(The larger stars were meant to reference the yellow sun in the center of the Argentina flag.)

The stars' parameters were called in the draw function.
 
