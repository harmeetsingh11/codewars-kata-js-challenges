class Cube {
  // Constructor handles no arguments or a single integer
  constructor(side = 0) {
    this.setSide(side); // Use the setSide method to ensure value is positive
  }

  // Getter method to return the side value
  getSide() {
    return this._side; // Return the private property
  }

  // Setter method to update the side value, ensuring it's always positive
  setSide(value) {
    this._side = Math.abs(value); // Convert value to positive before assigning
  }
}

const cube1 = new Cube(); // No arguments, side = 0
console.log(cube1.getSide()); // Output: 0

const cube2 = new Cube(-5); // Negative argument, side = 5
console.log(cube2.getSide()); // Output: 5

cube2.setSide(-10); // Setting a negative value
console.log(cube2.getSide()); // Output: 10

/* 
Explanation:

Constructor:
Initializes the cube by calling the setSide method to ensure proper handling of negative values.

Getter and Setter as Methods:
getSide() returns the value of _side.
setSide(value) updates _side, converting the input to its absolute value.
*/
