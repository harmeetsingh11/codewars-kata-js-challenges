/**
 * Calculates the dot product of two 3D vectors.
 * @param {Object} a - Vector a with x, y, z properties
 * @param {Object} b - Vector b with x, y, z properties
 * @returns {number} - Dot product rounded to 6 decimal places
 */
function dotProduct(a, b) {
  // Apply dot product formula
  const result = a.x * b.x + a.y * b.y + a.z * b.z;

  // Round to 6 decimal places and return as number
  return Number(result.toFixed(6));
}

// Example usage:
const v1 = { x: 1.1234567, y: 2, z: 3 };
const v2 = { x: 4, y: 5.9876543, z: 6 };
console.log(dotProduct(v1, v2)); // 38.184741

/*
Explanation:

We need to calculate the **dot product** of two 3D vectors `a` and `b`.

### 📘 Quick Refresher

* A **vector** in 3D has components:
  `a = (ax, ay, az)`
  `b = (bx, by, bz)`

* The **dot product** formula:

  ```
  a · b = ax * bx + ay * by + az * bz
  ```

* The result is a **scalar** (a single number, not a vector).

* We also need to round the result to **6 decimal places**.
---

### ⚡ Why is this efficient?

1. **O(1) Time Complexity** → only a few multiplications and additions.
2. **O(1) Space Complexity** → no extra storage needed.
3. Uses **`toFixed(6)`** for precision control (then converted back to `Number`).
4. Concise, clear, and optimized for readability & performance.

*/
