function initializeMiddleNames(name) {
  // Split the name into an array of words
  const parts = name.split(' ');

  // If there are two or fewer parts, return the name as is
  if (parts.length <= 2) return name;

  // Map over the name parts and initialize middle names only
  return parts
    .map((part, index) =>
      index > 0 && index < parts.length - 1 ? part[0] + '.' : part
    )
    .join(' ');
}

// Examples
console.log(initializeMiddleNames('Jack Ryan')); // 'Jack Ryan'
console.log(initializeMiddleNames('Lois Mary Lane')); // 'Lois M. Lane'
console.log(initializeMiddleNames('Dimitri')); // 'Dimitri'
console.log(initializeMiddleNames('Alice Betty Catherine Davis')); // 'Alice B. C. Davis'

/* 
Explanation

Splitting the Name: The split(' ') function breaks the name into an array of words.

Early Return for Simplicity: If the name has two or fewer parts, it's returned unchanged.

Mapping Over the Parts: For middle parts (indices between 1 and the last index), only the first character is taken and a . is added.

Joining the Parts: The array is joined back into a single string with spaces.
*/
