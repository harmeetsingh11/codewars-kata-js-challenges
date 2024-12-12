function convertSeconds(seconds) {
  // Calculate hours by integer division of seconds by 3600
  const hours = Math.floor(seconds / 3600);

  // Calculate remaining seconds after extracting hours, then convert to minutes
  const minutes = Math.floor((seconds % 3600) / 60);

  // Return the formatted string
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

// Examples
console.log(convertSeconds(3600)); // "1 hour(s) and 0 minute(s)"
console.log(convertSeconds(3500)); // "0 hour(s) and 58 minute(s)"
console.log(convertSeconds(323500)); // "89 hour(s) and 51 minute(s)"

/* 
Explanation:

Math.floor:
Used to ignore any remaining seconds and ensure the result is an integer.

Calculating Hours:
Divide the input seconds by 3600 (number of seconds in an hour).

Calculating Minutes:
Use the modulo operator (%) to get the remaining seconds after hours are calculated, then divide by 60 to convert to minutes.

String Interpolation:
Construct the output string using template literals for clarity and readability.
*/
