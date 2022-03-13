* Turtle Graphics External Domain Language
This is the parser to parse a external domain language for a toy graphics
system.

The domain language looks as follows:

#+BEGIN_SRC
P 2 # select pen 2
D   # pen down
W 2 # draw west 2cm
N 1 # then north 1cm
E 2 # then east 2cm
S 1 # then back south 1cm
U   # pen up
#+END_SRC

** Usage
*** From file
#+BEGIN_SRC sh
  node parser.js input.js
#+END_SRC


* Turtle Graphics Internal Domain Language
This is a node.js internal domain language for a toy graphics system. It can
draw with different pens in four directions.

** Usage
Create a pen and describe a drawing like this:
#+BEGIN_SRC javascript
  const createPen = require('./index');
  const { draw, move } = createPen(2);

  draw(() => {
    move("west", 2);
    move("north", 1);
    move("east", 2);
    move("south", 1);
  });
#+END_SRC
