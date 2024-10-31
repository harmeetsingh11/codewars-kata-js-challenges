// Function to vertically mirror each line in the string
function vertMirror(s) {
  return s
    .split('\n') // Split the string into an array of lines
    .map((line) => line.split('').reverse().join('')) // Reverse each line
    .join('\n'); // Join lines back into a string with '\n' separator
}

// Function to horizontally mirror the entire string
function horMirror(s) {
  return s
    .split('\n') // Split the string into an array of lines
    .reverse() // Reverse the order of lines
    .join('\n'); // Join lines back into a string with '\n' separator
}

// High-order function to apply a mirror function on the string
function oper(fct, s) {
  return fct(s); // Call the given mirror function (fct) with string s
}

/* 
Explanation:

vertMirror:
This function mirrors each line individually (as in a vertical mirror).
Step 1: Split the input string s by \n to get an array of lines.
Step 2: Use map to reverse each line by splitting it into characters, reversing the array of characters, and then joining them back.
Step 3: Join the transformed lines with \n to create the final vertically mirrored string.

horMirror:
This function mirrors the entire string by reversing the order of lines (as in a horizontal mirror).
Step 1: Split the string s by \n to get an array of lines.
Step 2: Reverse the order of lines in the array.
Step 3: Join the reversed lines back with \n to get the horizontally mirrored string.

oper:
This higher-order function takes a function fct (either vertMirror or horMirror) and applies it to the string s.
It simply calls and returns the result of fct(s).
*/
