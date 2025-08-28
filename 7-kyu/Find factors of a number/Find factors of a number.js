function factors(n) {
  // Handle invalid inputs
  if (!Number.isInteger(n) || n < 1) return -1;

  const result = [];
  const sqrt = Math.floor(Math.sqrt(n));

  // Find factors in pairs
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      result.push(i); // smaller factor
      if (i !== n / i) {
        // avoid duplicate for perfect square
        result.push(n / i); // corresponding larger factor
      }
    }
  }

  // Sort factors in descending order
  return result.sort((a, b) => b - a);
}

// Example usage:
console.log(factors(54)); // [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(1)); // [1]
console.log(factors(0)); // -1
console.log(factors(-5)); // -1

/*
We need to find factors of a number efficiently, return them in descending order, and handle invalid inputs.

The most **optimized approach** is to only loop till √n instead of n, because factors come in pairs (e.g., for 54 → (1,54), (2,27), (3,18), (6,9)). This reduces time complexity from **O(n)** to **O(√n)**.
---

## Explanation

1. **Check validity**: If input is not an integer or `< 1`, return `-1`.
2. **Loop only till √n**:

   * If `i` divides `n`, push both `i` and `n/i` into factors.
   * Avoid duplicates when `i == n/i` (perfect squares).
3. **Sort descending**: Return the array in descending order.

Time complexity: **O(√n)**
Space complexity: **O(factors count)**
*/
