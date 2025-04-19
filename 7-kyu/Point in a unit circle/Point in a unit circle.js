function isPointInCircle(x, y) {
  // Using the equation of a circle centered at (0, 0): x^2 + y^2 < r^2
  // For a unit circle, r = 1, so the condition becomes x^2 + y^2 < 1
  return x * x + y * y < 1;
}

/*
### Explanation:
- A point `(x, y)` lies **inside** a circle with radius `r` centered at `(0, 0)` if `x² + y² < r²`.
- For a **unit circle**, `r = 1`, so the inequality becomes `x² + y² < 1`.
- The function returns `true` if the point lies strictly **inside** the circle, and `false` otherwise (including the boundary).
*/
