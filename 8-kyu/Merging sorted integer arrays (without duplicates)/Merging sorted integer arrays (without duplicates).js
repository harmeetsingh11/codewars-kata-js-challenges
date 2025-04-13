function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  // Traverse both arrays simultaneously
  while (i < arr1.length && j < arr2.length) {
    const a = arr1[i],
      b = arr2[j];

    // If both values are equal and not already added, push one and move both
    if (a === b) {
      if (result[result.length - 1] !== a) result.push(a);
      i++;
      j++;
    }
    // Push the smaller one if it's not a duplicate
    else if (a < b) {
      if (result[result.length - 1] !== a) result.push(a);
      i++;
    } else {
      if (result[result.length - 1] !== b) result.push(b);
      j++;
    }
  }

  // Process any remaining elements in arr1
  while (i < arr1.length) {
    const val = arr1[i++];
    if (result[result.length - 1] !== val) result.push(val);
  }

  // Process any remaining elements in arr2
  while (j < arr2.length) {
    const val = arr2[j++];
    if (result[result.length - 1] !== val) result.push(val);
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 3, 6, 7]));
// Output: [1, 2, 3, 5, 6, 7]

/*
### Why this is efficient:
- **Time complexity**: `O(n + m)` — each array is traversed only once.
- **Space complexity**: `O(n + m)` — output array size depends on the input arrays.
- It avoids extra operations like sorting or using sets which may be unnecessary here since the inputs are already sorted.
*/
