function capitalize(str, indices) {
  // Convert string to an array for easy manipulation
  let strArr = str.split('');

  // Iterate over the indices array
  indices.forEach((index) => {
    // Check if the index is valid within the string length
    if (index >= 0 && index < strArr.length) {
      // Capitalize the character at the specified index
      strArr[index] = strArr[index].toUpperCase();
    }
  });

  // Join the array back into a string and return the result
  return strArr.join('');
}
