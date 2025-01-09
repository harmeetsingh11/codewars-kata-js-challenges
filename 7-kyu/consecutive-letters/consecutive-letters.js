function solve(s) {
  // Sort the string alphabetically
  const sorted = s.split('').sort().join('');

  // Check if the string forms a sequence of consecutive letters
  for (let i = 1; i < sorted.length; i++) {
    if (sorted.charCodeAt(i) !== sorted.charCodeAt(i - 1) + 1) {
      return false; // Letters are not consecutive
    }
  }
  return true; // All letters are consecutive and unique
}

console.log(solve('abc')); // True
console.log(solve('abd')); // False
console.log(solve('dabc')); // True
console.log(solve('abbc')); // False
console.log(solve('v')); // True

/* 
Explanation:

Sorting:
The input string is first converted into an array using split(''), then sorted alphabetically using sort(), and finally joined back into a string using join('').
Sorting ensures that if the letters are consecutive in the alphabet, they will appear in the correct order.

Validation:
The loop iterates through the sorted string, checking if the difference between the ASCII values of consecutive characters is exactly 1.
charCodeAt(i) gets the ASCII value of the character at index i.
If any two consecutive letters are not adjacent in the alphabet, the function immediately returns false.

Return:
If the loop completes without finding a discrepancy, the function returns true, confirming that the letters are consecutive and unique.

This solution runs in O(nlogn) due to the sorting step, which is efficient for typical use cases.
*/
