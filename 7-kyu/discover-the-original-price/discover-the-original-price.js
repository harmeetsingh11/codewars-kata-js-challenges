function discoverOriginalPrice(salePrice, discountPercentage) {
  // Calculate the original price using the formula
  const originalPrice = salePrice / (1 - discountPercentage / 100);
  // Return the price rounded to two decimal places
  return Math.round(originalPrice * 100) / 100;
}

// Example
console.log(discoverOriginalPrice(75, 25)); // Output: 100.00

/* 
Explanation:

Formula:
To find the original price, we divide the sale price by the remaining percentage of the price after applying the discount:
Original Price=Sale Price/(1−Discount Percentage/100)

Rounding:
JavaScript's Math.round function is used to round the result to two decimal places:
Multiply the result by 100 to shift the decimal point two places to the right.
Round it to the nearest integer.
Divide by 100 to shift the decimal point back to its original position.
*/
