/**
 * Returns every nth element from an array, optionally starting at a given index.
 * @param {Array} arr - The input array.
 * @param {number} [interval=1] - Step size between elements (default 1).
 * @param {number} [startIndex=0] - Starting index in the array (default 0).
 * @returns {Array} - New array containing every nth element.
 */
function every(arr, interval = 1, startIndex = 0) {
  // Validate if array is empty
  if (!arr.length) return [];

  const result = [];
  // Loop through array starting at `startIndex`, incrementing by `interval`
  for (let i = startIndex; i < arr.length; i += interval) {
    result.push(arr[i]);
  }
  return result;
}

console.log(every([0, 1, 2, 3, 4])); // [0,1,2,3,4]
console.log(every([0, 1, 2, 3, 4], 1)); // [0,1,2,3,4]
console.log(every([0, 1, 2, 3, 4], 2)); // [0,2,4]
console.log(every([0, 1, 2, 3, 4], 3)); // [0,3]
console.log(every([0, 1, 2, 3, 4], 3, 1)); // [1,4]

/*
### **Explanation**

* **Default parameters**:

  * `interval` defaults to `1` (returns all elements if not specified).
  * `startIndex` defaults to `0` (start from first element if not specified).
* **Time complexity**: **O(n / interval)** — the loop skips unnecessary elements, so it's efficient.
* **Space complexity**: **O(k)**, where `k` is the number of returned elements.
* Works even if `interval` > array length (returns at most one element).
* Handles edge cases: empty array, `interval = 1`, or `startIndex` at the end.
*/
