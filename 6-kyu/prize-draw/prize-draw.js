function prizeDraw(st, we, n) {
  // If there are no participants, return "No participants"
  if (!st) return 'No participants';

  // Split names and map each to its winning number
  const names = st.split(',');

  // If rank `n` is greater than the number of participants, return "Not enough participants"
  if (n > names.length) return 'Not enough participants';

  // Helper function to calculate the som for a name
  const calculateSom = (name) =>
    name.length +
    [...name.toUpperCase()].reduce(
      (sum, char) => sum + (char.charCodeAt(0) - 64),
      0
    );

  // Create an array of objects with names and winning numbers
  const results = names.map((name, index) => ({
    name,
    winningNumber: calculateSom(name) * we[index],
  }));

  // Sort by winning number (descending) and then alphabetically by name (ascending)
  results.sort(
    (a, b) => b.winningNumber - a.winningNumber || a.name.localeCompare(b.name)
  );

  // Return the name at the `n - 1` index (1-based rank)
  return results[n - 1].name;
}

// Example
const names = 'COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH';
const weights = [1, 4, 4, 5, 2, 1];
const rank = 4;
console.log(prizeDraw(names, weights, rank)); // Outputs: "PauL"

/* 
Explanation:

Input Validation:
If the input string st is empty, return "No participants".
If n is greater than the number of names, return "Not enough participants".

Calculating som:
Each name's som is calculated as the length of the name plus the sum of ranks of its letters. Letters are converted to uppercase, and their rank is derived using charCodeAt(0) - 64.

Calculating Winning Numbers:
Multiply each som by the corresponding weight from the we array.

Sorting:
First, sort by the winning number in descending order.
For ties in winning numbers, sort alphabetically by the name.

Return:
Return the name of the participant at the specified rank n (adjusting for 0-based indexing).
*/
