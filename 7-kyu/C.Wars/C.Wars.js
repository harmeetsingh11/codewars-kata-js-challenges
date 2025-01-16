function getInitials(fullName) {
  // Split the full name into an array of names
  const names = fullName.split(' ');

  // Map over the names (except the last one) to get the uppercase initials
  const initials = names
    .slice(0, -1)
    .map((name) => name[0].toUpperCase())
    .join('.');

  // Capitalize the last name fully with the first letter uppercase
  const lastName = names[names.length - 1];
  const formattedLastName = lastName[0].toUpperCase() + lastName.slice(1);

  // Combine the initials and the formatted last name
  return initials ? `${initials}.${formattedLastName}` : formattedLastName;
}

// Test cases
console.log(getInitials('code wars')); // Output: "C.Wars"
console.log(getInitials('Barack hussein obama')); // Output: "B.H.Obama"
console.log(getInitials('elon musk')); // Output: "E.Musk"
console.log(getInitials('arjun')); // Output: "Arjun"

/* 
Explanation:

Splitting the Name:
The split(' ') function breaks the full name into an array of words (e.g., ["Barack", "hussein", "obama"]).

Extracting Initials:
slice(0, -1) gets all elements of the array except the last one.
.map(name => name[0].toUpperCase()) converts the first character of each name to uppercase.

Formatting the Last Name:
names[names.length - 1] retrieves the last name.
lastName[0].toUpperCase() + lastName.slice(1) capitalizes the first letter while keeping the rest of the name as is.

Combining Results:
If initials exist, concatenate them with the last name using a dot (.).
If there's no middle name or first name (e.g., only one name), the function returns just the formatted last name.

Edge Cases:
Single name input (e.g., "arjun") is handled gracefully, returning the name with the first letter capitalized.
*/
