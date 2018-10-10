Ryan Miskiv

[Live Sketch Link](https://ryanmiskiv.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->
The sketch sets a ball that moves at a certain velocity. It is bounded by the edges of the canvas. When the mouse is pressed, the scale at which the ball intervals is changed based on where the mouse is on the canvas.

A ball object is created, setting the properties of the ball, some of which are just initial values, and some that will stay (3-10). The canvas is created and the background set to white (12-15). The ball is incremented, taking the current value and adding it with the delta which is the slope which is multiplied by the scale value(21-22). The if statements test if the ball is hitting the boundaries of the canvas and reverses the delta values by multiplying them be themselves and negative 1 (25-30). The color is set (32) and the ellipse is drawn with the properties that have been checked and incremented (33). In the mousePressed function (36-39) the scale facter is set based on where the mouse is on the canvas, which takes that data and maps it between .5 and 10, which will make the ball move faster.

The direction of the ball can be changed by altering the delta values or the scale values.


## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
I added a new color element, to add a new element of randomness and fun to the sketch. I created an object with the R,B,G values, then created an if else statement that randomizes the colors if the mouse is pressed (not the function, so it can be held down) each value is randomized. Once it is no longer pressed, the value will be set back to the initial white. I also added a reset button in the top corner that senses if the mouse is within the rectangle and the mouse is pressed while doing so, the location is reset to its initial value and the background is redrawn. I also removed the stroke of the circle and made the color of the background black to give it a more interesting look.
