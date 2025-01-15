function isAlphabeticalOrder(str) {
  // Convert the string into an array of characters and sort them alphabetically.
  // Compare the sorted array (joined back into a string) with the original string.
  return str === [...str].sort().join('');
}

console.log(isAlphabeticalOrder('kata')); // false
console.log(isAlphabeticalOrder('ant')); // true
console.log(isAlphabeticalOrder('abc')); // true
console.log(isAlphabeticalOrder('cba')); // false

/* 
Explanation:

Convert the string to an array:
[...str] creates an array of characters from the input string. For example, "kata" becomes ['k', 'a', 't', 'a'].

Sort the array alphabetically:
The .sort() method arranges the array's characters in ascending alphabetical order. For example, ['k', 'a', 't', 'a'] becomes ['a', 'a', 'k', 't'].

Join the array back into a string:
.join('') converts the sorted array back into a string, like "aakt".

Compare the original string with the sorted string:
If the original string matches the sorted string, it means the characters are already in alphabetical order, and we return true. Otherwise, we return false.

Efficiency:
Time Complexity: 
O(nlogn), where n is the length of the string, due to the sorting operation.

Space Complexity: 
O(n), as we create a new array with the characters of the string.
*/
