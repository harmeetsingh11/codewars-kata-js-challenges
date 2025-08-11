/**
 * Calculates the perimeter of a triangle.
 * @param {Object} triangle - Object with points a, b, c.
 * @param {Object} triangle.a - Point {x, y}.
 * @param {Object} triangle.b - Point {x, y}.
 * @param {Object} triangle.c - Point {x, y}.
 * @returns {number} - Perimeter of the triangle.
 */
function trianglePerimeter({ a, b, c }) {
  // Helper to calculate distance between two points
  const dist = (p1, p2) => Math.hypot(p2.x - p1.x, p2.y - p1.y); // Math.hypot is precise & concise

  // Perimeter = sum of three side lengths
  return dist(a, b) + dist(b, c) + dist(c, a);
}

// Example usage
const triangle = {
  a: { x: 0, y: 0 },
  b: { x: 3, y: 0 },
  c: { x: 0, y: 4 },
};

console.log(trianglePerimeter(triangle)); // 12

/*
We need to compute the **perimeter** of a triangle, given that it’s represented as:

* **Point**: `{ x, y }`
* **Triangle**: `{ a, b, c }` — where `a`, `b`, and `c` are `Point` objects.

The **perimeter** is the sum of all three side lengths.
We’ll use the **Euclidean distance formula**:

$$
\text{distance} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

---

### Explanation

1. **`dist(p1, p2)`**

   * Uses `Math.hypot(dx, dy)` which directly computes $\sqrt{dx^2 + dy^2}$ in a numerically stable way.
   * This is more concise and less error-prone than manually writing `Math.sqrt(...)`.

2. **`trianglePerimeter({ a, b, c })`**

   * Takes advantage of **destructuring** for cleaner code.
   * Computes each side’s length:

     * `a → b`
     * `b → c`
     * `c → a`
   * Returns the sum.

3. **Time Complexity**:

   * **O(1)** — only three distance calculations, no loops.

4. **Space Complexity**:

   * **O(1)** — uses constant extra space.

*/
