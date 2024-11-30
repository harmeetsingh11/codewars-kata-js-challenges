function findQuadrant(x, y) {
  // Check conditions to determine the quadrant
  if (x > 0 && y > 0) return 1; // Both x and y are positive
  if (x < 0 && y > 0) return 2; // x is negative, y is positive
  if (x < 0 && y < 0) return 3; // Both x and y are negative
  return 4; // x is positive, y is negative
}

/* 
Explanation:

Input validation assumptions: Since the problem states that x and y are non-zero integers, there's no need to handle edge cases like zero.

Quadrant determination:
The function checks the sign of x and y to determine which quadrant the point falls into.
It uses simple conditional checks (x > 0, y > 0, etc.) in order of priority.

Efficiency:
Each condition is evaluated in constant time O(1).
*/
