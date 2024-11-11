function strCount(str, letter) {
  // Split the string by the letter and count the resulting segments minus 1
  return str.split(letter).length - 1;
}

/* 
Explanation:
Splitting the String: We use str.split(char) to split the string str at each occurrence of the character char.
For example, if str is "Hello" and char is "l", str.split(char) produces ["He", "", "o"].

Counting Occurrences: The number of occurrences of char is equal to the number of resulting segments minus 1.
This is because each occurrence of char creates an extra segment in the split array.
If there are no occurrences of char, split will return an array with one element (the original string), resulting in a count of 0.
*/
