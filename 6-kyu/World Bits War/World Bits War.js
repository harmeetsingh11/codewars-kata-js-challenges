function bitsWar(numbers) {
  // Initialize strength counters for even and odd numbers
  let evenStrength = 0;
  let oddStrength = 0;

  for (const num of numbers) {
    // Get absolute binary representation and count of '1's
    const strength = num.toString(2).replace(/[^1]/g, '').length;

    // Determine the sign: positive adds strength, negative subtracts
    const contribution = num < 0 ? -strength : strength;

    // Add to the appropriate side based on even or odd
    if (Math.abs(num) % 2 === 0) {
      evenStrength += contribution;
    } else {
      oddStrength += contribution;
    }
  }

  // Compare strengths and return the result
  if (oddStrength > evenStrength) return 'odds win';
  if (evenStrength > oddStrength) return 'evens win';
  return 'tie';
}

console.log(bitsWar([1, 5, 12])); // "odds win"
console.log(bitsWar([7, -3, 20])); // "evens win"
console.log(bitsWar([7, -3, -2, 6])); // "tie"

/*
### Key Points:
- Converts each number to binary with `.toString(2)`.
- Uses regex to count the number of `1`s.
- Considers negativity to flip the strength.
- Categorizes by even vs odd using absolute value `% 2`.
- Concise logic and just one loop — optimal for performance and readability.
*/
