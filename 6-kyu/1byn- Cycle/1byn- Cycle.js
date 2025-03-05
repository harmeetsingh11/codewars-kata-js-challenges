function cycleLength(n) {
  // Check if n is coprime with 10 (i.e., gcd(n, 10) should be 1)
  if (n % 2 === 0 || n % 5 === 0) return -1;

  let remainder = 1,
    length = 0;
  const seenRemainders = new Map();

  // Perform long division and track remainder positions
  while (!seenRemainders.has(remainder)) {
    seenRemainders.set(remainder, length);
    remainder = (remainder * 10) % n;
    length++;

    // If remainder becomes 0, there's no cycle
    if (remainder === 0) return -1;
  }

  // Cycle length is the difference between current position and first occurrence
  return length - seenRemainders.get(remainder);
}

console.log(cycleLength(5)); // -1
console.log(cycleLength(13)); // 6
console.log(cycleLength(21)); // 6
console.log(cycleLength(27)); // 3
console.log(cycleLength(33)); // 2
console.log(cycleLength(37)); // 3
console.log(cycleLength(94)); // -1
console.log(cycleLength(22)); // -1

/* 
### Explanation:
1. **Coprime Check**: If `n` is divisible by `2` or `5`, it shares a factor with `10`, so it has a terminating decimal expansion (no cycle). We return `-1`.
2. **Long Division Simulation**:
   - Use `remainder = 1` (since we're computing `1/n`).
   - Track remainders using a `Map` to detect cycles.
   - Multiply remainder by `10`, divide by `n`, and track the remainder.
   - If a remainder repeats, the cycle length is determined by the difference in indices.
   - If remainder becomes `0`, return `-1` (indicating no cycle).
3. **Efficiency**: Runs in `O(n)` in the worst case, but usually much faster.
*/
