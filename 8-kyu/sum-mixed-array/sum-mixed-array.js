function sumMix(x) {
  // Inside reduce, num * 1 is used to convert any string element in the array to a number.
  // If 'num' is already a number, num * 1 will just return the same number.
  // If it fails to convert, it will return NaN
  return x.reduce((sum, num) => (sum += num * 1), 0);

  // --Other ways to convert a string to a number--
  // 1. Using the Number() function:
  //    Example: Number("123") returns 123
  // 2. Using the parseInt() function:
  //    Example: parseInt("123") returns 123
  // 3. Using the unary plus operator (+):
  //    Example: +"123" returns 123
  // 4. Multiplying the string by the number 1 (as used in this function):
  //    Example: "123" * 1 returns 123
  // 5. Dividing the string by the number 1:
  //    Example: "123" / 1 returns 123
  // 6. Subtracting the number 0 from the string:
  //    Example: "123" - 0 returns 123
  // 7. Using the double bitwise NOT operator (~~):
  //    Example: ~~"123" returns 123
}
