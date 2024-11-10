String.prototype.digit = function () {
  // Check if the string has a length of 1 and is a digit (between '0' and '9')
  return /^\d$/.test(this);
};

/* 
Explanation:

Regex Check:
We use a regular expression /^\d$/ to check if the string consists of exactly one digit (\d matches any digit from '0' to '9').
^ and $ ensure that the string starts and ends with only one character, so it matches only a single digit.

Using test:
.test(this) checks if the current string (referred to by this) matches the pattern. If it does, it returns true; otherwise, it returns false.
*/
