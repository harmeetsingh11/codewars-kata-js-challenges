function isEven(n) {
  // Check if the number is an integer and divisible by 2
  return Number.isInteger(n) && n % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(-2)); // true
console.log(isEven(3)); // false
console.log(isEven(2.0)); // true
console.log(isEven(2.2)); // false

/*
### ✅ Explanation:
- `Number.isInteger(n)` ensures the number is a whole number (floats with decimals are filtered out).
- `n % 2 === 0` checks if the number is divisible by 2 (i.e., even).
- If both are true → the number is even → return `true`, otherwise → `false`.
*/
