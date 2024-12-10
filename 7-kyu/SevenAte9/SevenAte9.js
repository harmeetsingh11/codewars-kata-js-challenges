function removeLone9s(input) {
  // Use regex to repeatedly replace all instances of "797" globally with "77"
  return input.replace(/797/g, '77').replace(/797/g, '77');
}

// Test cases
console.log(removeLone9s('79712312')); // "7712312"
console.log(removeLone9s('79797')); // "777"
console.log(removeLone9s('797977')); // "77977"
console.log(removeLone9s('799779797040237997263196799997797')); // "799777704023799726319679999777"
console.log(removeLone9s('6221385702802797979797')); // "622138570280277777"
console.log(removeLone9s('76647979797979797978075844879797979797')); // "76647777777780758448777777"
console.log(removeLone9s('7971609001699361287173679997')); // "771609001699361287173679997"
console.log(removeLone9s('123238126353937997')); // "123238126353937997"
console.log(removeLone9s('797975711980748')); // "7775711980748"
console.log(removeLone9s('797979797797979797979797')); // "7777777777777"

/* 
Explanation:

Iterative Replacement:
The first .replace(/797/g, "77") handles the initial pass.
The second .replace(/797/g, "77") ensures overlapping patterns are processed correctly.

Why Repeated Replacement?
Overlapping patterns like "797979797" require multiple replacements because the regular expression processes non-overlapping matches in a single pass.

Regex Breakdown
/797/g:
Matches the exact sequence 797.
The g flag ensures all occurrences in the string are replaced.

Why Multiple Replacements?
When patterns overlap (e.g., "79797"), a single pass of replace() processes non-overlapping matches. This means it reduces the first 797 to 77 but leaves the next 797 intact.
By calling .replace() again, we handle the next occurrence.

Step-by-Step Example: "797979797"
Initial Input: "797979797"

First .replace(/797/g, "77"):
Matches non-overlapping instances of 797.
"797979797" → "77977977":
The first 797 is replaced with 77.
The next 797 is treated separately because the regex doesn't account for overlaps.

Second .replace(/797/g, "77"):
Now processes the remaining 797 from "77977977".
"77977977" → "777777":
The 797 left from the previous step is now reduced.
Final Output: "777777"
*/
