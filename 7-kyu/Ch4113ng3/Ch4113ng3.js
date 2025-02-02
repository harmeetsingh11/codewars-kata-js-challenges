function nerdifyString(str) {
  // Use replace method with a regular expression to substitute characters
  return str
    .replace(/[aA]/g, '4') // Replace all 'a' and 'A' with '4'
    .replace(/[eE]/g, '3') // Replace all 'e' and 'E' with '3'
    .replace(/l/g, '1'); // Replace all 'l' with '1'
}

console.log(nerdifyString('Fundamentals')); // Outputs: "Fund4m3nt41s"

/* 
Explanation:

replace(/[aA]/g, '4'): This replaces all occurrences of both lowercase and uppercase 'a' with '4'.

replace(/[eE]/g, '3'): This replaces all occurrences of both lowercase and uppercase 'e' with '3'.

replace(/l/g, '1'): This replaces all lowercase 'l' characters with '1'.

The use of the g flag in regular expressions ensures all occurrences in the string are replaced.
*/
