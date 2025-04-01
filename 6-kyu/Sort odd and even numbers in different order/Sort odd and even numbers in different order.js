function sortArray(arr) {
  // Separate odd and even numbers
  const odds = arr.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  const evens = arr.filter((n) => n % 2 === 0).sort((a, b) => b - a);

  // Merge them back in original positions
  return arr.map((n) => (n % 2 !== 0 ? odds.shift() : evens.shift()));
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // Output: [1, 3, 8, 4, 5, 2]

/* 
### Explanation:
1. **Separate odd and even numbers**  
   - `odds`: Extract odd numbers and sort them in ascending order.  
   - `evens`: Extract even numbers and sort them in descending order.  

2. **Reconstruct the array**  
   - Use `map()` to replace odd numbers with the next smallest odd from `odds` (using `shift()`).  
   - Replace even numbers with the next largest even from `evens` (using `shift()`).  
*/
