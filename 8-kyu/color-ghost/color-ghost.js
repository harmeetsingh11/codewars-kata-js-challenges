class Ghost {
  constructor() {
    // Assign a random color from the predefined list to the `color` attribute
    this.color = Ghost.colors[Math.floor(Math.random() * Ghost.colors.length)];
  }

  // Static property to hold possible colors
  static colors = ['white', 'yellow', 'purple', 'red'];
}

// Example usage:
const ghost = new Ghost();
console.log(ghost.color); // Outputs: "white", "yellow", "purple", or "red"

/* 
Explanation:

Random Color Assignment:
The Math.random() function generates a random decimal between 0 and 1.
Multiplying this by the length of the colors array gives a range from 0 to colors.length - 1.
Math.floor() ensures that the result is an integer index, which is used to access a random color from the array.

Static Property:
The colors array is defined as a static property of the Ghost class. This ensures the list of possible colors is shared across all instances and doesn't need to be recreated for each object.
*/
