function validatePIN(pin) {
  // Step 1: The regular expression `/^(\d{4}|\d{6})$/` is used to validate the PIN.
  // - `^` asserts the start of the string.
  // - `\d{4}` matches exactly 4 digits (where `\d` represents any digit and `{4}` means exactly 4 occurrences).
  // - `|` is an OR operator, meaning either match the first part (4 digits) OR the second part (6 digits).
  // - `\d{6}` matches exactly 6 digits (where `\d` represents any digit and `{6}` means exactly 6 occurrences).
  // - `$` asserts the end of the string.

  // Step 2: `.test(pin)` is a method that checks if the string `pin` matches the regular expression pattern.
  // If it matches, it returns `true`; otherwise, it returns `false`.

  return /^(\d{4}|\d{6})$/.test(pin);
}
