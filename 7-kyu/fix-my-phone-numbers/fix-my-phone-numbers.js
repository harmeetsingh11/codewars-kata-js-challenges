function validatePhoneNumber(input) {
  // Remove all non-digit characters from the string
  const cleaned = input.replace(/\D/g, '');

  // Check if the cleaned string is a valid phone number
  // Must start with '0', be exactly 11 digits
  return /^0\d{10}$/.test(cleaned) ? cleaned : 'Not a phone number';
}

console.log(validatePhoneNumber('efRFS:)0207ERGQREG88349F82!')); // Output: '02078834982'
console.log(validatePhoneNumber('12345')); // Output: 'Not a phone number'

/* 
Explanation:

Cleaning the Input:
The replace(/\D/g, '') removes all non-digit characters (\D matches anything that is not a digit) from the input string.

Validating the Phone Number:
The regular expression ^0\d{10}$ ensures:
The string starts with 0 (^0).
Followed by exactly 10 digits (\d{10}).
The $ ensures the string ends after those 11 characters.

Return Result:
If the cleaned string matches the regular expression, it is a valid phone number and is returned.
Otherwise, return "Not a phone number".
*/
