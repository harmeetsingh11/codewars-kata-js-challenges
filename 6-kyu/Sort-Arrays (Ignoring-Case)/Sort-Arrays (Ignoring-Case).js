function sortStringsCaseInsensitive(arr) {
  // Use the Array.prototype.sort() method with a custom comparator
  return arr.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
  );
}

console.log(sortStringsCaseInsensitive(['Hello', 'there', "I'm", 'fine'])); // ["fine", "Hello", "I'm", "there"]
console.log(sortStringsCaseInsensitive(['C', 'd', 'a', 'B'])); // ["a", "B", "C", "d"]

/* 
Explanation:

Custom Comparator:
The sort() method allows passing a custom comparator function. Here, we use a.localeCompare(b) to compare two strings alphabetically.
The localeCompare function handles internationalization and is case-insensitive when sensitivity: 'base' is specified.

localeCompare Parameters:
The second parameter undefined ensures the method uses the default locale.
The sensitivity: 'base' option makes the comparison ignore case and accents, treating "a" and "A" equally.

Efficiency:
The sort() method has a time complexity of O(nlogn), which is optimal for sorting arrays.
localeCompare is efficient for string comparison, especially for case-insensitive sorting.
*/
