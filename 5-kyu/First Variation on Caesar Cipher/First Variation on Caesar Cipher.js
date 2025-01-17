// Define the uppercase and lowercase alphabet strings for shifting operations
var upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  downAlpha = 'abcdefghijklmnopqrstuvwxyz';

// Main encoding function
// It shifts the string with the given initial distance and divides the result into 5 parts
function movingShift(s, dist) {
  return split(shift(s, dist, 1)); // Shift the string and then split the result into 5 parts
}

// Decoding function
// It takes an array of 5 parts, joins them together, and reverses the shifting by applying a negative shift
function demovingShift(arr, dist) {
  return shift(arr.join(''), -dist, -1); // Join the array into a string and reverse the shift
}

// Shift function that shifts each character in the string by a dynamic amount
// `s` is the string to shift, `dist` is the initial shift distance, and `step` controls the increase in the shift for each character
function shift(s, dist, step) {
  return s
    .split('')
    .map(function (v, i) {
      var upI = upAlpha.indexOf(v),
        downI = downAlpha.indexOf(v);

      // If the character is not alphabetic, return it unchanged
      if (upI == -1 && downI == -1) return v;

      // Choose the alphabet (uppercase or lowercase) and find the index of the character
      var lib, libI;
      if (upI > -1) {
        lib = upAlpha;
        libI = upI; // For uppercase letters
      } else {
        lib = downAlpha;
        libI = downI; // For lowercase letters
      }

      // Calculate the new position by adding the current shift, ensuring it stays within the bounds of the alphabet
      var loc = (i * step + libI + dist) % 26;
      loc = loc >= 0 ? loc : 26 + loc; // Handle negative modulo for correct circular shift

      // Return the shifted character from the appropriate alphabet (uppercase or lowercase)
      return lib[loc];
    })
    .join(''); // Join the characters back into a string
}

// Split the encoded string into 5 parts
function split(s) {
  var sz = Math.ceil(s.length / 5); // Calculate the size of each part, rounded up
  return [
    s.slice(0, sz), // Part 1
    s.slice(sz, sz * 2), // Part 2
    s.slice(sz * 2, sz * 3), // Part 3
    s.slice(sz * 3, sz * 4), // Part 4
    s.slice(sz * 4), // Part 5 (last part, which may be empty if the string length is a multiple of 5)
  ];
}

/* 
Explanation of the Code:

Alphabet Strings (upAlpha, downAlpha):
These hold the uppercase and lowercase alphabet letters.
They are used to find the index of each character in the alphabet during the shifting process.

movingShift Function:
It calls the shift function to shift each character in the string, starting with the provided initial shift (dist).
After shifting the string, it splits the result into 5 parts by calling the split function.

demovingShift Function:
This function takes an array of 5 parts, joins them into a single string, and then reverses the shift (by using a negative value for both dist and step).
The resulting string is the decoded message.

shift Function:
It shifts each character in the string by a varying amount. The shift for each character increases based on its position in the string.
If the character is a letter, it is shifted within the bounds of the alphabet (either uppercase or lowercase).
Non-alphabetic characters (spaces, punctuation) remain unchanged.
The shift is applied based on the formula (i * step + libI + dist) % 26, where i is the index of the character, step determines whether the shift increases or decreases, and dist is the initial shift.

split Function:
After the string is shifted, it is divided into 5 parts.
The function calculates the size of each part using Math.ceil(s.length / 5), ensuring that the parts are as evenly distributed as possible.
The string is then sliced into 5 parts and returned as an array.
*/
