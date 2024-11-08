function mango(quantity, price) {
  // Calculate total cost by charging for only 2 out of every 3 mangoes
  return (quantity - Math.floor(quantity / 3)) * price;
}

/* 
Explanation:

Calculate the Paid Mangoes:
For every 3 mangoes, you only pay for 2 due to the "3 for 2" offer.
Math.floor(quantity / 3) gives the number of free mangoes (one for every group of three).
Subtract this from the total quantity to get the number of mangoes you actually pay for: quantity - Math.floor(quantity / 3).

Calculate Total Cost:
Multiply the number of paid mangoes by the price per mango to get the total cost.
*/
