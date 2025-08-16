/**
 * Generate marching bits steps
 * @param {number} n - number of consecutive 1s (1 <= n <= 8)
 * @returns {number[][]} - array of steps, each step is an array of 8 bits
 */
function bitsMarch(n) {
  const steps = [];

  // Start pattern with n consecutive 1s
  let mask = (1 << n) - 1;

  // Total steps = (8 - n + 1)
  for (let shift = 0; shift <= 8 - n; shift++) {
    const current = mask << shift;

    // Convert to 8-bit array
    const bits = Array.from({ length: 8 }, (_, i) => (current >> (7 - i)) & 1);

    steps.push(bits);
  }

  return steps;
}

// Example
console.log(bitsMarch(3));
/* Output:
[
  [0,0,0,0,0,1,1,1],
  [0,0,0,0,1,1,1,0],
  [0,0,0,1,1,1,0,0],
  [0,0,1,1,1,0,0,0],
  [0,1,1,1,0,0,0,0],
  [1,1,1,0,0,0,0,0]
]
*/

/*
## 🔎 Explanation

We need to represent `n` consecutive **1s** moving from **right (LSB side)** to **left (MSB side)** in an **8-bit path**.

* Example: `n = 3`
  Start with `00000111` → shift left each step until the leftmost side.
* Example: `n = 7`
  Start with `01111111` → only 2 steps possible (`8 - n + 1` total steps).

📌 Formula:

* Number of steps = `8 - n + 1`
* At each step `i` (from `0` to `8 - n`), the bits pattern = `(1 << n) - 1` shifted left by `i`.

  * `(1 << n) - 1` → creates `n` consecutive 1s.
  * `<< i` → moves them left step by step.
---

## ⚡ Why this is Optimal?

* Uses **bit operations** (fastest possible for such problems).
* Runs in **O(8)** → constant time, since path length is fixed (8 bits).
* Clean and minimal memory usage.
*/
