// Define a function 'add' that returns another function
const add = (a) => (b) => a + b;

console.log(add(3)(4)); // Output: 7
console.log(add(12)(20)); // Output: 32

/*
### Explanation:
- This uses **arrow functions** and **currying**.
- `add` takes the first number `a` and returns a new function.
- The returned function takes the second number `b` and returns the sum `a + b`.
- `add(3)(4)` first calls `add(3)` which returns a function expecting another argument. Then that function is immediately called with `4`, returning `3 + 4 = 7`.
*/
