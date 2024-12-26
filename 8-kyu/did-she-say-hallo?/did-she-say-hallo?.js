function validateHello(greetings) {
  // Use a case-insensitive regex to match any of the greetings
  const regex = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i;
  // Test the input string against the regex
  return regex.test(greetings);
}

// Test cases
console.log(validateHello('Hello there!')); // true
console.log(validateHello('I met someone who said ciao yesterday.')); // true
console.log(validateHello('Good evening!')); // false
console.log(validateHello('Is this czesc or not?')); // true

/* 
Explanation:

Regex Pattern:
\b: Ensures we match entire words and avoid partial matches (e.g., "Hallowen").
(hello|ciao|salut|hallo|hola|ahoj|czesc): Matches any one of the greetings in the list.
i: Makes the regex case-insensitive, so it will match "Hello", "HELLO", "hello", etc.

Efficiency:
The regex is compiled once and efficiently checks for any of the greetings in one pass.

Usage:
The .test() method checks if the string matches the regex and returns true or false.
*/
