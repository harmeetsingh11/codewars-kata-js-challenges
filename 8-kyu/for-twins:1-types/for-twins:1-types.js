function typeCheck(variable, type) {
  // Use typeof to check the type of the variable and compare it with the provided type
  return typeof variable === type;
}

console.log(typeCheck(42, 'number')); // true

/* 
typeof Operator:
The typeof operator in JavaScript returns a string indicating the type of the operand. For example:
typeof 42 returns "number".
typeof "42" returns "string".
*/
