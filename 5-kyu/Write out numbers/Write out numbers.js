// Function to convert numbers to words
function number2words(num) {
  // Arrays for number words
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const thousands = ['', 'thousand', 'million'];

  // Helper function to convert numbers < 1000
  const toWords = (n) => {
    if (n === 0) return '';
    if (n < 20) return ones[n];
    if (n < 100)
      return tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
    return (
      ones[Math.floor(n / 100)] +
      ' hundred' +
      (n % 100 ? ' ' + toWords(n % 100) : '')
    );
  };

  // Edge case for zero
  if (num === 0) return 'zero';

  // Break the number into chunks of thousands
  let result = '';
  let chunkIndex = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      result =
        toWords(chunk) +
        (thousands[chunkIndex] ? ' ' + thousands[chunkIndex] : '') +
        (result ? ' ' + result : '');
    }
    num = Math.floor(num / 1000);
    chunkIndex++;
  }

  return result.trim(); // Return the final result with extra spaces trimmed
}

// Test cases
console.log(number2words(0)); // "zero"
console.log(number2words(1)); // "one"
console.log(number2words(9)); // "nine"
console.log(number2words(17)); // "seventeen"
console.log(number2words(45)); // "forty-five"
console.log(number2words(100)); // "one hundred"
console.log(number2words(999999)); // "nine hundred ninety-nine thousand nine hundred ninety-nine"

/* 
Explanation:

Arrays Setup: Arrays for ones, tens, and thousands provide the mapping for the numbers' words.

Helper Function (toWords): Converts numbers less than 1000 to words. It handles:
Numbers less than 20 using the ones array.
Numbers between 20 and 99 using the tens array, adding a hyphen if needed.
Numbers greater than 99 by handling hundreds and recursively calling toWords for numbers less than 100.

Main Logic:
The function handles breaking the number into chunks of thousands and converts each chunk using the helper function.
It keeps track of the appropriate "thousand", "million", etc., using the thousands array.

Edge Case: If the number is 0, it directly returns "zero".
*/
