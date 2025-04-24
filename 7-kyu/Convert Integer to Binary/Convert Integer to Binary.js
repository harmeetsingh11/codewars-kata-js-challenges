function toBinary(n) {
  // Use >>> 0 to convert to unsigned 32-bit integer,
  // then use toString(2) to get binary representation.
  return (n >>> 0).toString(2);
}

console.log(toBinary(3)); // "11"
console.log(toBinary(-3)); // "11111111111111111111111111111101"

/*
### Explanation:
- `n >>> 0` — This is the **unsigned right shift** operator in JavaScript.  
  It forces the number to be treated as an **unsigned 32-bit integer**, which is how two’s complement negative numbers are typically represented in memory.
- `.toString(2)` — Converts the number to a binary string.

### ✅ Why this is the best solution:
- It's a **one-liner**, extremely **concise**.
- Uses **built-in JS behavior** for 32-bit conversion, so it's **fast and reliable**.
- Automatically strips leading zeros for **positive numbers** and correctly represents **negative numbers** in **two’s complement**.
*/
