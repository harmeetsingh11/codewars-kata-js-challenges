function breakMoney(amount) {
  // Array of bill denominations, starting from $1 to $100
  const denominations = [1, 5, 10, 20, 50, 100];
  let result = [0, 0, 0, 0, 0, 0]; // Initialize an array for the number of bills of each denomination

  // Loop through each denomination, starting from the largest (100) to the smallest (1)
  for (let i = denominations.length - 1; i >= 0; i--) {
    // Find how many bills of the current denomination can fit into the amount
    result[i] = Math.floor(amount / denominations[i]);
    // Update the remaining amount
    amount %= denominations[i];
  }

  return result; // Return the array of bills
}

console.log(breakMoney(365)); // Output: [0, 1, 1, 0, 1, 3]
console.log(breakMoney(217)); // Output: [2, 1, 1, 0, 0, 2]

/*Explanation:
1. **`denominations` array**: This stores the available bill denominations in descending order, starting from $100 to $1.
2. **`result` array**: This keeps track of the number of bills for each denomination. Initially, all values are set to 0.
3. **Looping through denominations**: The loop starts from the largest denomination (`$100`) and works down to the smallest (`$1`).
   - **`Math.floor(amount / denominations[i])`**: This calculates how many bills of the current denomination fit into the remaining amount.
   - **`amount %= denominations[i]`**: This updates the remaining amount after subtracting the value of the bills.
4. **Returning the result**: Once the loop is complete, the `result` array holds the breakdown of the bills and is returned.

*/
