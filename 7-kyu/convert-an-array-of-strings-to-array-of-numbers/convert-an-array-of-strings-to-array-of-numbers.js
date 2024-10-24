function toNumberArray(stringArray) {
  // Use the map method to convert each string to a number
  return stringArray.map(Number);
}

/* 
Explanation:

map() Method:
The map() function iterates over each element in the stringArray.
It applies the Number constructor to each element, which converts strings (including floats) to their numerical representation.
For example, "1" becomes 1, and "3.14" becomes 3.14.

Efficiency:
The map() method runs in O(n) time complexity, where n is the length of the input array. It creates a new array with each element converted to a number, ensuring the operation is efficient and concise.
*/
