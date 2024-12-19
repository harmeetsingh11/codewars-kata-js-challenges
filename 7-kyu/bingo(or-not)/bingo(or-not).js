function bingo(numbers) {
  // Convert 'BINGO' to its corresponding letter numbers: B = 2, I = 9, N = 14, G = 7, O = 15
  const bingoNumbers = [2, 9, 14, 7, 15];

  // Use a Set for efficient lookup
  const numberSet = new Set(numbers);

  // Check if all required numbers are present in the input array
  const hasAllBingoNumbers = bingoNumbers.every((num) => numberSet.has(num));

  // Return "WIN" if all numbers are present, otherwise "LOSE"
  return hasAllBingoNumbers ? 'WIN' : 'LOSE';
}

// Example
console.log(bingo([2, 9, 14, 7, 15, 3, 6, 10, 21, 1])); // Output: "WIN"
console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: "LOSE"

/* 
Explanation:

bingoNumbers Array:
This array contains the numerical representation of the letters "B", "I", "N", "G", and "O".

Set for Lookup:
The input numbers are converted into a Set for O(1) average time complexity for lookups.

every Method:
The every method checks if all elements in the bingoNumbers array are present in the Set.

Ternary Operator:
The function returns "WIN" if all required numbers are found; otherwise, it returns "LOSE".
*/
