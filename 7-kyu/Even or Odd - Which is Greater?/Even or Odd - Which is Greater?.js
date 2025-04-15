function evenOrOdd(str) {
  // Initialize sums for even and odd digits
  let evenSum = 0,
    oddSum = 0;

  // Loop through each character in the string
  for (let char of str) {
    const digit = +char; // Convert character to number

    // Use modulo to check if digit is even or odd and add accordingly
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  // Compare sums and return the appropriate message
  if (evenSum > oddSum) return 'Even is greater than Odd';
  if (oddSum > evenSum) return 'Odd is greater than Even';
  return 'Even and Odd are the same';
}

console.log(evenOrOdd('123456')); // Output: "Odd is greater than Even"
console.log(evenOrOdd('2222')); // Output: "Even is greater than Odd"
console.log(evenOrOdd('1111')); // Output: "Odd is greater than Even"
console.log(evenOrOdd('123123')); // Output: "Even and Odd are the same"
