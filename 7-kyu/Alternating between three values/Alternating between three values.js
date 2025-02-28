function f(x, { a, b, c }) {
  // Using an object mapping to cycle through the values efficiently
  return { [a]: b, [b]: c, [c]: a }[x];
}

console.log(f(3, { a: 3, b: 4, c: 5 })); // Output: 4
console.log(f(4, { a: 3, b: 4, c: 5 })); // Output: 5
console.log(f(5, { a: 3, b: 4, c: 5 })); // Output: 3

/*
### Explanation:
1. The function takes two parameters:
   - `x`: The current value.
   - An object `{ a, b, c }` containing the possible values.
2. It creates a lookup object `{ [a]: b, [b]: c, [c]: a }` dynamically, where:
   - `a` maps to `b`
   - `b` maps to `c`
   - `c` maps to `a`
3. It then returns the value corresponding to `x` using the lookup object.

This approach is **efficient (O(1) time complexity)**, **concise**, and **independent of the values of a, b, and c**. 
*/
