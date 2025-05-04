function parityBit(parity, bin) {
  // Count the number of 1-bits in the binary string
  const onesCount = [...bin].filter((bit) => bit === '1').length;

  // Check if the current parity matches the desired parity
  if (parity === 'even') {
    // If the number of 1-bits is even, no parity bit is needed (0)
    // If the number of 1-bits is odd, add 1 to make it even
    return onesCount % 2 === 0 ? 0 : 1;
  } else {
    // If the number of 1-bits is odd, no parity bit is needed (0)
    // If the number of 1-bits is even, add 1 to make it odd
    return onesCount % 2 === 0 ? 1 : 0;
  }
}

// Example
console.log(parityBit('even', '0101010')); // Output: 1

/*
### Explanation:

1. **Count `1`-bits**: We count the number of `1`s in the binary string using `filter` to extract all `1`s, then calculate the length of the resulting array.

2. **Check parity**:

   * If the desired parity is `'even'`, we check if the number of `1`s is already even (`onesCount % 2 === 0`), and return `0` if it is, or `1` if it isn't (to make it even).
   * If the desired parity is `'odd'`, we return `0` if the count is already odd, and `1` if it is even (to make it odd).

This solution is both **efficient** (O(n) where n is the length of the binary string) and **concise**.
*/
