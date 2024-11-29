function aliasGen(first, last) {
  // Check if the first character of both first and last names is a letter
  if (!/^[A-Z]/i.test(first) || !/^[A-Z]/i.test(last)) {
    return 'Your name must start with a letter from A - Z.';
  }

  // Get the uppercase first letter of each name
  const firstInitial = first[0].toUpperCase();
  const lastInitial = last[0].toUpperCase();

  // Generate and return the alias using the objects
  return `${firstName[firstInitial]} ${surname[lastInitial]}`;
}

/* 
Explanation:

Input Validation:
The ^[A-Z]/i regular expression checks if the first character is a letter (case-insensitive).
If either the first name or last name doesn't start with a letter, it returns the error message.

The expression !/^[A-Z]/i is a regular expression (regex) combined with a logical NOT operator (!). Here's a breakdown of its components:

1. /^[A-Z]/i
/.../: Encloses the regular expression.
^: Indicates the start of the string. This ensures the regex checks only the first character of the string.
[A-Z]: Matches any uppercase letter from A to Z.
i: A flag that makes the regex case-insensitive, so it matches both uppercase (A-Z) and lowercase (a-z) letters.
This regex checks if the first character of a string is a letter (ignoring case).

2. ! (NOT operator)
! negates the result of the regex test.
If the first character of the string matches a letter (A-Z or a-z), the result of the regex is true, and ! makes it false.
If the first character does not match a letter, the result of the regex is false, and ! makes it true.

Uppercasing the Initials:
Convert the first letter of the first and last names to uppercase using .toUpperCase(). This ensures the alias lookup works regardless of the input case.

Alias Lookup:
Use the first character of each name to access the corresponding value from the firstName and surname objects.
Construct and return the alias by combining the values with a space in between.
*/
