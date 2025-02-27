// The compose function takes multiple functions as arguments
const compose =
  (...funcs) =>
  (value) =>
    funcs.reduceRight((acc, fn) => fn(acc), value);

// Example usage:
const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
const square = (c) => c * c;

const addOneMultTwoSquare = compose(square, multTwo, addOne);

console.log(addOneMultTwoSquare(5)); // Output: 144

/*
### Explanation:
1. **Rest parameter (`...funcs`)**: Allows the function to take any number of arguments (functions).
2. **ReduceRight**: Iterates over the functions from right to left, applying each function to the accumulated value.
3. **Initial value (`value`)**: The input is passed as the initial accumulator.
4. **Composition order**: Functions are applied in right-to-left order, just like traditional mathematical function composition.
*/
