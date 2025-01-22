// Function to rotate the string 180 degrees
function rot(s) {
  // Split string into lines, reverse each line and reverse the order of lines
  return s
    .split('\n')
    .map((line) => line.split('').reverse().join(''))
    .reverse()
    .join('\n');
}

// Function to combine the original string with its rotated version, interspersed with dots
function selfie_and_rot(s) {
  // Determine the number of dots to append/prepend (equal to the line length)
  const dots = '.'.repeat(s.split('\n')[0].length);

  // Original lines with dots appended
  const selfie = s.split('\n').map((line) => line + dots);

  // Rotated lines with dots prepended
  const rotated = rot(s)
    .split('\n')
    .map((line) => dots + line);

  // Combine both parts
  return [...selfie, ...rotated].join('\n');
}

// Higher-order function to apply the given transformation
function oper(fct, s) {
  return fct(s);
}

// Example Usage
const s = 'abcd\nefgh\nijkl\nmnop';

console.log(oper(rot, s));
// Output: "ponm\nlkji\nhgfe\ndcba"

console.log(oper(selfie_and_rot, s));
// Output: "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

/* 
Explanation:

rot function:
Input: Multiline string.
Process:
Split the string into lines using split('\n').
Reverse each line using split(''), reverse(), and join('').
Reverse the order of the lines using reverse().
Output: Rotated string where all lines are reversed, and their order is reversed.

selfie_and_rot function:
Input: Multiline string.
Process:
Determine the number of dots to append/prepend by taking the length of the first line.
Append the dots (line + dots) to each line in the original string.
Prepend the dots (dots + line) to each line in the rotated string.
Combine the two parts using array concatenation and join them with \n.
Output: The original string with dots followed by the rotated string with dots.

oper function:
Input: A function (fct) and a string (s).
Process: Applies the function fct to the string s.
Output: The result of the transformation.
*/
