function simplify(poly) {
  var h = {}; // Create an object to store the simplified terms, where keys are variables and values are their coefficients.

  // Match each monomial in the input string using a regular expression and iterate over them.
  poly.match(/[+-]?[^+-]+/g).forEach((x) => {
    var m = x.match(/[a-z]+/)[0], // Extract the variables (e.g., "abc") from the monomial.
      k = x.replace(m, ''); // Extract the coefficient part by removing the variables from the monomial.

    m = m.split('').sort().join(''); // Sort the variables lexicographically (e.g., "bca" -> "abc").
    k = Number(/\d/.test(k) ? k : k + '1'); // Convert the coefficient to a number. If it's missing, default it to 1 or -1.

    h[m] = (h[m] || 0) + k; // Add the coefficient to the corresponding variable set in the object, combining like terms.
  });

  // Process the terms stored in the object to construct the simplified polynomial string.
  return Object.keys(h) // Get all variable keys from the object.
    .filter((m) => h[m]) // Exclude terms with a coefficient of 0.
    .sort(
      (
        x,
        y // Sort terms by:
      ) =>
        x.length - y.length || // 1. Increasing number of variables.
        (x < y ? -1 : 1) // 2. Lexicographic order if variable lengths are the same.
    )
    .map((m, i) => ({
      // Map each term into an object with:
      sign: h[m] < 0 ? '-' : i > 0 ? '+' : '', // 1. The sign of the coefficient.
      k: Math.abs(h[m]), // 2. The absolute value of the coefficient.
      m: m, // 3. The variable string.
    }))
    .map(
      (
        o // Map each term object into a formatted string:
      ) => o.sign + (o.k == 1 ? '' : o.k) + o.m // 1. Add the sign.
      // 2. Omit the coefficient if it is 1.
      // 3. Append the variable string.
    )
    .join(''); // Join all terms into the final simplified polynomial string.
}

/* 
Key Steps:

Extract and Sort Monomials:
Use a regular expression to split the polynomial into its individual terms (monomials).
Extract variables and coefficients separately.
Sort the variables within each term to group equivalent monomials.

Combine Like Terms:
Use an object (h) to group terms with the same variables by summing their coefficients.

Filter and Sort:
Remove terms with a zero coefficient.
Sort the terms first by the number of variables, then lexicographically.

Format the Output:
Construct the output string, handling the signs and coefficients appropriately:
No leading + for the first term.
Omit the coefficient 1 unless it's negative.



APPROACH USED IN THE SOLUTION
The approach systematically simplifies the input polynomial string by combining like terms and sorting them according to the specified rules. Here's a step-by-step breakdown of the approach:

1. Parse and Extract Monomials
The solution uses a regular expression to split the input polynomial into individual terms (monomials).
Regex Used: /[+-]?[^+-]+/g
Matches a monomial with an optional sign (+ or -) at the beginning.
Captures everything until the next + or -.
For example, "3x-yx+2xy-x" is split into:
"3x"
"-yx"
"+2xy"
"-x"

2. Process Each Monomial
For each monomial:
Extract the Variables:
Use another regex (/[a-z]+/) to extract the variable part (e.g., x, xy, abc).
Extract the Coefficient:
Remove the variable part from the monomial.
Handle cases where the coefficient is implicit:
If no number is present before the variable, default to 1 or -1.
For example:
"3x" becomes m = "x", k = 3
"-yx" becomes m = "xy" (after sorting), k = -1
"+2xy" becomes m = "xy", k = 2

3. Normalize Variables
Variables are sorted lexicographically for each monomial:
"yx" → "xy".
This ensures equivalent terms (e.g., 2xy and -yx) are grouped together.

4. Combine Like Terms
An object (h) is used to group monomials with the same variables:
Keys are the sorted variable strings (e.g., "x", "xy").
Values are the cumulative coefficients.
For example:

After processing "3x-yx+2xy-x", the object looks like:
{
  "x": 2,      // (3 - 1)
  "xy": 1      // (-1 + 2)
}

5. Filter Out Zero Coefficients
Any monomials with a coefficient of 0 are removed to simplify the output.

6. Sort Monomials
The monomials are sorted based on:
Number of Variables:
Terms with fewer variables appear first (e.g., "a" comes before "ab").
Lexicographic Order:
If two monomials have the same number of variables, they are sorted alphabetically.

7. Format the Output
The final output string is constructed:
Each term is formatted as:

Sign:
'-' if the coefficient is negative.
'+' for positive coefficients (after the first term).

Coefficient:
Omit 1 unless it's negative.

Variable String:
Append the variable string.
For example:
The object {"x": 2, "xy": 1} becomes:
"2x" → "x" (omit coefficient 1).
"xy" → "+xy".

Key Optimizations
Sorting Variables: Ensures monomials like "xy" and "yx" are treated equivalently.
Object for Grouping: Allows efficient combination of like terms.
Regex for Parsing: Handles monomial extraction cleanly without additional string manipulation.

Output Example
For input "3x-yx+2xy-x", the solution:
Splits and processes monomials: ["3x", "-yx", "+2xy", "-x"].
Normalizes and combines terms: {"x": 2, "xy": 1}.
Formats and sorts terms: "x+xy".
*/
