/*
You want a value `a` such that:

- `a == false` → true
- `!a == false` → true
- `a == !a` → true
*/

let a = [];

// Explanation:
// 1. [] == false → true (because [] is a truthy value, but == does type coercion)
// 2. ![] == false → true (because ![] becomes false, and false == false is true)
// 3. [] == ![] → true (because [] == false, and ![] is false, so [] == false)

// Test cases
console.log(a == false); // true
console.log(!a == false); // true
console.log(a == !a); // true
