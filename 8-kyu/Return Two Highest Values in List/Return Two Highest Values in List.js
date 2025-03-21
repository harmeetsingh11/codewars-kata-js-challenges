function twoHighest(arr) {
  // Use Set to remove duplicates and convert it back to an array
  const uniqueValues = [...new Set(arr)];

  // Sort the unique values in descending order
  uniqueValues.sort((a, b) => b - a);

  // Return the first two elements or as many as available
  return uniqueValues.slice(0, 2);
}

console.log(twoHighest([4, 10, 10, 9])); // [10, 9]
console.log(twoHighest([1, 1, 1])); // [1]
console.log(twoHighest([])); // []
console.log(twoHighest([5, 3, 8, 8, 2])); // [8, 5]

/*
**Explanation:**
1. **Removing Duplicates:**  
   - `new Set(arr)` creates a Set, which automatically removes duplicates.  
   - The `...` spread operator converts the Set back into an array.
   
2. **Sorting:**  
   - `sort((a, b) => b - a)` sorts the array in descending order (highest to lowest).
   
3. **Returning Top 2 Values:**  
   - `slice(0, 2)` extracts the first two elements.  
   - If there are fewer than two values, it returns as many as available.
*/
