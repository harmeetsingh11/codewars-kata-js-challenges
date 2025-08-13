/**
 * Calculates maximum free urinals that can be occupied
 * following the "leave one empty" rule.
 *
 * @param {string} str - Binary string: '1' = occupied, '0' = free.
 * @returns {number} - Maximum number of additional people, or -1 if invalid.
 */
function getFreeUrinals(str) {
  // Check if there are already adjacent occupied urinals -> invalid input
  if (str.includes('11')) return -1;

  let arr = str.split(''); // Work with array for easier modification
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // If current urinal is free, and both neighbors (if any) are free
    if (
      arr[i] === '0' &&
      (i === 0 || arr[i - 1] === '0') &&
      (i === arr.length - 1 || arr[i + 1] === '0')
    ) {
      arr[i] = '1'; // Place someone here
      count++; // Increase number of people placed
    }
  }

  return count;
}

// Test cases
console.log(getFreeUrinals('10001')); // 1 → becomes "10101"
console.log(getFreeUrinals('1001')); // 0 → stays "1001"
console.log(getFreeUrinals('00000')); // 3 → "10101"
console.log(getFreeUrinals('0000')); // 2 → "1010"
console.log(getFreeUrinals('01000')); // 1 → "01010"
console.log(getFreeUrinals('011')); // -1 (invalid)

/*
we need to handle:

1. **Rule enforcement**: No two people (1's) can be adjacent.
2. **Error detection**: If the input already violates the rule (like `"011"`), return `-1`.
3. **Max placement**: Count how many new people can be placed without breaking the rule.

### **Explanation**

1. **Invalid input detection**
   If `"11"` exists in the string, someone already broke the rule → return `-1` immediately.

2. **Placement rule**
   For each position:

   * It must be free (`'0'`)
   * The **previous** and **next** positions (if they exist) must also be free (`'0'`).

3. **Why modify `arr`?**
   After placing someone (`'1'`), the next check will consider this change, ensuring no two new people sit next to each other.
*/
