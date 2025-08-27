/**
 * Find the smallest product of numbers in nested arrays
 * @param {number[][]} arr - Array of integer arrays
 * @returns {number} - Smallest product
 */
function smallestProduct(arr) {
  // Initialize with +Infinity to compare later
  let minProduct = Infinity;

  for (const subArr of arr) {
    // Multiply numbers in sub-array
    const product = subArr.reduce((acc, num) => acc * num, 1);
    // Update minimum if smaller
    minProduct = Math.min(minProduct, product);
  }

  return minProduct;
}

// Example usage
const input = [[1, 5], [2], [-1, -3]];

console.log(smallestProduct(input)); // Output: 2

/*
Explanation: 

We need to multiply all numbers in each subarray, then find the **smallest product** among them.

### 🔎 Step-by-step explanation

1. We are given a **non-empty array** of **non-empty integer arrays**.
2. For each nested array:

   * Multiply all its numbers.
   * Store the product.
3. Return the **smallest product** among all.
4. Use `Math.min` for efficiency.

* Time complexity: **O(N \* M)**, where `N` is number of subarrays and `M` is average size of each subarray.
* Space complexity: **O(1)** (we only track the current min).
----

### ✅ Why this works best

* Uses **reduce** for concise multiplication.
* No extra arrays/lists created → **memory efficient**.
* Single pass to calculate & track minimum → **optimal runtime**.
*/
