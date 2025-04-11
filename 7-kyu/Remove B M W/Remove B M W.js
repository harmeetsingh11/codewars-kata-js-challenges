function removeBMW(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    // If not, throw the specific error
    throw new Error('This program only works for text.');
  }

  // Use regex to remove all instances of B, M, W (both uppercase and lowercase)
  // [BMWbmw] matches any one of the letters; the 'g' flag means global replacement
  return str.replace(/[BMWbmw]/g, '');
}

console.log(removeBMW('Big Mysterious Wheels')); // Output: "ig ysterious heels"
console.log(removeBMW('This is a test')); // Output: "This is a test"
console.log(removeBMW(123)); // Throws Error: This program only works for text.
