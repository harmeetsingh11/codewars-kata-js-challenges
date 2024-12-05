function encode(str, key) {
  // Convert the key into an array of its digits (cyclic key array)
  const keyDigits = String(key).split('').map(Number);

  return [...str].map(
    (char, i) =>
      // Convert character to its corresponding number (a=1, b=2, ..., z=26)
      char.charCodeAt(0) - 96 + keyDigits[i % keyDigits.length]
  );
}

// Example
console.log(encode('scout', 1939)); // [20, 12, 18, 30, 21]
console.log(encode('masterpiece', 1939)); // [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

/* 
Explanation:

Key to Digits:
Convert the key number into a string and split it into an array of digits using String(key).split('').
Convert each digit back to a number using .map(Number). This gives an array of digits from the key (e.g., 1939 → [1, 9, 3, 9]).

Character Mapping:
Use the spread operator [...] to break the str string into an array of characters.
For each character, compute its corresponding number using char.charCodeAt(0) - 96.
This maps 'a' to 1, 'b' to 2, ..., 'z' to 26.

Add Key Value:
Add the digit from the keyDigits array at the index i % keyDigits.length. This ensures the key is applied cyclically.

Return Result:
The .map() function builds the result array by applying the transformation for each character.

Efficiency:
Time Complexity: O(n), where n is the length of the input string.
Space Complexity: O(n) for the result array.
*/
