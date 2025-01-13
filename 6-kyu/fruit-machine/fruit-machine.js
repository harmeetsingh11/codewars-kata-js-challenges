function fruit(reels, spins) {
  // Scoring map based on the rules
  const scoreMap = {
    Wild: [100, 10, null],
    Star: [90, 9, 18],
    Bell: [80, 8, 16],
    Shell: [70, 7, 14],
    Seven: [60, 6, 12],
    Cherry: [50, 5, 10],
    Bar: [40, 4, 8],
    King: [30, 3, 6],
    Queen: [20, 2, 4],
    Jack: [10, 1, 2],
  };

  // Extract the result symbols from the reels based on the spins
  const results = spins.map((spin, i) => reels[i][spin]);

  // Count occurrences of each symbol
  const counts = results.reduce((acc, symbol) => {
    acc[symbol] = (acc[symbol] || 0) + 1;
    return acc;
  }, {});

  // Convert counts object to an array of entries for easier processing
  const entries = Object.entries(counts);

  // Handle scoring based on the rules
  if (entries.length === 1) {
    // All three symbols are the same
    const symbol = entries[0][0];
    return scoreMap[symbol][0];
  } else if (entries.length === 2) {
    // Two of the same symbol and one different
    const [symbol1, count1] = entries[0];
    const [symbol2, count2] = entries[1];
    const sameSymbol = count1 === 2 ? symbol1 : symbol2;
    const otherSymbol = count1 === 2 ? symbol2 : symbol1;

    if (otherSymbol === 'Wild') {
      // Two of the same and one Wild
      return scoreMap[sameSymbol][2];
    }
    // Two of the same without a Wild
    return scoreMap[sameSymbol][1];
  }

  // No matching symbols
  return 0;
}

// Examples
const reel1 = [
  'Wild',
  'Star',
  'Bell',
  'Shell',
  'Seven',
  'Cherry',
  'Bar',
  'King',
  'Queen',
  'Jack',
];
const reel2 = [
  'Wild',
  'Star',
  'Bell',
  'Shell',
  'Seven',
  'Cherry',
  'Bar',
  'King',
  'Queen',
  'Jack',
];
const reel3 = [
  'Wild',
  'Star',
  'Bell',
  'Shell',
  'Seven',
  'Cherry',
  'Bar',
  'King',
  'Queen',
  'Jack',
];
const spins = [5, 5, 5];

const result = fruit([reel1, reel2, reel3], spins);
console.log(result); // Output: 50

/* 
Explanation:

Scoring Map:
The scoreMap holds the scores for each symbol based on the three possible scenarios.

Extract Symbols:
Use the spins array to determine the stopped symbol for each reel.

Count Occurrences:
Create an object to count the occurrences of each symbol in the results.

Handle Cases:
If there's only one unique symbol, return the highest score for three matches.
If there are two symbols, check if one is "Wild" and calculate the score accordingly.
If no matches exist, return 0.

Efficiency:
The function runs in O(n), where n is the number of reels, making it very efficient.
*/
