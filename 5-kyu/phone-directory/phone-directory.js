function phone(book, num) {
  // Split the phone book into individual lines
  const lines = book.split('\n');
  let foundEntries = [];

  for (const line of lines) {
    // Check if the line contains the phone number
    if (line.includes(num)) {
      foundEntries.push(line);
    }
  }

  if (foundEntries.length === 0) {
    // If no entry contains the number
    return `Error => Not found: ${num}`;
  } else if (foundEntries.length > 1) {
    // If multiple entries contain the number
    return `Error => Too many people: ${num}`;
  }

  // Process the single found entry
  const entry = foundEntries[0];

  // Extract name (text between '<' and '>')
  const nameMatch = entry.match(/<([^>]+)>/);
  const name = nameMatch ? nameMatch[1] : '';

  // Remove the phone number and name from the entry
  let address = entry.replace(new RegExp(`\\+${num}|<${name}>`, 'g'), '');

  // Remove all non-alphanumeric characters except spaces and hyphens
  address = address
    .replace(/[^a-zA-Z0-9\s.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}

// Example usage:
const s = `
/+1-541-754-3010 156 Alphand_St. <J Steeve>
133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!
<Anastasia> +48-421-674-8974 Via Quirinal Roma
`;

console.log(phone(s, '1-541-754-3010')); // Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.
console.log(phone(s, '1-541-914-3010')); // Phone => 1-541-914-3010, Name => E Kustur, Address => 133 Green Rd NY 56423
console.log(phone(s, '48-421-674-8974')); // Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma
console.log(phone(s, '1-123-456-7890')); // Error => Not found: 1-123-456-7890

/* 
Explanation:
Splitting the Lines: The input phone book is split into lines using split('\n') for easy processing.
Filtering Lines: Lines containing the phone number are collected into foundEntries. If the number is found multiple times or not at all, appropriate error messages are returned.
Extracting Name: The regex <([^>]+)> captures the text between < and >.
Cleaning Address: The phone number and name are removed from the line, then non-alphanumeric characters are stripped, except for spaces and hyphens. Multiple spaces are reduced to a single space, and leading/trailing spaces are trimmed.
Returning the Result: The result string is formatted with the extracted phone number, name, and cleaned address.
*/
