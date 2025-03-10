function rolldiceSumProb(sum, dice) {
  // Function to count the ways to achieve the target sum with given dice
  function countWays(dice, target, currentSum = 0) {
    if (dice === 0) return currentSum === target ? 1 : 0;
    let count = 0;
    for (let i = 1; i <= 6; i++) {
      if (
        currentSum + i + (dice - 1) <= target &&
        currentSum + i + (dice - 1) * 6 >= target
      ) {
        count += countWays(dice - 1, target, currentSum + i);
      }
    }
    return count;
  }

  // Total possible outcomes
  const totalOutcomes = 6 ** dice;

  // Count successful ways and calculate probability
  return countWays(dice, sum) / totalOutcomes;
}

// Test cases
console.log(rolldiceSumProb(11, 2)); // 0.0555555555 (1/18)
console.log(rolldiceSumProb(8, 2)); // 0.13888888889 (5/36)
console.log(rolldiceSumProb(8, 3)); // 0.09722222222 (7/72)
console.log(rolldiceSumProb(22, 3)); // 0

/* 
### Explanation:
1. **Recursive Approach**: We use recursion to find all possible ways to get the target sum with the given number of dice.
2. **Base Case**: If no dice are left (`dice === 0`), we check if `currentSum` equals `target`.
3. **Pruning**: We optimize by ensuring that adding the lowest (`1 * remaining dice`) and highest (`6 * remaining dice`) possible sums can still reach the target.
4. **Probability Calculation**: We divide the number of successful outcomes by the total possible outcomes (`6^dice`).
*/
