function averagePassScores(scores) {
  // Filter the scores to include only passing scores (≤ 18 demerit points)
  const passed = scores.filter((score) => score <= 18);

  // If no students passed, return the message
  if (passed.length === 0) return 'No pass scores registered.';

  // Calculate the average of passing scores
  const average = passed.reduce((sum, score) => sum + score, 0) / passed.length;

  // Return the average rounded to the nearest integer
  return Math.round(average);
}

// Test cases
console.log(averagePassScores([10, 10, 10, 18, 20, 20])); // ➞ 12
console.log(averagePassScores([15, 16, 14, 18])); // ➞ 16
console.log(averagePassScores([20, 21, 22])); // ➞ 'No pass scores registered.'
console.log(averagePassScores([])); // ➞ 'No pass scores registered.'

/*
### **Explanation:**
1. **Filtering Passing Scores:**  
   - `scores.filter(score => score <= 18)` filters the array to include only the passing scores.

2. **Handling Edge Case:**  
   - If no students pass, `passed.length === 0`, so it returns `'No pass scores registered.'`.

3. **Calculating the Average:**  
   - `reduce` sums up all the passing scores.
   - Divide the total sum by the number of passing scores to get the average.

4. **Rounding:**  
   - Use `Math.round()` to round the average to the nearest integer.

### **Efficiency:**
- **Time Complexity:** \(O(n)\) → Iterates over the array once for filtering and once for summing.  
- **Space Complexity:** \(O(p)\) → Where \(p\) is the number of passing scores, stored in the `passed` array.  
*/
