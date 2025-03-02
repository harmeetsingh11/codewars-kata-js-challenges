function calculateBill(plates) {
  // Count the number of red plates by filtering out spaces and getting the length
  const count = plates.replace(/ /g, '').length;

  // Calculate the total cost: $2 per plate, but every 5th one is free
  return (count - Math.floor(count / 5)) * 2;
}

// Test cases
console.log(calculateBill('rr')); // 4
console.log(calculateBill('rr rrr')); // 8
console.log(calculateBill('rrrrr rrrrr')); // 16

/* 
### Explanation:
1. **Remove Spaces**: Since condiments (spaces) are free, we remove them using `.replace(/ /g, '')`.
2. **Count Red Plates**: Get the length of the filtered string to determine the number of red plates.
3. **Calculate Cost**:
   - Each plate costs $2.
   - Every 5th plate is free, so we subtract `Math.floor(count / 5)` from the total count.
   - Multiply the final count by $2 to get the total cost.
*/
