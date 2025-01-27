function pos_average(s) {
  // Split the input string into substrings
  const substrings = s.split(', ').map((str) => str.trim());
  const n = substrings.length; // Number of substrings
  const length = substrings[0].length; // Length of each substring
  let totalPositions = 0; // Total number of positions compared
  let commonPositions = 0; // Total number of common positions

  // Compare every pair of substrings
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Compare character by character
      for (let k = 0; k < length; k++) {
        totalPositions++; // Increment total positions compared
        if (substrings[i][k] === substrings[j][k]) {
          commonPositions++; // Increment if characters are the same
        }
      }
    }
  }

  // Calculate the percentage of common positions
  return ((commonPositions / totalPositions) * 100).toFixed(10);
}

const s =
  '444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490';
console.log(pos_average(s)); // Output: 29.2592592593

/* 
Explanation:

Input Parsing:
The input string is split into an array of substrings using split(", ").
n represents the number of substrings, and length is the length of each substring (all substrings are guaranteed to be the same length).

Pairwise Comparison:
A nested loop compares each pair of substrings (i, j where j > i), ensuring no pair is compared twice.
For each character position k in the substrings, check if the characters match.

Counting Matches:
totalPositions keeps track of the total number of character positions compared across all substring pairs.
commonPositions counts how many of these positions have matching characters.

Calculating the Percentage:
The percentage of common positions is computed as (commonPositions / totalPositions) * 100 and formatted to 10 decimal places using toFixed(10).

Efficiency:
Time Complexity: 
O(n^2⋅m), where n is the number of substrings and m is the length of each substring. This is efficient for the problem constraints.
Space Complexity: 
O(n⋅m), dominated by storing the substrings.
*/
