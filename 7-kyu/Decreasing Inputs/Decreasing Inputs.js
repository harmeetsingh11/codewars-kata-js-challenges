const add = (...args) =>
  args.length === 0
    ? 0
    : Math.round(args.reduce((sum, num, index) => sum + num / (index + 1), 0));

console.log(add()); // 0
console.log(add(3, 4, 6)); // 7
console.log(add(1, 2, 3)); // 3
console.log(add(1, 4, -6, 20)); // 6

// Explanation:
// - `...args`: Rest parameter to capture all arguments as an array.
// - `args.length === 0 ? 0`: If no arguments are passed, return 0.
// - `args.reduce(...)`: Iterates over the arguments array and accumulates the sum.
//    - `sum`: The accumulator initialized to 0.
//    - `num`: The current argument value.
//    - `index`: The current index (0-based), hence we divide by `(index + 1)` for 1-based division.
// - `Math.round(...)`: Rounds the final result to the nearest integer.
