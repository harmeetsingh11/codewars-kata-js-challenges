const addArrays = (arr1, arr2) => {
  // Ensure both arrays have the same length
  if (arr1.length !== arr2.length) {
    throw new Error('Arrays must be of equal length');
  }

  // Use map to combine corresponding elements
  return arr1.map((el, i) => el + arr2[i]);
};

// ✅ Test cases
console.log(addArrays([1, 2], [4, 5])); // [5, 7]
console.log(addArrays(['a'], ['b'])); // ["ab"]
console.log(addArrays(['foo', 'bar'], ['baz', 'qux'])); // ["foobaz", "barqux"]

// ❌ Error case
try {
  console.log(addArrays([1, 2, 3], [4, 5])); // Error: Arrays must be of equal length
} catch (error) {
  console.error(error.message);
}

/*
### **Explanation:**
1. **Input Validation:**  
   - The function first checks if both arrays have the same length.
   - If they don't, it throws an `Error` with a meaningful message.

2. **Combining Elements:**  
   - The `map()` method is used to iterate over the first array.
   - Each element of the first array is combined with the corresponding element from the second array using the `+` operator.
     - If both elements are numbers, they are added.
     - If both are strings, they are concatenated.

3. **Efficiency:**  
   - This solution is concise and efficient, using only one iteration (`O(n)` time complexity) and no extra space beyond the result array.
*/
