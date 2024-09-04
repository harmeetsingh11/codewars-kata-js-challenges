function countSmileys(arr) {
  // Join array elements into a single string because match() is for strings, not arrays
  const str = arr.join('');

  // Define a regular expression pattern to match valid smiley faces
  // [:;] matches either ':' or ';' as eyes
  // [-~]? optionally matches a '-' or '~' as a nose. The '-' or '~' is optional.
  // [)D] matches either ')' or 'D' as the mouth
  const facePattern = /[:;][-~]?[)D]/g;

  // Match smiley faces using the pattern and return the count
  // Use an empty array if no matches are found to prevent errors
  return (str.match(facePattern) || []).length;
}
