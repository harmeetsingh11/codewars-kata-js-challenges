function mormonMissionaries(starting, reach, target, missions = 0) {
  // Base case: if starting number has already reached or exceeded the target
  if (starting >= target) return missions;

  // Recursive case: calculate new number of Mormons after one mission
  return mormonMissionaries(
    starting + starting * reach,
    reach,
    target,
    missions + 1
  );
}

// Test cases
console.log(mormonMissionaries(10, 3, 9)); // 0
console.log(mormonMissionaries(40, 2, 120)); // 1
console.log(mormonMissionaries(20000, 2, 7000000000)); // 12

/* 
### Explanation:
1. **Base Case**: If `starting` is already greater than or equal to `target`, return the current mission count (`missions`).
2. **Recursive Case**: Each round, all Mormons convert `reach` new followers, increasing their number to `starting + (starting * reach)`. The function calls itself with the updated values, incrementing the mission count by 1.
3. **Efficiency**: This solution is logarithmic in nature (`O(log target)` complexity) because the population grows exponentially, making it highly efficient.
4. **Conciseness**: Using a default parameter (`missions = 0`) eliminates the need for additional setup, keeping the function clean and readable.
*/
