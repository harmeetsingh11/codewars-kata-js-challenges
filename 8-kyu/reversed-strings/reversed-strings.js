function solution(str) {
  // Split the input string into an array of characters
  return (
    str
      .split('')

      // Reverse the order of the characters in the array
      .reverse()

      // Join the reversed array of characters back into a string
      .join('')
  );
}
