function likes(names) {
  // Handle cases based on the number of names in the array
  switch (names.length) {
    case 0:
      return 'no one likes this'; // If no one liked it
    case 1:
      return `${names[0]} likes this`; // One person liked it
    case 2:
      return `${names[0]} and ${names[1]} like this`; // Two people liked it
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`; // Three people liked it
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`; // More than three people liked it
  }
}

/* 
Explanation:

Handle Different Cases:
case 0: If the array is empty ([]), return "no one likes this".
case 1: If there's one person in the array, return the format "Name likes this".
case 2: If two people liked it, return "Name1 and Name2 like this".
case 3: If three people liked it, return "Name1, Name2, and Name3 like this".
default: If there are more than three people, return "Name1, Name2, and X others like this", where X is the total number of additional people beyond the first two.

Efficient Handling:
The solution avoids unnecessary loops and uses template literals for concise string interpolation, making it both efficient and easy to read.

*/
