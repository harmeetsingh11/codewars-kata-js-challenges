function isTriangle(a, b, c) {
  // Step 1: Check the triangle inequality theorem, which states that for any triangle,
  // the sum of the lengths of any two sides must be greater than the length of the third side.

  // For a valid triangle, the following three conditions must be met:

  // 1. a + b > c
  // 2. b + c > a
  // 3. c + a > b
  // Only if all three conditions are satisfied, can the three sides form a valid triangle.

  return a + b > c && b + c > a && c + a > b;
}
