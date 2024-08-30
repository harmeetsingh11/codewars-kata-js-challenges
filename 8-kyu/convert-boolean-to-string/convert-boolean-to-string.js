// SOLUTION 1: using inbuilt toString() method

function booleanToString(b) {
  return b.toString();
}

// SOLUTION 2: using template literal conversion or string interpolation

// In this solution, the boolean value b is converted to a string by embedding it within a template literal.
// When the template literal is evaluated, the boolean is automatically converted to its string representation ("true" or "false").
function booleanToString(b) {
  return `${b}`;
}
