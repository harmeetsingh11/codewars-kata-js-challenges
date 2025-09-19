/**
 * Returns the maximum height of a square pyramid
 * that can be built using n cubes.
 * @param {number} n - Number of cubes
 * @returns {number} - Max complete layers possible
 */
function pyramidHeight(n) {
  let low = 1,
    high = n,
    result = 0;

  // Binary search on possible height
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Total cubes needed for height = mid
    const cubesNeeded = (mid * (mid + 1) * (2 * mid + 1)) / 6;

    if (cubesNeeded <= n) {
      result = mid; // valid height, try higher
      low = mid + 1;
    } else {
      high = mid - 1; // too many cubes, try lower
    }
  }

  return result;
}

// Examples
console.log(pyramidHeight(4)); // 1
console.log(pyramidHeight(5)); // 2
console.log(pyramidHeight(13)); // 2
console.log(pyramidHeight(14)); // 3

/*
### Key Insight:

* A square pyramid with height `h` requires cubes equal to the **pyramidal number**:

  $$
  S(h) = \frac{h(h+1)(2h+1)}{6}
  $$

* Given `n`, we need the largest `h` such that:

  $$
  S(h) \leq n
  $$

* Instead of simulating layer by layer, we use **binary search** to quickly find the maximum height, because `S(h)` grows in cubic order.
---

### Explanation:

1. **Formula**: Each height `h` requires sum of squares `1² + 2² + ... + h²`.
2. **Binary Search**:

   * Start with possible range `[1, n]`.
   * Compute cubes needed for `mid`.
   * If it fits (`≤ n`), move right (`low = mid+1`).
   * Else, move left (`high = mid-1`).
3. **Result** is the largest height that fits within `n` cubes.

---

👉 This runs in **O(log n)** time instead of O(√n) simulation, making it optimal.
*/
