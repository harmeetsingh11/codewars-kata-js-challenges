function sumNested(arr) {
  // Use reduce to iterate over the array elements and sum them up
  return arr.reduce(
    (sum, val) =>
      // If val is an array, recursively call sumNested, otherwise add val to sum
      sum + (Array.isArray(val) ? sumNested(val) : val),
    0
  );
}

console.log(sumNested([1, [2, [3, [4]]]])); // Output: 10

/* 
Explanation:
1. We use `reduce` to iterate through each element of the array.
2. If an element is an array, we recursively call `sumNested` on it.
3. If an element is a number, we add it to the accumulated sum.
4. The base case is when there are no more nested arrays, and all values are summed up.
5. The initial sum starts at `0`.
*/
