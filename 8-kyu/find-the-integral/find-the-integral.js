function integrate(coefficient, exponent) {
  // Calculate the new coefficient as coefficient / (exponent + 1)
  const newCoefficient = coefficient / (exponent + 1);

  // Increment the exponent by 1
  const newExponent = exponent + 1;

  // Return the result as a string in the format "Cx^E"
  return `${newCoefficient}x^${newExponent}`;
}

/* 
Explanation:

Integration Rule:
The integration rule for monomials is:
∫Cx^dx= (C/n+1)x^n+1
 
C is the coefficient, and n is the exponent.

Steps:
Calculate the new coefficient: coefficient / (exponent + 1)
Increment the exponent by 1: exponent + 1

Formatting:
Combine the simplified coefficient and incremented exponent into the format "Cx^E".

Edge Cases:
Handles all valid positive integers for coefficients and exponents.
*/
