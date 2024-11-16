var quote = function (fighter) {
  // Normalize the input to lowercase for case-insensitive comparison
  return fighter.toLowerCase() === 'george saint pierre'
    ? 'I am not impressed by your performance.'
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

/* 
Explanation:

Normalize Input:
Use .toLowerCase() to convert the fighter name to lowercase. This ensures the comparison is case-insensitive regardless of how the name is provided (e.g., "George Saint Pierre" or "geOrGe saiNT pieRRE").

Ternary Operator:
Check if the normalized fighter matches "george saint pierre".
If true, return "I am not impressed by your performance."
Otherwise, return "I'd like to take this chance to apologize.. To absolutely NOBODY!".
*/
