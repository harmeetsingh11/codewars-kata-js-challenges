/**
 * Finds the maximum product by selecting one number from each sub-array.
 * @param {number[][]} arr - Multi-dimensional array of integers.
 * @returns {number} Maximum product possible.
 */
function solve(arr) {
  // Initialize with the first sub-array: max and min are just the max/min elements
  let maxProd = Math.max(...arr[0]);
  let minProd = Math.min(...arr[0]);

  // Process each subsequent sub-array
  for (let i = 1; i < arr.length; i++) {
    let currMax = -Infinity;
    let currMin = Infinity;

    for (let num of arr[i]) {
      // Possible products with current number
      let option1 = num * maxProd;
      let option2 = num * minProd;

      // Update current min and max
      currMax = Math.max(currMax, option1, option2);
      currMin = Math.min(currMin, option1, option2);
    }

    // Update global trackers
    maxProd = currMax;
    minProd = currMin;
  }

  return maxProd;
}

/*
This is a **dynamic programming style** problem where at each sub-array we must track both the **maximum** and **minimum** product so far, since multiplying negatives can flip the result.
---

### 🔎 Explanation:

* At each step, we need both **max** and **min** products because:

  * A large positive times positive stays positive.
  * A large negative times negative can flip into an even larger positive.
* Start with the first sub-array:

  * `maxProd` = largest element
  * `minProd` = smallest element
* For each subsequent sub-array:

  * Multiply each element with both `maxProd` and `minProd`.
  * Update current `max` and `min`.
* At the end, `maxProd` holds the **maximum possible product**.

---

### ✅ Example Dry Run:

Input: `[[1, -1], [2, 3], [10, -100]]`

1. Start:
   `maxProd = 1, minProd = -1`

2. Second array `[2, 3]`:
   Options with `2`: `2*1=2`, `2*(-1)=-2`
   Options with `3`: `3*1=3`, `3*(-1)=-3`
   → `currMax=3`, `currMin=-3`
   Update: `maxProd=3, minProd=-3`

3. Third array `[10, -100]`:
   With `10`: `10*3=30`, `10*(-3)=-30`
   With `-100`: `-100*3=-300`, `-100*(-3)=300`
   → `currMax=300`, `currMin=-300`
   Final: `maxProd=300`

✅ Answer = `300`

---

This runs in **O(n \* m)** where `n = number of sub-arrays` and `m = avg size of each sub-array`, which is optimal since we must look at every number at least once.
*/
