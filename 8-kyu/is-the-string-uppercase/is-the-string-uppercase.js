String.prototype.isUpperCase = function () {
  // Compare the string with its uppercase version
  // If they are the same, it means there are no lowercase letters
  return this.toString() === this.toUpperCase();
};

// This solution is both concise and efficient, operating in linear time with respect to the length of the string (O(n)), where n is the number of characters in the string.
