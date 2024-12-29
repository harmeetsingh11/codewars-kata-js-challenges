function compareValues(value1, value2) {
  // Use loose equality (==) to compare values with type coercion
  // This allows comparison between a string and a number
  return value1 == value2;
}

// Explanation:
// - Loose equality (==) in JavaScript performs type coercion automatically.
// - For example, if value1 is a number (e.g., 5) and value2 is a string (e.g., "5"),
//   JavaScript will convert the string to a number and then compare the values.
// - This approach avoids using any restricted methods while leveraging JavaScript's built-in type coercion.

// Examples:
console.log(compareValues(5, '5')); // true
console.log(compareValues(5, '6')); // false
console.log(compareValues(0, '0')); // true
console.log(compareValues(42, '42')); // true
console.log(compareValues(10, 'ten')); // false
