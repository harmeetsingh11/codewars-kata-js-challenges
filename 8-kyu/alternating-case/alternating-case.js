String.prototype.toAlternatingCase = function () {
  // Map through each character, checking if it's lowercase or uppercase, and switch accordingly
  return this.split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
};
