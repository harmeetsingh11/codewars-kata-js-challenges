function anyArrows(arrows) {
  // Use the `some` method to check if there is any arrow without the `damaged` property
  return arrows.some((arrow) => !arrow.damaged);
}

// Example
console.log(
  anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
); // true
console.log(anyArrows([{ damaged: true }, { range: 15, damaged: true }])); // false

/* 
Explanation:

Understanding the problem:
Each arrow is represented as an object.
Arrows without the damaged property are considered "good" arrows.
The goal is to check if there’s at least one good arrow.

Efficient approach:
The Array.prototype.some method is perfect for this use case:
It iterates over the array.
Returns true as soon as a condition is met.
Stops further iterations once a match is found, making it efficient.

Logic in the function:
The callback for some checks if the damaged property is absent or falsy (!arrow.damaged).
If this condition is true for any arrow, some immediately returns true.
If no such arrow exists, some returns false.
*/
