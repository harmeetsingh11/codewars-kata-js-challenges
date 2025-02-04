function inverse_slice(items, a, b) {
  // Return a new array with elements before index 'a' and after index 'b'
  return [...items.slice(0, a), ...items.slice(b)];
}

console.log(inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)); // Output: [12, 14, 55, 24]

/*Explanation:
1. `items.slice(0, a)`: Gets all elements before index `a`.
2. `items.slice(b)`: Gets all elements from index `b` to the end.
3. `[...items.slice(0, a), ...items.slice(b)]`: Uses the spread operator to merge both slices into a new array, effectively removing the slice `items[a:b]`.  
4. The function efficiently returns the modified array without mutating the original input.
*/
