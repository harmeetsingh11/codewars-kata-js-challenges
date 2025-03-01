function strangeMath(n, k) {
  // Create an array of numbers from 1 to n, convert them to strings for lexicographic sorting
  const sortedNumbers = Array.from({ length: n }, (_, i) =>
    (i + 1).toString()
  ).sort();

  // Find the index of k in the sorted array and return its position (1-based index)
  return sortedNumbers.indexOf(k.toString()) + 1;
}

// Test cases
console.log(strangeMath(11, 2)); // Output: 4
console.log(strangeMath(15, 5)); // Output: 11
console.log(strangeMath(15, 15)); // Output: 7

/* 
### Explanation:
1. **Generate Numbers:**  
   - We create an array of numbers from `1` to `n` using `Array.from({ length: n }, (_, i) => (i + 1).toString())`.  
   - Each number is converted to a string to facilitate lexicographic sorting.

2. **Sort Lexicographically:**  
   - The default `.sort()` method in JavaScript sorts strings lexicographically (dictionary order).

3. **Find the Position:**  
   - We locate `k` in the sorted array using `.indexOf(k.toString())` and return the **1-based index** by adding `1`.

### Complexity:
- **O(n log n)** due to sorting.  
- **O(n)** for creating the array and finding the index.  
- Overall **O(n log n)**, which is efficient for `n ≤ 100000`.
*/
