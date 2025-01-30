function calculate(str) {
  // Replace "plus" with "+" and "minus" with "-" to simplify the operations
  str = str.replace(/plus/g, '+').replace(/minus/g, '-');

  // Use eval to evaluate the mathematical expression in the string
  return String(eval(str)); // Convert the result back to a string
}

console.log(calculate('1plus2plus3plus4')); // "10"
console.log(calculate('1plus2plus3minus4')); // "2"

/* 
Explanation:

Replace "plus" and "minus": The replace() method is used to convert the words "plus" and "minus" into their respective mathematical symbols, "+" and "-". This makes the string a valid expression for evaluation.

Evaluate the expression: The eval() function is used to evaluate the resulting string as a mathematical expression. This function automatically handles the operations of addition and subtraction.

Return the result: The result is converted back to a string using String() to ensure the output is in the required format.
*/
