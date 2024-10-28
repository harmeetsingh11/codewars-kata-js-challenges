const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Regular expression breakdown:
// ^                 - Start of string
// (?=.*[a-z])       - Ensure there is at least one lowercase letter
// (?=.*[A-Z])       - Ensure there is at least one uppercase letter
// (?=.*\d)          - Ensure there is at least one digit
// [A-Za-z\d]{6,}    - Match 6 or more alphanumeric characters (only letters and digits)
// $                 - End of string

/* 
Explanation:

Anchors:
^ and $ denote the start and end of the string to ensure the entire input is validated.

Positive Lookaheads:
(?=.*[a-z]) checks for at least one lowercase letter.
(?=.*[A-Z]) checks for at least one uppercase letter.
(?=.*\d) checks for at least one digit.
These lookaheads allow us to check for specific conditions without consuming characters in the match.

Character Class:
[A-Za-z\d]{6,} ensures the password is at least six characters long and contains only alphanumeric characters (uppercase, lowercase letters, and digits).

test Method:
regex.test(password) returns true if the password meets all criteria, otherwise false.
*/
