function maxAndMin(arr1, arr2) {
  // Find minimum and maximum values in both arrays
  const min1 = Math.min(...arr1);
  const max1 = Math.max(...arr1);
  const min2 = Math.min(...arr2);
  const max2 = Math.max(...arr2);

  // For maximum absolute difference:
  // Either (max2 - min1) or (max1 - min2), whichever is larger
  const maxDiff = Math.max(Math.abs(max2 - min1), Math.abs(max1 - min2));

  // For minimum absolute difference:
  // Sort both arrays to find the closest pair efficiently
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  let minDiff = Infinity;

  // Use two pointers to find the smallest absolute difference
  while (i < arr1.length && j < arr2.length) {
    minDiff = Math.min(minDiff, Math.abs(arr1[i] - arr2[j]));
    // Move the pointer which points to the smaller value
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return [maxDiff, minDiff];
}

console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]));
// Output: [17,2]

/*
### **Quick Explanation:**

- **`Math.min` / `Math.max`** → to find extremities in O(n) time.
- **`sort` + two pointers** → to find the closest pair in O(n + m) time.
- **Efficient overall** → avoids checking every possible pair (which would be O(n * m) and slow).
*/
