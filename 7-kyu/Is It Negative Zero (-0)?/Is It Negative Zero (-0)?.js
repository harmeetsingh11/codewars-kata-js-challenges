function isNegativeZero(n) {
  // Return true if the number is -0, false otherwise
  return Object.is(n, -0);
}

/* 
Explanation:

Object.is(): This method is used to check if two values are the same, including distinguishing between +0 and -0. This is more reliable than using the strict equality operator (===) because === considers +0 and -0 to be equal, while Object.is() treats them as distinct values.

Input: The function expects a number, and it will return true if the number is -0 and false otherwise.
*/
