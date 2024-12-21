const Math = {
  // Rounds to the nearest integer
  round: (num) => (num % 1 >= 0.5 ? num - (num % 1) + 1 : num - (num % 1)),

  // Rounds up to the next integer
  ceil: (num) => (num % 1 > 0 ? num - (num % 1) + 1 : num),

  // Rounds down to the nearest integer
  floor: (num) => num - (num % 1),
};

// Example
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4

/* 
Explanation:

Math.round():
Checks if the fractional part (num % 1) is greater than or equal to 0.5.
If true, it adds 1 to the integer part (num - num % 1).
Otherwise, it returns the integer part directly.

Math.ceil():
If the fractional part (num % 1) is greater than 0, it adds 1 to the integer part.
If the number is already an integer, it returns the number as is.

Math.floor():
Removes the fractional part (num % 1) from the number, leaving only the integer part.
*/
