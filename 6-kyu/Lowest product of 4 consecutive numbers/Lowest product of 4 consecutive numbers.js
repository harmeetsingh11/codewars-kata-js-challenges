function lowestProduct(input) {
  // If the input length is less than 4, return the error message
  if (input.length < 4) return 'Number is too small';

  let minProduct = Infinity;

  // Iterate through the string, checking each set of 4 consecutive digits
  for (let i = 0; i <= input.length - 4; i++) {
    // Convert characters to numbers and compute the product
    let product = [...input.slice(i, i + 4)].reduce((a, b) => a * b, 1);

    // Update minProduct if the current product is smaller
    minProduct = Math.min(minProduct, product);
  }

  return minProduct;
}

// test cases
console.log(lowestProduct('123456789')); // 24
console.log(lowestProduct('35')); // "Number is too small"

/* 
Explanation:
1. **Check input length**: If the number string has fewer than 4 digits, return `"Number is too small"`.
2. **Initialize `minProduct`**: Set it to `Infinity` to ensure any valid product is smaller.
3. **Loop through the string**: Iterate through substrings of 4 consecutive digits.
4. **Compute the product**: Convert characters to numbers and multiply them using `.reduce()`.
5. **Update the minimum**: If the current product is smaller, update `minProduct`.
6. **Return the smallest product** found after iteration.
*/
