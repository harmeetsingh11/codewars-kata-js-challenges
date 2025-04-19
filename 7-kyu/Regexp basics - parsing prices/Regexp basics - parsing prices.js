String.prototype.to_cents = function () {
  // Use regex to validate and extract the numeric part
  const match = this.match(/^\$(\d+)\.(\d{2})$/);

  // If match is found, convert dollars and cents to a single number (in cents)
  if (match) {
    const [, dollars, cents] = match;
    return parseInt(dollars) * 100 + parseInt(cents);
  }

  // Return null if format is invalid
  return null;
};

'$1.23'.to_cents(); // 123
'$0.99'.to_cents(); // 99
'$100.00'.to_cents(); // 10000
'$5.1'.to_cents(); // null
'5.00'.to_cents(); // null
'$5.000'.to_cents(); // null

/*
### Explanation:
- `/^\$(\d+)\.(\d{2})$/` is a regular expression that ensures:
  - The string starts with a `$`
  - Followed by one or more digits (`\d+`)
  - Then a dot `.` and **exactly two digits** (`\d{2}`)
- `match` extracts the dollar and cent parts.
- `parseInt(dollars) * 100 + parseInt(cents)` converts the value to cents.
- Returns `null` (not `undefined`) for bad formats as required.
*/
