function calculate(...args1) {
  // Return a new function that takes the second set of arguments
  return function (...args2) {
    // Use reduce to sum all values from both argument sets
    return [...args1, ...args2].reduce((sum, val) => sum + val, 0);
  };
}

console.log(calculate(1)(1)); // 2
console.log(calculate(1, 1)(1)); // 3
console.log(calculate(1, 1)(1, -1)); // 2
console.log(calculate(2, 4)(3, 7, 1)); // 17

/*
### Explanation:
- `calculate(...args1)` uses the rest parameter to capture any number of arguments in the first set.
- It returns another function that also takes any number of arguments `(...args2)`.
- We concatenate both sets using `[...args1, ...args2]` and sum them with `.reduce()`.
*/
