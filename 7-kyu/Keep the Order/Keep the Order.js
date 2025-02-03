function keepOrder(ary, val) {
  // Use binary search to find the correct insertion index
  let left = 0,
    right = ary.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid value is less than val, search in right half
    if (ary[mid] < val) left = mid + 1;
    else right = mid; // Otherwise, search in left half
  }

  return left; // The correct insertion index
}

// Test cases
console.log(keepOrder([1, 2, 3, 4, 7], 5)); // 4
console.log(keepOrder([1, 2, 3, 4, 7], 0)); // 0
console.log(keepOrder([1, 1, 2, 2, 2], 2)); // 2

/* 
Explanation:

1. We use **binary search** (`O(log n)`) instead of linear search (`O(n)`) for efficiency.
2. **`left` and `right` pointers**:
   - `left` starts at `0`, `right` at `ary.length`.
   - We calculate `mid = Math.floor((left + right) / 2)`.
3. **Binary search logic**:
   - If `ary[mid] < val`, move `left` to `mid + 1` (search right).
   - Otherwise, move `right` to `mid` (search left).
4. **Final result**: `left` is the index where `val` should be inserted to maintain sorting.

*/
