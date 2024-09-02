var isSquare = function (n) {
  // Math.sqrt(n) calculates the square root of `n`.
  // Number.isInteger() checks if the result of the square root is an integer.

  // If the square root of `n` is an integer, then `n` is a perfect square,
  // so the function returns true. Otherwise, it returns false.
  return Number.isInteger(Math.sqrt(n));
};
