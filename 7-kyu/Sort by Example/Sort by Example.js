/**
 * Sorts arr according to the order given in exampleArr
 * @param {number[]} arr - Array to be sorted
 * @param {number[]} exampleArr - Array defining custom order
 * @returns {number[]} - Sorted array
 */
function customSort(arr, exampleArr) {
  // Step 1: Build a map of element -> order index
  const orderMap = new Map();
  exampleArr.forEach((val, idx) => orderMap.set(val, idx));

  // Step 2: Sort arr based on the index in orderMap
  return arr.sort((a, b) => orderMap.get(a) - orderMap.get(b));
}

// Example usage:
const arr = [1, 3, 4, 4, 4, 4, 5];
const exampleArr = [4, 1, 2, 3, 5];
console.log(customSort(arr, exampleArr));
// Output: [4, 4, 4, 4, 1, 3, 5]

/*
This is a **custom sort problem** where we sort an array based on the order given in an **example array**.

We’ll solve this in an **efficient** way using a **hash map lookup for order** (O(n log n) due to sorting, but lookup is O(1)).

---
### Explanation

1. **Step 1:** Create a map from the `exampleArr` where each element’s index represents its priority/order.

   * Example: `exampleArr = [4,1,2,3,5]` → `{4:0, 1:1, 2:2, 3:3, 5:4}`

2. **Step 2:** Use JavaScript’s `sort()` with a custom comparator that compares elements based on their order in the map.

3. **Step 3:** Return the sorted array.

This way, sorting is efficient (`O(n log n)`) and works for any array size.

---
### Why This Is Efficient?

* **Hash Map Lookup:** Assigns each element a priority in O(m) (`m = length of exampleArr`).
* **Sorting with Custom Order:** Standard `O(n log n)` where `n = length of arr`.
* **Overall Time Complexity:** `O(m + n log n)` which is optimal here.
* **Space Complexity:** `O(m)` for the map.

*/
