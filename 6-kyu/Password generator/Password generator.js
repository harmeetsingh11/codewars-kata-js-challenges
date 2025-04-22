function generatePassword() {
  // Character sets
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const allChars = lower + upper + digits;

  // Random password length between 6 and 20
  const length = Math.floor(Math.random() * 15) + 6;

  // Ensure at least one of each required character type
  let password = [
    lower[Math.floor(Math.random() * lower.length)],
    upper[Math.floor(Math.random() * upper.length)],
    digits[Math.floor(Math.random() * digits.length)],
  ];

  // Fill the rest of the password with random alphanumeric characters
  for (let i = 3; i < length; i++) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  // Shuffle password to avoid predictable pattern (first 3 are guaranteed types)
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
}

console.log(generatePassword()); // Example: "aZ1b2C4"

/*
### **How it works:**
- Selects a password length between 6–20.
- Guarantees at least one lowercase, one uppercase, and one digit.
- Fills the rest of the password with random characters from all valid types.
- Uses the **Fisher-Yates shuffle** to randomize the character order, increasing entropy.
- Ensures the password is **alphanumeric** only, with good character distribution.
*/
