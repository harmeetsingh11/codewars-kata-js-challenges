const area_code = (message) => {
  // Use regex to match the area code inside parentheses
  const match = message.match(/\((\d{3})\)/);
  // Return the area code if found, otherwise return an empty string
  return match ? match[1] : '';
};

console.log(area_code("The supplier's phone number is (555) 867-5309")); // '555'
console.log(area_code('Call me at (123) 456-7890')); // '123'
console.log(area_code('No phone number here.')); // ''

/*
### **Explanation**
1. **Regex Pattern**: `/\((\d{3})\)/`
   - `\(` and `\)` → Matches the literal parentheses around the area code.
   - `\d{3}` → Matches exactly three digits.
   - The parentheses around `\d{3}` create a **capture group**, allowing us to extract just the area code.
2. **`message.match()`**:
   - `match()` returns an array if there's a match: 
     - `[0]` → The full match (e.g., `(555)`)
     - `[1]` → The first capture group, which is the area code itself.
   - If no match is found, it returns `null`.
3. **Ternary Operator**:
   - Returns the area code (`match[1]`) if a match is found, otherwise returns an empty string.
*/
