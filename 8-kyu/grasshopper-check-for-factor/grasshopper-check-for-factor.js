function isFactor(base, factor) {
  // A factor is a number that divides the base without leaving a remainder.
  // Use the modulo operator (%) to check if the remainder is 0.
  return base % factor === 0;
}

/*
Explanation:
Definition of Factor: A number factor is a factor of base if dividing base by factor leaves no remainder.
This is achieved by using the modulus operator (%), which returns the remainder of the division.
If base % factor === 0, factor is a factor of base.
*/
