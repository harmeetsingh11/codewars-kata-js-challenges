class List {
  countSpecDigits(integersList, digitsList) {
    // Convert all numbers to string and join them into one big string
    const allDigits = integersList.join('').replace(/-/g, '');

    // Map over digitsList and count occurrences in allDigits
    return digitsList.map((digit) => [
      digit,
      (allDigits.match(new RegExp(digit, 'g')) || []).length,
    ]);
  }
}

const l = new List();
console.log(l.countSpecDigits([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])); // [(1, 3), (3, 2)]
console.log(l.countSpecDigits([-18, -31, 81, -19, 111, -888], [1, 8, 4])); // [(1, 7), (8, 5), (4, 0)]
console.log(l.countSpecDigits([-77, -65, 56, -79, 6666, 222], [1, 8, 4])); // [(1, 0), (8, 0), (4, 0)]

/* 
Explanation:
1. Convert all numbers to a single string and remove `-` signs.
2. Iterate over `digitsList` and use regex to count occurrences of each digit in the concatenated string.
3. Return the result as a list of tuples.
*/
