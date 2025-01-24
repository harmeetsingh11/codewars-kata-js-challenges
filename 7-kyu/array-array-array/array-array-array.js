function calculateScore(x) {
  // Check if both values are numbers
  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    const score = x[0] + x[1]; // Sum the numbers
    return Array(score).fill(x); // Create an array with 'score' sub-arrays of x
  }

  // Check if one value is a number
  if (typeof x[0] === 'number') return Array(x[0]).fill(x); // Repeat 'x[0]' times
  if (typeof x[1] === 'number') return Array(x[1]).fill(x); // Repeat 'x[1]' times

  // If neither value is a number, return 'Void!'
  return 'Void!';
}

console.log(calculateScore(['a', 3])); // [['a', 3], ['a', 3], ['a', 3]]
console.log(calculateScore([2, 3])); // [[2, 3], [2, 3], [2, 3], [2, 3], [2, 3]]
console.log(calculateScore([2, 'b'])); // [[2, 'b'], [2, 'b']]
console.log(calculateScore(['a', 'b'])); // 'Void!'

/* 
Explanation:

Input Validation:
The function first checks if both values in x are numbers and calculates their sum as the score.
If only one value is a number, it uses that value as the score.
If neither value is a number, it returns 'Void!'.

Creating the Array:
The Array(score).fill(x) creates an array of length score, where each element is the array x.

Edge Cases:
Handles cases where x contains non-numeric values or both values are numbers.
Returns 'Void!' when neither value is a number.
*/
