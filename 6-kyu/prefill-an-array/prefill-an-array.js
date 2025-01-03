function prefill(n, v) {
  // Validate if n is a non-negative integer or integer-formatted string
  if (
    !Number.isInteger(+n) ||
    +n < 0 ||
    typeof n === 'boolean' ||
    !isFinite(n)
  ) {
    throw new TypeError(`${n} is invalid`);
  }

  // Return an array of length n filled with value v using Array constructor and fill
  return Array.from({ length: +n }, () => v);
}

// examples:
console.log(prefill(3, 1)); // [1, 1, 1]
console.log(prefill(2, 'abc')); // ['abc', 'abc']
console.log(prefill('1', 1)); // [1]
console.log(prefill(3, prefill(2, '2d'))); // [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]

// Uncomment to see the TypeError
// console.log(prefill("xyz", 1));        // Throws TypeError: "xyz is invalid"

/* 
Explanation:

Input Validation:
+n converts n to a number.
Number.isInteger(+n) checks if n is an integer (or can be parsed as one).
+n < 0 ensures n is non-negative.
typeof n === "boolean" ensures booleans are excluded (as +true equals 1).
isFinite(n) prevents invalid cases like Infinity or NaN.

Throwing TypeError:
If n fails validation, a TypeError is thrown with the required message format.

Creating the Array:
Array.from({ length: +n }, () => v) efficiently creates an array of size n filled with v.
This avoids traditional loops and leverages the Array.from method.

Edge Cases:
Handles non-integer and invalid inputs gracefully by throwing errors.
If n is 0, it returns an empty array.
Supports nested arrays and various data types as the v value.
*/
