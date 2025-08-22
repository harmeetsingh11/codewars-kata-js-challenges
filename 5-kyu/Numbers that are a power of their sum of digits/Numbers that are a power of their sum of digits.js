/**
 * Finds the n-th number in the sequence where a number equals
 * (digit sum of number) ^ k for some k > 1
 *
 * @param {number} n - The index (1-based) of the desired number in the sequence.
 * @returns {number} - The n-th number in sorted order.
 */
function powerDigitSequence(n) {
  const results = new Set();

  // Helper function to compute digit sum
  const digitSum = (num) => [...String(num)].reduce((a, d) => a + +d, 0);

  // Iterate possible digit sums
  for (let s = 2; s <= 180; s++) {
    // 180 is safe upper bound
    let val = s * s; // start with k=2
    while (val < 1e18) {
      // large enough upper bound
      if (digitSum(val) === s) {
        results.add(val);
      }
      val *= s; // increase power
    }
  }

  // Sort results
  const sorted = [...results].sort((a, b) => a - b);

  return sorted[n - 1]; // n-th term (1-based index)
}

// Examples
console.log(powerDigitSequence(1)); // 81
console.log(powerDigitSequence(2)); // 512
console.log(powerDigitSequence(3)); // 2401

/* 
This problem is essentially about finding **numbers that can be expressed as**

$$
x = (digitSum(x))^k
$$

for some integer $k > 1$.
We need the **n-th number** in this sequence.

---

### 🔑 Approach (Efficient & Optimized)

1. **Generate candidate numbers** by raising possible digit sums (`s`) to powers (`k`).

   * The digit sum is at most `9 * digits(x)`. So, we only need reasonable bounds.
   * Example: `s^k` can grow very large, but we only need values that satisfy the digit sum property.

2. **Check validity**:

   * Compute digit sum of candidate number.
   * If it matches the base `s`, keep it.

3. **Collect & sort** the valid numbers, then return the **n-th element**.

---

### ✅ Optimizations

* Limit search range: digit sum ≤ 9 × 20 = 180 is enough (for numbers up to 10^20, already huge).
* Powers grow very fast → don’t need huge exponent loops.
* Use a `Set` to avoid duplicates.

---

### 📝 Explanation with Example

* For `s = 9`, powers are:

  * `9^2 = 81` → digit sum = 9 ✅ valid.
  * `9^3 = 729` → digit sum = 18 ❌ not valid.

* For `s = 8`, powers are:

  * `8^3 = 512` → digit sum = 8 ✅ valid.

* For `s = 7`, powers are:

  * `7^4 = 2401` → digit sum = 7 ✅ valid.

So the sequence begins: **81, 512, 2401, ...**
*/
