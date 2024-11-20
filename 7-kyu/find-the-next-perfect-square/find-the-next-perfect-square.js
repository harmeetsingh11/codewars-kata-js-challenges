function findNextSquare(sq) {
  // Calculate the square root of the given number
  const sqrt = Math.sqrt(sq);

  // Check if the number is a perfect square (its square root is an integer)
  if (Number.isInteger(sqrt)) {
    // Return the next perfect square
    return Math.pow(sqrt + 1, 2);
  }

  // If the number is not a perfect square, return -1
  return -1;
}

/* 
Explanation:
Math.sqrt(sq): Computes the square root of the input number sq.
Number.isInteger(sqrt): Checks if the square root is an integer, confirming sq is a perfect square.
Math.pow(sqrt + 1, 2): Calculates the next perfect square by squaring the next integer after the square root.
Return -1: If the input is not a perfect square, the function returns -1.
*/
