function swap(s, n) {
  // Convert n to binary and split it into an array of bits
  const bits = n.toString(2).split('');
  const len = bits.length;

  let bitIndex = 0; // Index to track current bit
  return s
    .split('')
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        // Only process alphabetic characters
        // Swap case if the current bit is 1
        if (bits[bitIndex % len] === '1') {
          char =
            char === char.toLowerCase()
              ? char.toUpperCase()
              : char.toLowerCase();
        }
        bitIndex++; // Move to the next bit only for alphabetic characters
      }
      return char; // Return the character (modified or not)
    })
    .join('');
}

// Test cases
console.log(swap('Hello world!', 11)); // "heLLO wORLd!"
console.log(swap('gOOd MOrniNg', 7864)); // "GooD MorNIng"
console.log(swap('', 11345)); // ""
console.log(swap('the lord of the rings', 0)); // "the lord of the rings"

/*
**Explanation:**
1. **Convert `n` to binary**: `n.toString(2)` converts the number `n` into a binary string.
2. **Splitting into bits**: `split('')` converts the binary string into an array of bits.
3. **Mapping over the string:**
   - Use `.map()` to iterate over each character.
   - Use a regular expression `/[a-zA-Z]/` to check if the character is alphabetic.
   - Swap the case if the current bit is `1`, otherwise leave it unchanged.
   - Increment the `bitIndex` only for alphabetic characters, ensuring that non-alphabetic characters are preserved but don't consume bits.
4. **Circular bit usage**: Use `bitIndex % len` to wrap around when the bits run out, creating a cyclic behavior.
*/
