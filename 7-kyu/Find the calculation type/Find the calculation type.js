function calcType(a, b, res) {
  // Check for each operation and return the corresponding operation type
  if (a + b === res) return 'addition'; // Check if addition was used
  if (a - b === res) return 'subtraction'; // Check if subtraction was used
  if (a * b === res) return 'multiplication'; // Check if multiplication was used
  if (a / b === res) return 'division'; // Check if division was used
}

console.log(calcType(1, 2, 3)); // Output: "addition"
console.log(calcType(10, 5, 5)); // Output: "subtraction"
console.log(calcType(4, 3, 12)); // Output: "multiplication"
console.log(calcType(8, 2, 4)); // Output: "division"
