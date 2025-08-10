/**
 * Calculates total bill with at least 15% tip and rounds up elegantly.
 * @param {number} bill - Positive number (restaurant bill amount)
 * @returns {number} - Bill with tip, rounded to an elegant value
 */
function addTip(bill) {
  // Step 1: Add 15% tip
  let total = bill * 1.15;

  // Step 2: Determine rounding base (elegance rule)
  // Numbers below 10 → base = 1
  // 10-99.99 → base = 5
  // 100-999.99 → base = 50
  // 1000-9999.99 → base = 500, and so on
  let base =
    total < 10 ? 1 : 5 * Math.pow(10, Math.floor(Math.log10(total)) - 1);

  // Step 3: Round up to nearest multiple of base
  return Math.ceil(total / base) * base;
}

// Example tests
console.log(addTip(1)); // 2
console.log(addTip(7)); // 9
console.log(addTip(12)); // 15
console.log(addTip(86)); // 100

/*
### **Explanation**

1. **`bill * 1.15`** → adds **exactly** 15% tip.
2. **`Math.log10(total)`** → finds the order of magnitude (number of digits - 1).
3. **`base` calculation** → chooses the correct elegant rounding step:

   * For `< 10` → step is 1
   * Else → step is `5 × 10^(digits - 2)`
4. **`Math.ceil(total / base) * base`** → rounds **up** to the nearest multiple of base.

This runs in **O(1)** time, uses **no loops**, and works for **all magnitudes** of numbers.
*/
