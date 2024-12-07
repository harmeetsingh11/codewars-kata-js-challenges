function generateMultiples(m, n) {
  // Use Array.from to create an array of length 'm'
  // Map each index (1-based) to its corresponding multiple of 'n'
  return Array.from({ length: m }, (_, i) => (i + 1) * n);
}

// Example
console.log(generateMultiples(3, 5.0)); // Output: [5.0, 10.0, 15.0]

/* 
Explanation:

Array.from:
Creates an array of a specified length (m in this case).
Allows transforming each element during creation using a mapping function.

Mapping Function:
_ (ignored variable): Placeholder for the unused first argument in the callback.
i (index): Represents the 0-based index of the array.
(i + 1) * n: Converts the 0-based index to 1-based, then multiplies it by n to compute the corresponding multiple.

Result:
Generates an array of the first m multiples of n.
*/
