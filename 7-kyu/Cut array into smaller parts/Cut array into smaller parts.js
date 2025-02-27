function chunkArray(arr, size) {
  // Validate inputs
  if (!Array.isArray(arr) || size <= 0) return [];

  // Use Array.from to create chunks efficiently
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

console.log(chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 10)); // [[1,2,3,4,5,6,7,8,9,10], [11,12,13]]

/* 
### Explanation:
1. **Input Validation**: Ensures `arr` is an array and `size` is a positive integer.
2. **Efficient Chunking**:
   - `Math.ceil(arr.length / size)`: Determines the number of chunks.
   - `Array.from({ length: ... }, (_, i) => ...)`: Iterates over the number of chunks and slices the array accordingly.
3. **Performance**: Uses `slice()` instead of loops, making it more readable and efficient.
*/
