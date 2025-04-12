// Define the keypad layout with each string representing a row of characters on the mobile keyboard
const map = ['1234567890*#', 'adgjmptw', 'behknqux', 'cfilorvy', 'sz'];

/**
 * Function to calculate the total number of keystrokes required to type the given string.
 * @param {string} str - The input string that needs to be typed.
 * @returns {number} - The total number of keystrokes.
 */
function mobileKeyboard(str) {
  // Use reduce to accumulate the total keystrokes by iterating over each character in the string
  return [...str].reduce(
    (s, c) => s + map.findIndex((l) => l.includes(c)), // Add the number of keystrokes for each character
    str.length // Initial value for the accumulator is the length of the string (this accounts for characters without needing any keystrokes, like spaces or punctuation)
  );
}

/*
### **Explanation of Approach/Intuition:**

1. **Keypad Layout (`map`)**:  
   The layout of the keypad is represented by an array of strings (`map`). Each string contains a group of characters found on a particular button on the old mobile keyboard:
   - The first string represents the characters on the number and symbol buttons (`'1234567890*#'`).
   - The second string contains the characters found on the second row of the keypad (`'adgjmptw'`), and so on.

2. **Iterating Over the String (`reduce`)**:  
   The function uses `reduce` to iterate over each character in the string `str`. The initial value of the accumulator (`s`) is set to `str.length`, which is the length of the string. This serves as the starting point for counting the keystrokes and accounts for any non-character handling (if needed).

3. **Finding Keystroke Count for Each Character**:  
   For each character `c` in the input string `str`, the method `map.findIndex()` is used to find the index of the string in the `map` array that contains the character `c`.  
   - The `findIndex` method scans through each string in the `map` array and checks if the character `c` is present in that string (via `l.includes(c)`).
   - The index of the string in the `map` array corresponds to the number of keystrokes required to type that character (starting from `0` for the first string, which takes 1 keystroke, and so on).

4. **Total Keystrokes**:  
   Each character’s required keystrokes (determined by its position in the corresponding string) are accumulated and added to the running total (`s`) using `reduce`.

### **Complexity**:
- Time complexity: `O(n * m)`, where `n` is the length of the string and `m` is the average number of rows in the keypad layout (which is constant in this case). This is because for each character, we potentially scan all rows of the keypad to find its index.
*/
