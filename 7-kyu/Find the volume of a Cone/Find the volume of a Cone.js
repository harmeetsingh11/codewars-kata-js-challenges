/**
 * Calculate the volume of a cone given radius and height.
 * Formula: V = (1/3) * π * r^2 * h
 * @param {number} r - Radius of the cone
 * @param {number} h - Height of the cone
 * @returns {number} - Volume of the cone (rounded down to integer)
 */
function volume(r, h) {
  // Compute the volume using the formula
  const v = (Math.PI * r * r * h) / 3;

  // Round down to the nearest integer
  return Math.floor(v);
}

// Example usage:
console.log(volume(3, 5)); // Output: 47
console.log(volume(7, 10)); // Output: 513

/*
Let’s solve this step by step.

### Formula for Volume of a Cone

$$
V = \frac{1}{3} \pi r^2 h
$$

where

* $r$ = radius
* $h$ = height

We also need to **round down** to an integer, which means using `Math.floor()` in JavaScript.
---

### Explanation:

1. **Formula applied:** `(π * r² * h) / 3` directly calculates the cone’s volume.
2. **Rounding down:** `Math.floor()` ensures we always get the largest integer ≤ the actual volume.
3. **Efficiency:**

   * Time complexity: **O(1)** (direct computation, no loops).
   * Space complexity: **O(1)** (uses a constant amount of memory).
   * As optimized as it can be.

*/
