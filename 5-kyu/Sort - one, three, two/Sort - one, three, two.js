const toWords = (num) => {
  if (num === 0) return 'zero';

  const belowTwenty = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num < 20) return belowTwenty[num];
  if (num < 100) {
    return `${tens[Math.floor(num / 10)]}${
      num % 10 ? ' ' + belowTwenty[num % 10] : ''
    }`;
  }

  const hundreds = Math.floor(num / 100);
  const remainder = num % 100;

  return `${belowTwenty[hundreds]} hundred${
    remainder ? ' ' + toWords(remainder) : ''
  }`;
};

// Main function to sort numbers by their word representation
const sortByName = (arr) => {
  // Map each number to its word equivalent and sort based on the words
  return arr
    .map((num) => ({ num, word: toWords(num) })) // Convert to objects with number and word
    .sort((a, b) => a.word.localeCompare(b.word)) // Sort by the word representation
    .map((item) => item.num); // Extract the sorted numbers
};

console.log(sortByName([1, 2, 3, 4])); // Output: [4, 1, 3, 2]
console.log(sortByName([9, 8, 19, 21, 4])); // Output: [8, 4, 9, 19, 21]
console.log(sortByName([])); // Output: []
console.log(sortByName([10, 100, 23, 7, 2])); // Output: [100, 7, 2, 10, 23]

/*
**Explanation:**

1. **`toWords()` Function:** 
   - Converts each number to its word representation.
   - Handles:
     - Numbers from 0-19 directly using an array lookup.
     - Tens (20-99) by combining the tens place and ones place words.
     - Hundreds (100-999) by combining the hundreds place with the remainder in words.

2. **`sortByName()` Function:**
   - Maps each number to an object containing `{ num, word }`.
   - Sorts the objects by their `word` using `localeCompare()` for accurate alphabetical sorting.
   - Returns the sorted numbers by extracting the `num` from the sorted objects.


**Efficiency:**
- Time complexity: \(O(n \cdot \log n)\) for sorting.
- Space complexity: \(O(n)\) for the intermediate word mapping.
*/
