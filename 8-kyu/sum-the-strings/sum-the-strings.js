function sumStr(a, b) {
  // Convert the input strings to numbers, if empty string, treat it as 0
  const num1 = parseInt(a) || 0;
  const num2 = parseInt(b) || 0;

  // Sum the two numbers and convert the result back to a string
  return String(num1 + num2);
}
