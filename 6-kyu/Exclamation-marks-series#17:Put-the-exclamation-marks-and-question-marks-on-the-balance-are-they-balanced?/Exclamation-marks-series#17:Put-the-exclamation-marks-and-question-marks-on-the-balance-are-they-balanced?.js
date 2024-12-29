function balance(left, right) {
  // Helper function to calculate weight of a string
  const calculateWeight = (str) =>
    [...str].reduce(
      (weight, char) => weight + (char === '!' ? 2 : char === '?' ? 3 : 0),
      0
    );

  // Calculate weights for both sides
  const leftWeight = calculateWeight(left);
  const rightWeight = calculateWeight(right);

  // Compare weights and return the result
  return leftWeight > rightWeight
    ? 'Left'
    : leftWeight < rightWeight
    ? 'Right'
    : 'Balance';
}

// Examples
console.log(balance('!!', '??')); // "Right"
console.log(balance('!??', '?!!')); // "Left"
console.log(balance('!?!!', '?!?')); // "Left"
console.log(balance('!!???!????', '??!!?!!!!!!!')); // "Balance"

/* 
Explanation:

Helper Function (calculateWeight):
Converts the string into an array of characters using the spread operator ([...str]).
Uses reduce to calculate the cumulative weight of the string:
Adds 2 for each '!' and 3 for each '?'.
Defaults to 0 for other characters (if any).

Calculate Weights:
The weights of left and right strings are computed using the helper function.

Comparison and Result:
If leftWeight is greater, return "Left".
If rightWeight is greater, return "Right".
Otherwise, return "Balance".
*/
