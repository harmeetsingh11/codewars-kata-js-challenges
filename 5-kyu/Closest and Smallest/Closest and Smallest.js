function closest(strng) {
  if (!strng) return [];

  // Convert string to array of numbers with their weights and indices
  const numbers = strng.split(' ').map((num, index) => {
    const weight = [...num].reduce((sum, digit) => sum + Number(digit), 0);
    return [weight, index, Number(num)];
  });

  // Sort by weight first, then by index
  numbers.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let minDiff = Infinity;
  let result = [];

  // Find the closest pair
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i][0] - numbers[i - 1][0];
    if (diff < minDiff) {
      minDiff = diff;
      result = [numbers[i - 1], numbers[i]];
    }
  }

  return result;
}

// test cases
console.log(closest('103 123 4444 99 2000')); // [[2, 4, 2000], [4, 0, 103]]
console.log(closest('80 71 62 53')); // [[8, 0, 80], [8, 1, 71]]
console.log(closest('444 2000 445 544')); // [[13, 2, 445], [13, 3, 544]]

/* Explanation:
1. **Edge Case Handling**: If the input string is empty, return an empty array.
2. **Compute Weights**: Convert the input string into an array of `[weight, index, number]`, where weight is the sum of the digits of each number.
3. **Sort the Array**: Sort primarily by weight, and secondarily by index.
4. **Find Closest Pair**: Iterate through the sorted array to find the pair with the smallest difference.
5. **Return Result**: The two closest numbers are returned in the required format.

This approach ensures efficiency (`O(n log n)`) due to sorting and is concise with clear logic. 
*/
