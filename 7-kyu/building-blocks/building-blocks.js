class Block {
  // Constructor accepts an array and initializes width, length, and height
  constructor([width, length, height]) {
    this.width = width;
    this.length = length;
    this.height = height;
  }

  // Returns the width of the block
  getWidth() {
    return this.width;
  }

  // Returns the length of the block
  getLength() {
    return this.length;
  }

  // Returns the height of the block
  getHeight() {
    return this.height;
  }

  // Calculates and returns the volume of the block
  getVolume() {
    return this.width * this.length * this.height;
  }

  // Calculates and returns the surface area of the block
  getSurfaceArea() {
    return (
      2 *
      (this.width * this.length +
        this.length * this.height +
        this.height * this.width)
    );
  }
}

// Example usage:
const b = new Block([2, 4, 6]);
console.log(b.getWidth()); // -> 2
console.log(b.getLength()); // -> 4
console.log(b.getHeight()); // -> 6
console.log(b.getVolume()); // -> 48
console.log(b.getSurfaceArea()); // -> 88

/* 
Explanation:

Constructor Initialization:
The constructor takes an array [width, length, height] and destructures it to assign values to the properties width, length, and height.

Getter Methods:
getWidth, getLength, and getHeight simply return the respective dimensions of the block.

Derived Calculations:
getVolume: Computes volume as width×length×height.
getSurfaceArea: Calculates surface area using the formula 2×(width×length+length×height+height×width).
*/
