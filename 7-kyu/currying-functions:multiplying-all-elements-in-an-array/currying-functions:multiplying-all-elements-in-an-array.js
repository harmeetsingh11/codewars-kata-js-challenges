const multiplyAll = (arr) => {
  // Returns a new function that takes a single integer as an argument.
  return (multiplier) => {
    // Creates a new array where each element is multiplied by the given integer.
    return arr.map((num) => num * multiplier);
  };
};

// Example usage:
console.log(multiplyAll([1, 2, 3])(2)); // Output: [2, 4, 6]

/* 
Explanation:

Outer Function (multiplyAll):
Accepts an array arr as an argument.
Returns a new function, creating a closure to retain access to the arr.

Inner Function:
Accepts a single integer multiplier as its argument.
Uses the map method to iterate over each element in the array arr, multiplying each element by multiplier. This ensures immutability of the original array by creating a new array.

Currying:
Currying is the technique of breaking a function with multiple arguments into a sequence of functions, each accepting a single argument. Here, multiplyAll creates a partially applied function.
*/
