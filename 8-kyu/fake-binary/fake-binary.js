function fakeBin(x) {
  // Split the input string 'x' into an array of individual characters (digits)
  return (
    x
      .split('')
      // Use map to transform each digit: if the digit is less than 5, replace it with '0', otherwise replace it with '1'
      .map((digit) => (digit < 5 ? '0' : '1'))
      // Join the array back into a single string and return the result
      .join('')
  );
}
