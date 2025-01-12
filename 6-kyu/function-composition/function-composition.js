// The compose function takes two functions f and g as input
// and returns a new function that applies g first, then f.
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

// Explanation:
// 1. The `compose` function takes two arguments: `f` and `g`.
// 2. It returns a new function that takes any number of arguments (`...args`).
// 3. The inner function first applies `g` to `...args` (spreading the arguments into `g`).
// 4. Then, it passes the result of `g(...args)` into `f`.
// 5. This ensures that `f(g(...args))` is returned, implementing function composition.

/* 
Usage Example:

const multiplyBy2 = x => x * 2; // A function that multiplies by 2
const add3 = x => x + 3;       // A function that adds 3

const composedFunction = compose(multiplyBy2, add3);

console.log(composedFunction(5)); // multiplyBy2(add3(5)) => multiplyBy2(8) => 16

-------------

Handling Multiple Arguments:
The compose function works seamlessly with multiple arguments because of the ...args spread syntax. For example:

const sum = (a, b) => a + b;          // Function that sums two numbers
const square = x => x * x;            // Function that squares a number

const composedFunction = compose(square, sum);

console.log(composedFunction(2, 3));  // square(sum(2, 3)) => square(5) => 25

*/
