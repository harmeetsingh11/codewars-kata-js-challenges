function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // Check if the entered code matches the correct code
  if (enteredCode !== correctCode) return false;

  // Convert date strings to Date objects for comparison
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  // Coupon is valid if the current date is on or before the expiration date
  return current <= expiration;
}

/* 
Explanation:

Code Validation:
The first step checks if the entered coupon code matches the correct one. If they don’t match, the function immediately returns false.

Date Conversion:
We convert the currentDate and expirationDate strings into Date objects. This allows us to compare dates directly using the <= operator.

Date Comparison:
The function checks if the current date is on or before the expiration date. If the current date is after the expiration date, it returns false; otherwise, it returns true.

This solution efficiently checks both the coupon code and date, and uses minimal logic for a concise implementation.
*/
