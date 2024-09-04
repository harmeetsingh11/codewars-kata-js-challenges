function digitize(n) {
  // Convert the number 'n' to a string so that we can work with each digit individually
  return (
    n
      .toString()
      // Split the string into an array of individual characters (digits)
      .split('')
      // Reverse the array so that the digits are in reverse order
      .reverse()
      // Use map to convert each character back into a number
      .map(Number)
  );
}
