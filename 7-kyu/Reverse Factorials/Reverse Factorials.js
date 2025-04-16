function factorialOf(n) {
  let product = 1;
  let i = 1;

  // Loop to check if n is a factorial of some number
  while (product < n) {
    i++;
    product *= i;
  }

  // If the product equals n, return the factorial string, else "None"
  return product === n ? `${i}!` : 'None';
}

// Test cases
console.log(factorialOf(120)); // "5!"
console.log(factorialOf(24)); // "4!"
console.log(factorialOf(150)); // "None"

/*
### Explanation:
- We start with `product = 1` (since `1! = 1`).
- We increment `i` starting from 1 and multiply `product` by `i` in each iteration.
- If `product` becomes equal to the input `n`, we return the string `"i!"`.
- If `product` exceeds `n`, we return `"None"` because `n` cannot be a factorial of any number.
*/
