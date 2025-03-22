function mashArrays(arr1, arr2) {
  // Use flatMap to interleave the two arrays efficiently
  return arr1.flatMap((val, index) => [val, arr2[index]]);
}

const result = mashArrays([1, 2, 3], ['a', 'b', 'c']);
console.log(result); // [1, 'a', 2, 'b', 3, 'c']

/*
### **Explanation:**
1. **`flatMap()`**: 
   - This method combines `map()` and `flat()` in one step.
   - It maps over `arr1` and returns an array containing the current value from `arr1` and the corresponding value from `arr2` at the same index.
   - `flatMap()` automatically flattens the nested arrays into a single-level array.

2. **Efficiency:**
   - This solution is efficient with `O(n)` time complexity, where `n` is the length of the arrays.
   - It is concise and readable, making use of modern JavaScript methods.
*/
