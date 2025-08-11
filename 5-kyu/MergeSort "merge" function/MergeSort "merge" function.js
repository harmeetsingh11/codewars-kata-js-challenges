/**
 * Merges two sorted arrays into one sorted array.
 * Time Complexity: O(n + m)  (n, m = lengths of arrays)
 * Space Complexity: O(n + m)
 *
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @returns {number[]} Merged sorted array
 */
function mergesorted(arr1, arr2) {
  let i = 0,
    j = 0; // Pointers for arr1 and arr2
  const merged = [];

  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i++]); // Push arr1[i] and move pointer i
    } else {
      merged.push(arr2[j++]); // Push arr2[j] and move pointer j
    }
  }

  // Append remaining elements (only one of these loops will run)
  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);

  return merged;
}

/*
### **Explanation**

**Core Idea**
Since both arrays are already sorted, we can efficiently merge them using **two pointers**:

1. Start from the beginning of both arrays.
2. Compare the current elements.
3. Push the smaller one into the result array and move that pointer forward.
4. Repeat until one array is exhausted.
5. Append the remaining elements of the other array (which are already sorted).

---

**Example Walkthrough**

```javascript
mergesorted([1, 3, 5], [2, 4, 6])
```

| i (arr1) | j (arr2) | merged result       |
| -------- | -------- | ------------------- |
| 1 vs 2   |          | \[1]                |
| 3 vs 2   |          | \[1, 2]             |
| 3 vs 4   |          | \[1, 2, 3]          |
| 5 vs 4   |          | \[1, 2, 3, 4]       |
| 5 vs 6   |          | \[1, 2, 3, 4, 5]    |
| -        | -        | \[1, 2, 3, 4, 5, 6] |

---

This **two-pointer** approach avoids unnecessary sorting (`O(n log n)`) and keeps it at **O(n + m)**, which is optimal for merging sorted arrays.
*/
