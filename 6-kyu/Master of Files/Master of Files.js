// Add the isAudio method to String prototype
String.prototype.isAudio = function () {
  // Match: only letters in filename + . + one of the valid audio extensions
  return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this);
};

// Add the isImage method to String prototype
String.prototype.isImage = function () {
  // Match: only letters in filename + . + one of the valid image extensions
  return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
};

console.log('holiday.jpeg'.isImage()); // true
console.log('party.mp3'.isAudio()); // true
console.log('img123.png'.isImage()); // false (numbers not allowed)
console.log('song.MP3'.isAudio()); // false (extension must be lowercase)

/*
Explanation:
- ^ and $ ensure the whole string is matched from start to end.
- [a-zA-Z]+ allows only letters in the filename (Bill doesn't allow numbers/punctuation).
- \. matches the literal dot before the extension.
- (ext1|ext2|...) matches any one of the allowed extensions (case-sensitive lowercase).
- .test(this) tests the current string value.
*/
