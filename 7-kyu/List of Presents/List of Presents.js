function maxGifts(budget, gifts) {
  // Sort gifts in ascending order to buy the cheapest first
  gifts.sort((a, b) => a - b);

  let count = 0;

  // Iterate through sorted gifts and buy until budget is exhausted
  for (let price of gifts) {
    if (budget >= price) {
      budget -= price;
      count++;
    } else {
      break; // Stop if the next gift can't be bought
    }
  }

  return count;
}

console.log(maxGifts(20, [13, 2, 4, 6, 1])); // Output: 4

/*
### Explanation:
1. **Sorting (`O(n log n)`)**: We first sort the gift prices in ascending order to prioritize buying the cheaper ones.
2. **Iterating (`O(n)`)**: We iterate through the sorted list, deducting the price from the budget and increasing the count until the budget is insufficient.
3. **Breaking early**: The loop stops as soon as we can't afford the next item, making it efficient.

### Complexity:
- **Sorting**: \(O(n \log n)\)  
- **Loop iteration**: \(O(n)\)  
- **Overall complexity**: \(O(n \log n)\), which is optimal for this problem.
*/
