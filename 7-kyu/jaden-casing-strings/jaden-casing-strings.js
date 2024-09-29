String.prototype.toJadenCase = function () {
  // Split the string into an array of words, capitalize the first letter of each word, then join them back into a single string
  return this.split(' ') // Split the string by spaces to get an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back into a single string
};
