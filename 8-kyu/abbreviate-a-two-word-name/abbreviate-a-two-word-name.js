function abbrevName(name) {
  // Split the name into two parts, take the first letter of each, convert to uppercase, and join with a dot
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('.');
}

/*
Explanation:

name.split(' '): Splits the input string into an array of two words (e.g., ["Sam", "Harris"]).

.map(word => word[0].toUpperCase()): Maps over each word, takes the first character word[0], converts it to uppercase, and returns it as an array of initials (e.g., ["S", "H"]).

.join('.'): Joins the initials with a dot . separator to form the final result (e.g., "S.H").
*/
