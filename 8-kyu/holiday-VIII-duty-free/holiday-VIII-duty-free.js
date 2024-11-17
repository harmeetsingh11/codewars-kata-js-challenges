function dutyFree(normPrice, discount, holidayCost) {
  // Calculate savings per bottle
  const savingsPerBottle = (normPrice * discount) / 100;
  // Calculate the number of bottles needed to cover the holiday cost
  // Math.floor is used to round down to the nearest integer
  return Math.floor(holidayCost / savingsPerBottle);
}

/* 
Explanation of the Code:

Calculate savings per bottle:
The savings for one bottle are calculated using the formula (normPrice * discount) / 100, where normPrice is the original price and discount is the percentage discount.

Determine the required number of bottles:
To determine how many bottles are needed to cover the cost of the holiday, divide holidayCost by savingsPerBottle.
Use Math.floor to round down the result to the nearest integer, as fractional bottles cannot be purchased.

Return the result:
The result is the number of bottles required to offset the holiday cost.
*/
