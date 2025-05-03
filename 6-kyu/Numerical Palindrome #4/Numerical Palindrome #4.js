function palindrome(num) {
  // Check for invalid input
  if (!Number.isInteger(num) || num < 0) return 'Not valid';

  // Single digit numbers are not considered palindromes
  if (num < 10) num = 10;

  // Helper function to check if a number is a palindrome
  const isPalindrome = (n) => {
    const str = n.toString();
    return str === str.split('').reverse().join('');
  };

  // If the number is already a palindrome, return it
  if (isPalindrome(num)) return num;

  let lower = num - 1;
  let upper = num + 1;

  // Expand outward to find closest palindrome
  while (true) {
    const lowerIsPalindrome = isPalindrome(lower);
    const upperIsPalindrome = isPalindrome(upper);

    if (lowerIsPalindrome && upperIsPalindrome) {
      return upper; // Return larger one if both found at same distance
    }
    if (upperIsPalindrome) return upper;
    if (lowerIsPalindrome) return lower;

    lower--;
    upper++;
  }
}

console.log(palindrome(8)); // 11
console.log(palindrome(281)); // 282
console.log(palindrome(1029)); // 1001
console.log(palindrome(1221)); // 1221
console.log(palindrome('1221')); // "Not valid"
