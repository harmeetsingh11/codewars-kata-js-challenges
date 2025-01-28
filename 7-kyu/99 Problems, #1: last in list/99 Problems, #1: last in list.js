function last(list) {
  // Return the last element if the list is not empty, otherwise return null.
  return list.length ? list[list.length - 1] : null;
}

console.log(last([1, 2, 3])); // Output: 3
console.log(last([])); // Output: null

/* 
Explanation:

list.length Check:
If the list is non-empty (list.length is truthy), proceed to access the last element.
If the list is empty (list.length is falsy), return null as specified.

list[list.length - 1]:
This accesses the last element in the array by calculating the index as list.length - 1.

Efficiency:
The solution runs in constant time O(1) because accessing the last element of an array is a direct index lookup.
*/
