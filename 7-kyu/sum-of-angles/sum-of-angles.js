function angle(n) {
  // The formula to find the sum of internal angles in a polygon is (n - 2) * 180
  return (n - 2) * 180;
}

/*
Explanation:

Formula: For a simple polygon with n sides, the sum of the internal angles is given by the formula (n - 2) * 180.
This formula works because any n-sided polygon can be divided into (n - 2) triangles, each having an angle sum of 180 degrees.

Return Result: We directly calculate and return (n - 2) * 180, which is efficient and has a constant time complexity of O(1) since it's a single arithmetic operation.
*/
