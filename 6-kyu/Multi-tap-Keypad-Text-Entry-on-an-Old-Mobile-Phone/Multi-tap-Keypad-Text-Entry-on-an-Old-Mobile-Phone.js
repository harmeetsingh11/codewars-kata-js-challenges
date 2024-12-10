function calculateButtonPresses(phrase) {
  // Define the button mapping, including digits, letters, and special characters
  const buttonMap = {
    1: 1,
    2: 4,
    A: 1,
    B: 2,
    C: 3,
    3: 4,
    D: 1,
    E: 2,
    F: 3,
    4: 4,
    G: 1,
    H: 2,
    I: 3,
    5: 4,
    J: 1,
    K: 2,
    L: 3,
    6: 4,
    M: 1,
    N: 2,
    O: 3,
    7: 5,
    P: 1,
    Q: 2,
    R: 3,
    S: 4,
    8: 4,
    T: 1,
    U: 2,
    V: 3,
    9: 5,
    W: 1,
    X: 2,
    Y: 3,
    Z: 4,
    0: 2,
    ' ': 1,
    '#': 1,
    '*': 1,
  };

  // Convert input to uppercase and split into characters
  return phrase
    .toUpperCase()
    .split('')
    .reduce((presses, char) => presses + (buttonMap[char] || 0), 0); // Sum up the presses
}

// Test cases
console.log(calculateButtonPresses('0123456789')); // Expected: 37
console.log(calculateButtonPresses('WHERE DO U WANT 2 MEET L8R')); // Expected: 47
console.log(calculateButtonPresses('0')); // Expected: 2
console.log(calculateButtonPresses('DCXHBIKNUW m ms 641')); // Expected: 38
console.log(
  calculateButtonPresses(
    'lpctsxe IHM 4062 #167 UHN zvskr J nxfd 648 jitzksrba CMIPQVF fh 9 mutvdqwj nd X 1304 760 ia mcsghaufi R U admrxn NCTVZMUX A IXHEFYMOLD 16 DNJ 9'
  )
); // Expected: 299

/* 
Steps to Solve

Step 1: Define Button Mappings
We use an object (buttonMap) to map each character to its corresponding number of button presses. This mapping is based on:

Alphabets (A-Z):
Each character gets its position on the button, starting from 1.
Example: B is the second character on 2, so it needs 2 presses.
Digits (0-9):
0 requires 2 presses (SPACE -> 0).
Other digits like 1, 2, ..., 9 need as many presses as the number of characters they cycle through.
Special Characters:
Both # and * require 1 press.

Step 2: Convert Input
To handle case insensitivity, the input string is converted to uppercase using .toUpperCase().

Step 3: Calculate Total Button Presses
The phrase is processed character by character:
Use split('') to break the string into individual characters.
Use reduce() to sum the presses:
For each character, look up its press count in buttonMap.
If a character is not in buttonMap, it defaults to 0.
*/
