function reverseWords(str) {
  // Split the string by spaces, filter out empty strings, and reverse the array
  return str.trim().split(/\s+/).reverse().join(' ');
}

/* 
Explanation:

str.trim(): Removes any leading and trailing whitespace from the input string.
split(/\s+/): Splits the string into an array of words using a regular expression (/\s+/), which matches one or more whitespace characters. This handles any extra spaces between words effectively.
reverse(): Reverses the order of elements (words) in the array.
join(' '): Joins the reversed array back into a single string with a single space between each word.
*/
