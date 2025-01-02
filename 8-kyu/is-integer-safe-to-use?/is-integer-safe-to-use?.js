const SafeInteger = (num) => Number.isSafeInteger(num);

// Test cases
console.log(SafeInteger(9007199254740990)); // true
console.log(SafeInteger(-90)); // true
console.log(SafeInteger(9007199254740992)); // false

// Explanation:
// 1. `Number.isSafeInteger(num)` is an ES6 method that checks two conditions:
//    a. The number is an integer.
//    b. The number is within the safe range (-2^53 + 1 to 2^53 - 1).
// 2. If both conditions are met, it returns `true`, otherwise `false`.

/* 
Why this approach is efficient:
The Number.isSafeInteger method is built into JavaScript and performs all necessary checks in a single call.
It is concise, leveraging the language's standard library for clarity and performance.
No need for manual calculations or additional checks, making the code both robust and easy to read.
*/
