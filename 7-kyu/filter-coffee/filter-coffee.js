// @param {number} budget - The maximum amount you can spend.
// @param {number[]} prices - Array of coffee bean prices.
// @returns {string} - Sorted prices within budget as a comma-separated string.

function search(budget, prices) {
  // Filter prices within budget, sort them in ascending order, and join as a string.
  return prices
    .filter((price) => price <= budget) // Select only prices within budget.
    .sort((a, b) => a - b) // Sort prices in ascending order.
    .join(','); // Convert the array to a comma-separated string.
}

console.log(search(10, [5, 15, 10, 3, 7])); // Output: "3,5,7,10"

/* 
Explanation:
Filter: We use .filter() to keep only prices less than or equal to the budget.
Sort: The .sort((a, b) => a - b) ensures the remaining prices are ordered numerically in ascending order.
Join: Finally, .join(",") converts the sorted array into a single string with prices separated by commas.
*/
