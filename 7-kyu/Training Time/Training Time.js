const shuffleIt = (arr, ...swaps) => {
  // Loop through each pair of indices
  swaps.forEach(([i, j]) => {
    // Swap elements using destructuring
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });

  return arr;
};

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2])); // [1, 3, 2, 4, 5]
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])); // [1, 3, 2, 5, 4]
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])); // [1, 3, 5, 2, 4]

/*
### **Explanation:**

1. **Arrow Function:**  
   - `const shuffleIt = (arr, ...swaps) => {}` defines the function using an arrow syntax.  
   - The `...swaps` uses **rest parameters** to gather all subsequent arguments into an array of pairs.

2. **Destructuring:**  
   - In the `forEach` loop, each `swap` is destructured into `[i, j]`, representing the two indices to swap.

3. **Swapping with Destructuring:**  
   - The swapping of elements is done concisely using:  
     ```javascript
     [arr[i], arr[j]] = [arr[j], arr[i]];
     ```
     This efficiently swaps the two values without needing a temporary variable.

4. **Spread Operator:**  
   - The `...swaps` syntax collects all index pairs into a single array, making the function flexible for any number of swaps.
*/
