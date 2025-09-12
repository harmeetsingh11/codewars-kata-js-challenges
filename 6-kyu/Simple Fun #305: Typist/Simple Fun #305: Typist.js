/**
 * Function to count how many times John tapped the keyboard
 * @param {string} s - Input string consisting of English letters
 * @returns {number} - Total taps required
 */
function countTaps(s) {
  let taps = 0; // total key presses
  let capsOn = false; // caps lock state (initially off)

  for (let ch of s) {
    const isUpper = ch === ch.toUpperCase(); // check if char is uppercase

    // If current caps lock state doesn't match character case → toggle
    if (isUpper !== capsOn) {
      taps++; // press Caps Lock
      capsOn = !capsOn;
    }

    taps++; // press the character key
  }

  return taps;
}

// Examples
console.log(countTaps('a')); // 1
console.log(countTaps('aa')); // 2
console.log(countTaps('A')); // 2
console.log(countTaps('Aa')); // 4

/*
### 🔎 Explanation:

1. **Initial State**: Caps Lock is off.
2. For each character:

   * If the character’s case (uppercase/lowercase) does not match the current Caps Lock state → John presses Caps Lock (`taps++`), and the state toggles.
   * Then John presses the character key (`taps++`).
3. Return total `taps`.

---

✅ **Time Complexity**: `O(n)` (scan string once)
✅ **Space Complexity**: `O(1)` (just counters and state)
✅ Works efficiently even for `s.length = 10000`.
*/
