function searchStrings(query, strings) {
  // Convert the query to lowercase for case-insensitive comparison
  const lowerQuery = query.toLowerCase();

  // Filter strings that contain the query substring, ignoring case
  const result = strings.filter((str) =>
    str.toLowerCase().includes(lowerQuery)
  );

  // Return the filtered result or ["Empty"] if no matches are found
  return result.length ? result : ['Empty'];
}

// Example
console.log(searchStrings('me', ['home', 'milk', 'Mercury', 'fish'])); // Output: ["home", "Mercury"]
console.log(searchStrings('z', ['home', 'milk', 'Mercury', 'fish'])); // Output: ["Empty"]

/* 
Explanation:

Case-insensitive comparison:
The query is converted to lowercase (query.toLowerCase()), and each string in the array is also converted to lowercase during comparison. This ensures that the search is case-insensitive.

Filtering:
The .filter() method iterates through the array and includes only the strings that contain the query as a substring (str.toLowerCase().includes(lowerQuery)).

Handling no matches:
If the filtered array is empty (result.length === 0), the method returns ["Empty"]. Otherwise, it returns the array of matched strings.
*/
