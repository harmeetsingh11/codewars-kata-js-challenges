function dashatize(num) {
  // Convert number to string and replace odd digits with '-digit-'
  return String(num)
    .replace(/([13579])/g, '-$1-') // Add dashes around each odd digit
    .replace(/--+/g, '-') // Replace multiple dashes with a single dash
    .replace(/^-|-$/g, ''); // Remove leading or trailing dashes
}

/* 
Explanation:

Convert to String: We convert num to a string to handle each digit individually (using String(num)).

Add Dashes Around Odd Digits:
The regex /([13579])/g matches any odd digit.
The replace method inserts dashes before and after each odd digit using -$1-.

Remove Extra Dashes:
/--+/g matches multiple dashes together (e.g., --) and replaces them with a single dash (-).

Trim Leading and Trailing Dashes:
replace(/^-|-$/g, '') removes any leading or trailing dash from the final result.
*/
