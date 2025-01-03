function pofi(n) {
  // Explanation:
  // The powers of i follow a cyclic pattern:
  // i^0 = 1
  // i^1 = i
  // i^2 = -1
  // i^3 = -i
  // i^4 = 1 (repeats the cycle)

  // Since the pattern repeats every 4, we use modulo 4 to determine the result.
  const results = ['1', 'i', '-1', '-i'];

  // Return the result based on n % 4.
  return results[n % 4];
}

// Example
console.log(pofi(0)); // "1"
console.log(pofi(1)); // "i"
console.log(pofi(2)); // "-1"
console.log(pofi(3)); // "-i"
console.log(pofi(4)); // "1"

/* 
Explanation:

Cyclic Pattern: The powers of i cycle every 4 steps:
i^0 = 1
i^1 = i
i^2 = -1
i^3 = -i
i^4 = 1 (repeats the cycle)

Modulo Operation: Using n % 4, we map n to one of the 4 results in the cycle.

Lookup Table: A small array ["1", "i", "-1", "-i"] is used to quickly retrieve the result for a given n.

This approach is both efficient (O(1)) and concise, leveraging modular arithmetic and precomputed results for simplicity.
*/
