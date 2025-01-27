function password(password) {
  // Use regular expressions to validate the password rules
  return (
    password.length >= 8 && // Check if the password is at least 8 characters long
    /[A-Z]/.test(password) && // Ensure at least one uppercase letter
    /[a-z]/.test(password) && // Ensure at least one lowercase letter
    /\d/.test(password) // Ensure at least one number
  );
}

console.log(password('Abcd1234')); // true
console.log(password('Abcd123')); // false
console.log(password('abcd1234')); // false
console.log(password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890')); // true
console.log(password('ABCD1234')); // false
console.log(password('Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,')); // true
console.log(password('!@#$%^&*()-_+={}[]|\\:;?/>.<,')); // false

/* 
Explanation:

Password Length:
password.length >= 8 ensures the password has at least 8 characters.

Uppercase Letter Check:
/[A-Z]/.test(password) verifies the presence of at least one uppercase letter.

Lowercase Letter Check:
/[a-z]/.test(password) ensures the password contains at least one lowercase letter.

Number Check:
/\d/.test(password) confirms that at least one numeric digit is included.

Efficiency:
The solution is concise and utilizes regular expressions, making it both readable and efficient.
It performs linear scans of the string to check for each rule, ensuring minimal computational overhead.
*/
