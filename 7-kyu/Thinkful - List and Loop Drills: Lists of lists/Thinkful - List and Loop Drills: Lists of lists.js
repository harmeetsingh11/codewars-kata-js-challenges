function processData(data) {
  // Use reduce to iterate over each sublist, subtract the second element from the first, and calculate the product.
  return data.reduce((product, [a, b]) => product * (a - b), 1);
}

const data = [
  [2, 5],
  [3, 4],
  [8, 7],
];
console.log(processData(data)); // Output: 3

/*Explanation:
1. **`reduce` method**: We use the `reduce()` method to iterate over each sublist in `data`. The initial value of the accumulator is `1`, which will hold the product of the processed results.
2. **Destructuring**: The expression `[a, b]` is used to destructure each sublist into its two elements.
3. **Subtraction**: For each sublist, we subtract `b` from `a`, as described in the problem.
4. **Product calculation**: The subtraction result is multiplied with the running product, and the final product is returned.

This approach is efficient with a time complexity of O(n), where `n` is the number of sub-lists in the input data.
*/
