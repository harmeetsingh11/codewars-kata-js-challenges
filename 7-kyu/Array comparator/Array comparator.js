function countCommonElements(arr1, arr2) {
  // Convert second array into a Set for O(1) lookup time
  const set2 = new Set(arr2);

  // Filter elements from arr1 that exist in set2 and count them
  return arr1.filter((el) => set2.has(el)).length;
}

console.log(countCommonElements([1, 2, 3], [2, 3, 4])); // Output: 2
console.log(countCommonElements([5, 6, 7], [8, 9, 10])); // Output: 0

/*
Explanation:
1. **Use a Set for Fast Lookup**:  
   - Convert `arr2` into a `Set`.  
   - Checking existence in a `Set` is O(1), making it much faster than `indexOf` or `includes`, which are O(n) for arrays.

2. **Filter and Count Matching Elements**:  
   - Iterate over `arr1` and check if each element exists in `set2`.  
   - Use `.filter()` to keep only matching elements.  
   - `.length` gives the count of common elements.

Time Complexity:
- **O(n + m)** where `n` is the length of `arr1` and `m` is the length of `arr2`.  
  - Creating a Set takes **O(m)**.  
  - Filtering `arr1` takes **O(n)**.  
  - Overall, it's **O(n + m)**, which is optimal for this problem.
*/
