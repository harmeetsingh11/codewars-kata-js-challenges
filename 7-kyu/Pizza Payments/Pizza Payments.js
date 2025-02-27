function michaelPays(cost) {
  // If the cost is less than €5, Michael pays the full amount
  if (cost < 5) return parseFloat(cost.toFixed(2));

  // Kate contributes 1/3 of the price, but at most €10
  let kateContribution = Math.min(cost / 3, 10);

  // Michael pays the rest
  let michaelPayment = cost - kateContribution;

  // Return Michael's payment rounded to two decimal places
  return parseFloat(michaelPayment.toFixed(2));
}

console.log(michaelPays(4)); // 4.00 (Michael pays full)
console.log(michaelPays(10)); // 6.67 (Kate contributes 3.33)
console.log(michaelPays(30)); // 20.00 (Kate contributes max 10)
console.log(michaelPays(5)); // 3.33 (Kate contributes 1.67)

/*
### Explanation:
1. If the pizza costs less than €5, Michael pays the full amount.
2. Otherwise, Kate contributes either:
   - 1/3 of the pizza price **or**
   - At most €10, whichever is smaller.
3. Michael pays the remaining amount.
4. The result is rounded to two decimal places using `.toFixed(2)` and converted back to a number with `parseFloat`.
*/
