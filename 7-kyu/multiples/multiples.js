function checkNumber(x) {
  // Using a ternary operator to handle all conditions in a single return statement
  return x % 3 === 0 && x % 5 === 0
    ? 'BangBoom'
    : x % 3 === 0
    ? 'Bang'
    : x % 5 === 0
    ? 'Boom'
    : 'Miss';
}

// test cases
console.log(checkNumber(105)); // "BangBoom"
console.log(checkNumber(9)); // "Bang"
console.log(checkNumber(25)); // "Boom"
console.log(checkNumber(7)); // "Miss"

/* 
Explanation:

Check for divisibility by both 3 and 5 first → If x is divisible by both, return "BangBoom".
Check for divisibility by 3 → If true, return "Bang".
Check for divisibility by 5 → If true, return "Boom".
If none of the above conditions are met → Return "Miss".
*/
