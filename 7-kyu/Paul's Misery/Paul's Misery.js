function paul(x) {
  // Define points mapping
  const points = { kata: 5, 'Petes kata': 10, life: 0, eating: 1 };

  // Calculate total misery score
  let score = x.reduce((sum, activity) => sum + points[activity], 0);

  // Determine misery level
  return score < 40
    ? 'Super happy!'
    : score < 70
    ? 'Happy!'
    : score < 100
    ? 'Sad!'
    : 'Miserable!';
}

/*
Explanation:
1. **Mapping Activities to Points**  
   - A dictionary (`points`) is used to store activity values for quick lookup.
   
2. **Calculating the Misery Score Efficiently**  
   - The `reduce()` function iterates over `x`, summing up points efficiently in **O(n) time complexity**.

3. **Determining the Mood in a Concise Way**  
   - A chained ternary operator (`? :`) is used for clean and compact condition checks.

*/
