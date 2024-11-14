function sayHello(name, city, state) {
  // Join the name array with a space, then interpolate with city and state in the greeting
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

/* 
Explanation:
name.join(' '): Joins all elements in the name array with a space to create a full name string. This handles cases where the name array has one or more elements.
Template Literal: We use template literals (backticks) to format the final greeting string. This inserts the joined name, city, and state into the string with the desired punctuation and spacing.
*/
