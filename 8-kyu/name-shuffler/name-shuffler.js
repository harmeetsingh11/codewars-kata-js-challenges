function nameShuffler(str) {
  // Split the string by space, reverse the array, and join it back to form "last first"
  return str.split(' ').reverse().join(' ');
}

/* 
Explanation:

str.split(' '): Splits the input string into an array of words (e.g., "john McClane" becomes ["john", "McClane"]).

.reverse(): Reverses the array order (e.g., ["john", "McClane"] becomes ["McClane", "john"]).

.join(' '): Joins the reversed array back into a single string with a space in between, resulting in "McClane john".
*/
