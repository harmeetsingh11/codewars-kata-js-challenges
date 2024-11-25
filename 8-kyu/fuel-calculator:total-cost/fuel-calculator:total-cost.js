function fuelCost(litres, pricePerLitre) {
  // Calculate the discount per litre, capping it at 25 cents
  const discount = Math.min(25, Math.floor(litres / 2) * 5) / 100;

  // Compute the total cost with discount applied
  const totalCost = litres * (pricePerLitre - discount);

  // Return the result rounded to 2 decimal places
  return Number(totalCost.toFixed(2));
}

/* 
Explanation:

Calculate Discount:
Math.floor(litres / 2) * 5: Calculates the discount in cents per litre, based on how many full 2-litre groups the input covers.
Math.min(25, ...): Caps the discount to a maximum of 25 cents.
/ 100: Converts cents to dollars.

Apply Discount:
Subtract the discount from the pricePerLitre and multiply it by litres to get the total cost.

Round to Two Decimal Places:
.toFixed(2) ensures the result is rounded to two decimal places. The Number() wrapper converts it back to a number.
*/
