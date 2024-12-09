function countDeafRats(town) {
  // Remove whitespace from the input string for easier processing
  const cleanedTown = town.replace(/\s+/g, '');

  // Find the position of the Pied Piper
  const piedPiperIndex = cleanedTown.indexOf('P');

  let deafRats = 0;

  // Check the rats on the left of the Pied Piper
  for (let i = 0; i < piedPiperIndex; i += 2) {
    if (cleanedTown[i] === 'O' && cleanedTown[i + 1] === '~') {
      deafRats++;
    }
  }

  // Check the rats on the right of the Pied Piper
  for (let i = piedPiperIndex + 1; i < cleanedTown.length; i += 2) {
    if (cleanedTown[i] === '~' && cleanedTown[i + 1] === 'O') {
      deafRats++;
    }
  }

  return deafRats;
}

// Examples
console.log(countDeafRats('~O~O~O~O P')); // Output: 0
console.log(countDeafRats('P O~ O~ ~O O~')); // Output: 1
console.log(countDeafRats('~O~O~O~OP~O~OO~')); // Output: 2

/* 
Explanation

Remove Whitespace:
Spaces are irrelevant for determining deaf rats. The code uses .replace(/\s+/g, "") to strip them out.

/ and /:
These delimit the start and end of the regular expression.
\s:
Matches any whitespace character, including spaces, tabs, and line breaks.
+:
Matches one or more of the preceding element (in this case, \s).
Ensures that multiple consecutive whitespace characters are matched as a single group.
g (Global Flag):
Ensures that the regex finds all matches in the string, not just the first one.

Find Pied Piper's Position:
The Pied Piper P divides the town into left and right halves. indexOf("P") helps locate P.

Iterate Through Rats:
Left Side: Rats should be ~O. Any O~ rats on the left are deaf.
Right Side: Rats should be O~. Any ~O rats on the right are deaf.

Count Deaf Rats:
Use for loops, advancing by 2 indices at a time (as each rat occupies two characters).
Compare character pairs (O~ or ~O) to determine if a rat is deaf.

This solution is efficient with a time complexity of O(n), where n is the length of the string,
*/
