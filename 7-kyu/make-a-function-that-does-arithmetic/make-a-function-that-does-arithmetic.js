function arithmetic(a, b, operator) {
  // Using a switch case to handle the four possible operations based on the operator
  switch (operator) {
    case 'add':
      return a + b; // If operator is "add", return sum of a and b
    case 'subtract':
      return a - b; // If operator is "subtract", return a minus b
    case 'multiply':
      return a * b; // If operator is "multiply", return product of a and b
    case 'divide':
      return a / b; // If operator is "divide", return division of a by b
    default:
      return null; // Return null if an unknown operator is provided
  }
}
