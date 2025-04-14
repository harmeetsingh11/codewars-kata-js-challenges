function greet(name) {
  // Check if name is a falsy value (null, undefined, empty string, etc.)
  if (!name) return null;

  // Return the greeting string
  return `hello ${name}!`;
}

console.log(greet('Niks')); // "hello Niks!"
console.log(greet('')); // null
console.log(greet(null)); // null
