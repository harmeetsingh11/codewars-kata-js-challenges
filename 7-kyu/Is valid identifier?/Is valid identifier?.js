function isValidIdentifier(str) {
  // Regular expression explanation:
  // ^           - Start of string
  // [a-zA-Z_$]  - First character must be a letter (a-z or A-Z), underscore (_), or dollar sign ($)
  // [\w$]*      - Rest of the characters can be word characters (letters, digits, underscore) or dollar sign
  // $           - End of string
  return /^[a-zA-Z_$][\w$]*$/.test(str);
}

console.log(isValidIdentifier('i')); // true
console.log(isValidIdentifier('wo_rd')); // true
console.log(isValidIdentifier('b2h')); // true
console.log(isValidIdentifier('1i')); // false
console.log(isValidIdentifier('wo rd')); // false
console.log(isValidIdentifier('!b2h')); // false
