function printArray(arr) {
  // Use the join method to convert the array elements into a comma-separated string
  return arr.join(',');
}

/* 
Explanation:
join() Method:
The join() method is built into JavaScript arrays. It converts an array into a string, with each element separated by the specified delimiter (in this case, a comma ,).
This works efficiently for any array type, including arrays of booleans, numbers, strings, objects, or even nested arrays, as join() simply converts each element to a string and then concatenates them.
 */
