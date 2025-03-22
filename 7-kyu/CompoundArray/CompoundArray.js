function compoundArray(arr1, arr2) {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    // Add element from arr1 if it exists
    if (i < arr1.length) result.push(arr1[i]);
    // Add element from arr2 if it exists
    if (i < arr2.length) result.push(arr2[i]);
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [9, 8, 7, 6];
console.log(compoundArray(arr1, arr2)); // Output: [1, 9, 2, 8, 3, 7, 4, 6, 5, 6]

/*
### **Explanation:**
1. **Initialization:**
   - `result`: an empty array to hold the final shuffled result.
   - `maxLength`: the length of the longer array to ensure we iterate through all elements of both arrays.

2. **Iteration:**
   - The `for` loop runs from `0` to `maxLength - 1`.
   - On each iteration:
     - If `i` is within the bounds of `arr1`, add the `i-th` element of `arr1` to `result`.
     - If `i` is within the bounds of `arr2`, add the `i-th` element of `arr2` to `result`.

3. **Efficiency:**
   - The solution runs in **O(n + m)** time complexity, where `n` and `m` are the lengths of the two arrays.
   - It handles arrays of different lengths without any issues, adding remaining elements of the longer array at the end.
*/
