function collinearity(x1, y1, x2, y2) {
  // If either vector is the zero vector, they are collinear
  if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) return true;

  // Use cross product to determine collinearity
  // Two vectors (x1, y1) and (x2, y2) are collinear if x1*y2 === x2*y1
  return x1 * y2 === x2 * y1;
}

// Test cases
console.log(collinearity(1, 1, 1, 1)); // true
console.log(collinearity(1, 2, 2, 4)); // true
console.log(collinearity(1, 1, 6, 1)); // false
console.log(collinearity(1, 2, -1, -2)); // true
console.log(collinearity(1, 2, 1, -2)); // false
console.log(collinearity(4, 0, 11, 0)); // true
console.log(collinearity(0, 1, 6, 0)); // false
console.log(collinearity(4, 4, 0, 4)); // false
console.log(collinearity(0, 0, 0, 0)); // true
console.log(collinearity(0, 0, 1, 0)); // true
console.log(collinearity(5, 7, 0, 0)); // true
