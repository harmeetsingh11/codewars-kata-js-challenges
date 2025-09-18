/**
 * Function to find the shortest encryption key from message and code
 * @param {string} message - original message in lowercase letters
 * @param {number[]} code - encrypted code numbers
 * @returns {number} - shortest possible encryption key
 */
function findTheKey(message, code) {
  // Step 1: Convert message to its alphabet position values (a=1, b=2, ... z=26)
  const baseNums = [...message].map((ch) => ch.charCodeAt(0) - 96);

  // Step 2: Find differences (key digits) = code[i] - baseNums[i]
  const diffs = code.map((num, i) => num - baseNums[i]);

  // Step 3: Find the shortest repeating pattern in diffs
  for (let len = 1; len <= diffs.length; len++) {
    // Candidate key (first 'len' digits)
    const candidate = diffs.slice(0, len);
    // Repeat the candidate key to match full length
    const repeated = Array.from(
      { length: diffs.length },
      (_, i) => candidate[i % len]
    );
    // Check if repeated pattern matches diffs
    if (repeated.every((val, i) => val === diffs[i])) {
      // Join digits and return as integer
      return parseInt(candidate.join(''), 10);
    }
  }
}

console.log(findTheKey('scout', [20, 12, 18, 30, 21]));
// 1939

console.log(
  findTheKey('masterpiece', [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8])
);
// 1939

console.log(
  findTheKey('nomoretears', [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20])
);
// 12

/*
### 🔎 Explanation:

1. **Convert message → numbers**
   Each character is converted to its alphabet index: `a=1, b=2, ... z=26`.

   Example: `"scout"` → `[19, 3, 15, 21, 20]`.

2. **Find differences (key digits)**
   Subtract message numbers from encrypted code to get the sequence of key digits.

   Example:
   `code [20, 12, 18, 30, 21] - base [19, 3, 15, 21, 20] = [1, 9, 3, 9, 1]`.

3. **Find shortest repeating pattern**
   Check all possible prefix lengths (`len=1..n`) and see if repeating it matches the entire sequence.
   First valid match is the shortest key.

   Example: `[1,9,3,9,1]` → smallest repeating pattern is `[1,9,3,9]` → key = `1939`.
*/
