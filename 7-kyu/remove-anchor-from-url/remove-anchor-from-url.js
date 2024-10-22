function removeUrlAnchor(url) {
  // Split the URL at the anchor '#' symbol and return the part before it
  return url.split('#')[0];
}

/* 
Explanation:

split('#'):
The split method is used to divide the string into an array of substrings. It breaks the URL at the # symbol.
If the URL contains a #, it creates an array with two parts:
The part before # (which we want to keep).
The part after # (which we discard).
If no # exists, the entire URL remains as a single item in the array.

[0]:
We return the first element of the array ([0]), which is the portion of the URL before the anchor.

This solution is very efficient, with a time complexity of O(n) where n is the length of the string, as it only splits the string once. It's also concise, using a single line to accomplish the task.
*/
