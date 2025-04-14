function calculate(num1, operator, num2) {
  // Check if the operator is valid
  if (
    operator === '+' ||
    operator === '-' ||
    operator === '*' ||
    operator === '/'
  ) {
    // Handle division by zero
    if (operator === '/' && num2 === 0) {
      return null; // Can't divide by zero
    }

    // Perform the operation based on the operator
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return null; // Default case (although this won't be hit due to the earlier check)
    }
  }

  // Return null if operator is not valid
  return null;
}

// Test cases
console.log(calculate(2, '+', 4)); // Should return 6
console.log(calculate(6, '-', 1.5)); // Should return 4.5
console.log(calculate(-4, '*', 8)); // Should return -32
console.log(calculate(49, '/', -7)); // Should return -7
console.log(calculate(8, 'm', 2)); // Should return null
console.log(calculate(4, '/', 0)); // Should return null

/*
### Explanation:
1. **Check for valid operator**: First, the function checks if the operator is one of the allowed values (`+`, `-`, `*`, `/`). If it's not, it immediately returns `null`.
2. **Handle division by zero**: If the operator is `/` and the second number is `0`, we return `null` because division by zero is not allowed.
3. **Perform the operation**: Based on the operator, the corresponding arithmetic operation is performed using a `switch` statement. This ensures the function is clean and efficient.
4. **Return the result**: If a valid operation is performed, the result is returned. Otherwise, `null` is returned for any invalid cases.
*/
