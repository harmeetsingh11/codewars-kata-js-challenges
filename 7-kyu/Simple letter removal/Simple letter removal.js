function solve(s, k) {
  // Convert the string to an array for easy modification
  let arr = s.split('');

  // Iterate over letters in alphabetical order
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    // Loop through the array and remove k occurrences of the current character
    for (let i = 0; i < arr.length && k > 0; i++) {
      if (arr[i] === char) {
        arr[i] = ''; // Mark for removal
        k--;
      }
    }
    // Stop early if all k characters are removed
    if (k === 0) break;
  }

  // Return the modified string
  return arr.join('');
}

// Test cases
console.log(solve('abracadabra', 1)); // "bracadabra"
console.log(solve('abracadabra', 2)); // "brcadabra"
console.log(solve('abracadabra', 6)); // "rcdbr"
console.log(solve('abracadabra', 8)); // "rdr"
console.log(solve('abracadabra', 50)); // ""

/* 
Explanation:

Convert the string to an array – This allows for efficient in-place modification.

Iterate through 'a' to 'z' – Ensures we remove characters in alphabetical order.

Remove characters from left to right – Loops through the array, replacing characters with '' until k characters are removed.

Stop early – If k reaches zero, exit the loop early for efficiency.

Rejoin the array into a string – Returns the modified string.
*/
