function meeting(s) {
  return (
    s
      // Step 1: Split each name by ';', then split each full name by ':'
      .split(';')
      .map((name) => name.toUpperCase().split(':'))
      // Step 2: Map to format "(LASTNAME, FIRSTNAME)"
      .map(([first, last]) => `(${last}, ${first})`)
      // Step 3: Sort by last name first, then by first name
      .sort()
      // Step 4: Join the sorted names into a single string
      .join('')
  );
}

// Explanation:

// Split the String: We use split(';') to break the string into individual name pairs, then split each name pair by ':' to separate the first and last names.

// Convert to Uppercase: We immediately convert both the first and last names to uppercase with toUpperCase().

// Reformat Names: We reformat the names as "(LASTNAME, FIRSTNAME)" by switching the order of the elements and placing them in parentheses.

// Sort the Names: The array of formatted names is sorted alphabetically using the default string comparison (which works here since we formatted the names with the last name first).

// Join the Results: We join the sorted names into a single string without any delimiters between them.
