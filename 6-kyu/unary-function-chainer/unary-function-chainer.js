// The higher-order function `chained` accepts an array of unary functions.
const chained =
  (functions) =>
  // Returns a new function that takes an input and applies the functions in sequence.
  (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

// Example
const a = (x) => x + 1;
const b = (x) => x * 2;
const c = (x) => x - 3;

const result = chained([a, b, c])(5); // Equivalent to c(b(a(5)))
console.log(result); // Output: 9

/* 
Explanation:

Higher-order function: chained takes an array of unary functions (functions).

Reduce for function composition:
functions.reduce((acc, fn) => fn(acc), input):
acc starts as the initial input.
For each function fn in the array, apply it to acc and update acc with the result.
This creates the chain d(c(b(a(input)))) when the functions are applied sequentially.

Efficiency:
Uses Array.prototype.reduce for a single traversal of the functions array.
Minimal memory usage since it processes each function one at a time.
*/
