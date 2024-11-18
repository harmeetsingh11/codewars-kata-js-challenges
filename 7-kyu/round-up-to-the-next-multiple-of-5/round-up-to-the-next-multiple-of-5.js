function roundToNextMultipleOf5(num) {
  // Math.ceil rounds up the division result to ensure "greater than or equal"
  // Multiply by 5 to get the next multiple of 5
  return Math.ceil(num / 5) * 5;
}

/* 
Explanation:

Divide the input number by 5:
This helps determine how many complete groups of 5 fit into the number.

Use Math.ceil():
This rounds the result up to the nearest integer, ensuring we always go to the "next" multiple of 5 when needed. For example:
3 / 5 = 0.6, so Math.ceil(0.6) = 1
-2 / 5 = -0.4, so Math.ceil(-0.4) = 0

Multiply by 5:
This converts the rounded quotient back into a multiple of 5.
*/
