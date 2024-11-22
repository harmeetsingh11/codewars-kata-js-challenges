function expressionsMatter(a, b, c) {
  // Calculate all possible results using parentheses and operators
  return Math.max(
    a + b + c, // (a + b + c)
    a * b * c, // (a * b * c)
    a * (b + c), // (a * (b + c))
    (a + b) * c // ((a + b) * c)
  );
}
