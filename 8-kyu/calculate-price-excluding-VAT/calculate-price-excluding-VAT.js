function calculateOriginalPrice(priceWithVAT) {
  // If input is null or undefined, return -1 as an error value
  if (priceWithVAT == null) return -1;

  // VAT rate is 15%
  const VAT_RATE = 0.15;

  // Calculate the original price (price without VAT)
  const originalPrice = priceWithVAT / (1 + VAT_RATE);

  // Round to 2 decimal places and return
  return parseFloat(originalPrice.toFixed(2));
}

/* 
Explanation:

Null Check:
If the input priceWithVAT is null (or undefined), the function returns -1 immediately as a signal for invalid input.

VAT Rate:
The VAT rate is defined as a constant (0.15) since it's fixed and doesn't change.

Formula:
The original price is calculated using the formula:
Original Price=Price with VAT/(1+VAT Rate)

This formula reverses the VAT addition process.

Rounding:
JavaScript's toFixed(2) ensures the result is rounded to 2 decimal places, and parseFloat converts the string result of toFixed back into a number.
*/
