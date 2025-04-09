function toCamelCase(str) {
  // Use regex to find all occurrences of "_" followed by a lowercase letter
  // `([a-z])` captures the character after "_"
  return str.replace(/_([a-z])/g, (_, letter) =>
    // Replace the entire match with the captured letter in uppercase
    letter.toUpperCase()
  );
}

console.log(toCamelCase('camel_case')); // "camelCase"
console.log(toCamelCase('zebulans_nightmare')); // "zebulansNightmare"
console.log(toCamelCase('get_string')); // "getString"
console.log(toCamelCase('convert_to_uppercase')); // "convertToUppercase"
console.log(toCamelCase('main')); // "main"
