function bitsBattle(numbers) {
  // Count total 1s in odd numbers and total 0s in even numbers
  let oddOnes = 0,
    evenZeros = 0;

  for (let num of numbers) {
    if (num === 0) continue; // Neutral number, skip
    let binary = num.toString(2);
    if (num % 2) oddOnes += binary.split('1').length - 1;
    else evenZeros += binary.split('0').length - 1;
  }

  return oddOnes > evenZeros
    ? 'odds win'
    : oddOnes < evenZeros
    ? 'evens win'
    : 'tie';
}

console.log(bitsBattle([5, 3, 14])); // "odds win"
console.log(bitsBattle([0, 4, 6, 8])); // "evens win"
console.log(bitsBattle([])); // "tie"
console.log(bitsBattle([7, 14, 3])); // "odds win"

/* 
### Explanation:
1. Initialize `oddOnes` and `evenZeros` to count the relevant bits.
2. Iterate through `numbers`:
   - If `num` is `0`, skip it.
   - Convert `num` to binary.
   - If odd (`num % 2`), count `'1'`s.
   - If even, count `'0'`s.
3. Compare counts and return the winner.

This solution is efficient (`O(n)`) and concise.
*/
