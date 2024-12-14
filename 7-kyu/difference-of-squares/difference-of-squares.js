function findDifference(n) {
  // Calculate the sum of the first n natural numbers
  const sum = (n * (n + 1)) / 2;

  // Calculate the sum of the squares of the first n natural numbers
  const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  // Return the difference between the square of the sum and the sum of the squares
  return sum ** 2 - sumOfSquares;
}

// Example
console.log(findDifference(10)); // Output: 2640

/* 
Explanation:

Sum of the first n natural numbers:
The formula (n×(n+1))/2 computes the sum of the first n natural numbers efficiently in constant time.

Sum of the squares of the first n natural numbers:
The formula (n×(n+1)×(2n+1))/6 calculates the sum of squares for the first n natural numbers, also in constant time.

Difference Calculation:
The square of the sum (sum^2) and the sum of the squares (sumOfSquares) are used to find the required difference.

This approach avoids the need for loops and ensures O(1) time complexity, making it highly efficient.
*/
