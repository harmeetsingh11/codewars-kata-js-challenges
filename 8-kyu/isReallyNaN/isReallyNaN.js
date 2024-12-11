function isReallyNaN(value) {
  // Use Object.is to check if the value is strictly equal to NaN
  return Object.is(value, NaN);
}

// Explanation:
// 1. Object.is is a more precise alternative to the `===` operator for comparing values.
// 2. It correctly identifies NaN because `NaN === NaN` is false (a quirk in JavaScript), but `Object.is(NaN, NaN)` is true.

// Examples:
console.log(isReallyNaN(NaN)); // true
console.log(isReallyNaN(undefined)); // false
console.log(isReallyNaN(123)); // false
console.log(isReallyNaN('NaN')); // false
