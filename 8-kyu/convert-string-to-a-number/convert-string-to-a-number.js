const stringToNumber = function (str) {
  // Method 1: Using multiplication by 1 (this method coerces the string to a number)
  return str * 1;
};

// Other ways to convert a string to a number:

// Method 2: Using Number() constructor
// return Number(str);

// Method 3: Using the unary plus (+) operator
// return +str;

// Method 4: Using parseInt() (for converting to an integer)
// return parseInt(str, 10);

// Method 5: Using parseFloat() (for converting to a float)
// return parseFloat(str);

// Method 6: Implicit coercion with arithmetic (subtraction with 0)
// return str - 0;
