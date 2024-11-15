function getAge(inputString) {
  // Convert the first character of the input string to an integer and return it
  return parseInt(inputString[0]);
}

/* 
Explanation:
Access the First Character: Since the age is always the first character of the string, we can access it directly with inputString[0].
Convert to Integer: We use parseInt() to convert this character to an integer.
Return the Result: The result is the girl's age as an integer between 0 and 9.
*/
