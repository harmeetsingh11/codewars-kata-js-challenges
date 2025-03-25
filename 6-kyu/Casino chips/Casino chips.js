const maxDays = (chips) => {
  // Sort the chips in ascending order
  chips.sort((a, b) => a - b);

  // Destructure the sorted chips into variables
  const [a, b, c] = chips;

  // If the sum of the two smallest piles is less than or equal to the largest pile,
  // you can only play for the sum of the two smaller piles days.
  if (a + b <= c) {
    return a + b;
  }

  // Otherwise, you can play for (a + b + c) / 2 days,
  // as you are picking 2 chips each day
  return Math.floor((a + b + c) / 2);
};

// Test cases
console.log(maxDays([1, 1, 1])); // ➝ 1
console.log(maxDays([1, 2, 1])); // ➝ 2
console.log(maxDays([4, 1, 1])); // ➝ 2
console.log(maxDays([3, 3, 3])); // ➝ 4
console.log(maxDays([10, 1, 2])); // ➝ 3

/*
**Explanation:**
1. **Sorting the Array:**  
   - Sorting the array makes it easy to identify the smallest, middle, and largest piles.  
   - `a` (smallest), `b` (middle), and `c` (largest).

2. **Edge Case Check:**  
   - If the sum of the two smaller piles (`a + b`) is less than or equal to the largest pile (`c`),  
     - You can only play for `a + b` days because you will run out of the smaller chips first.  

3. **Optimal Case:**  
   - Otherwise, you can play for `(a + b + c) / 2` days.  
   - This is because each day you are taking exactly 2 chips, so the maximum number of days is half the total number of chips.

4. **Time Complexity:**  
   - Sorting takes \(O(3 \cdot \log(3)) = O(1)\), which is efficient.  
   - The final result is computed in \(O(1)\) time, making this solution optimal and concise.
*/
