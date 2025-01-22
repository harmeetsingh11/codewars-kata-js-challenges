function capMe(names) {
  // Use map to iterate over each name in the array
  return names.map(
    (name) =>
      // Convert the first character to uppercase and the rest to lowercase
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
}

console.log(capMe(['jo', 'nelson', 'jurie'])); // ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])); // ['Karly', 'Daniel', 'Kelsey']

/* 
Explanation

map() method:
Iterates over each element in the names array.
Returns a new array where each name is transformed.

Transformation logic:
name.charAt(0).toUpperCase():
Extracts the first character of the name and converts it to uppercase.
name.slice(1).toLowerCase():
Extracts the rest of the string starting from the second character and converts it to lowercase.
Concatenates the two results to form the desired capitalization for each name.

Efficiency:
This approach processes each name once, making it time-efficient (O(n) complexity for n names).
*/
