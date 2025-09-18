function analyzeArray(arr) {
  // Step 1: Count frequencies of each number
  const freq = new Map();
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Step 2: Initialize result components
  const totalElements = arr.length; // (1)
  const uniqueValues = freq.size; // (2)
  let occurOnce = 0; // (3)
  let maxFreq = 0; // (5)
  let maxFreqElements = []; // (4)

  // Step 3: Process frequency map
  for (const [num, count] of freq.entries()) {
    if (count === 1) occurOnce++;
    if (count > maxFreq) {
      maxFreq = count;
      maxFreqElements = [num]; // reset with new max
    } else if (count === maxFreq) {
      maxFreqElements.push(num);
    }
  }

  // Sort max frequency elements if multiple
  maxFreqElements.sort((a, b) => a - b);

  // Step 4: Build and return result structure
  return [totalElements, uniqueValues, occurOnce, [maxFreqElements, maxFreq]];
}

// example test cases
console.log(analyzeArray([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]));
// Output: [10, 7, 5, [[-5], 3]]

console.log(analyzeArray([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]));
// Output: [14, 8, 4, [[2, 4], 3]]

/*
We’ll solve this step by step, aiming for **efficiency (O(n))**, **conciseness**, and **readability**.

### Approach:

1. **Count occurrences** using a `Map` (or object).
2. **Compute metrics**:

   * (1) Total elements → `arr.length`
   * (2) Unique values → `map.size`
   * (3) Values with count = 1
   * (4) Elements with max frequency
   * (5) That max frequency
3. Sort the elements with maximum frequency if more than one.
---

✅ **Time Complexity**:

* Counting: O(n)
* Processing map: O(unique values) ≤ O(n)
* Sorting only max-frequency elements (usually small)

So **overall O(n)**, optimal.
*/
