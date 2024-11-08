function sumTriangularNumbers(n) {
  // Return 0 if n is negative
  if (n < 0) return 0;

  // Calculate the sum of the first n triangular numbers
  return (n * (n + 1) * (n + 2)) / 6;
}

/* 
Explanation:

Triangular Number Formula: The nth triangular number is given by T(n) = n * (n + 1) / 2.
The sum of the first n triangular numbers has a formula: Sum = n * (n + 1) * (n + 2) / 6.
This formula directly calculates the sum without needing to loop through all numbers, making it very efficient (O(1) time complexity).

Negative Check: If n is negative, return 0 immediately, as there are no triangular numbers to sum.

Return the Result: For positive n, we calculate and return the result using the formula.
*/
