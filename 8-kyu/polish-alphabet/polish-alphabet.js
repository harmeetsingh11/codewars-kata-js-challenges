function removePolishLetters(input) {
  // Mapping of Polish letters with diacritics to their replacements
  const diacriticsMap = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };

  // Replace each letter in the input using the map
  return input.replace(/[ąćęłńóśźż]/g, (match) => diacriticsMap[match]);
}

// Example usage
const result = removePolishLetters('Jędrzej Błądziński');
console.log(result); // Outputs: "Jedrzej Bladzinski"

/* 
Explanation:

Mapping Polish Letters:
A diacriticsMap object is created to map each Polish letter with diacritics to its plain counterpart.
Regular Expression:
A regular expression [ąćęłńóśźż] is used to match any Polish letter in the input string.

Replacement:
The replace() method is used with a callback function. For each matched letter, the corresponding plain letter is looked up in the diacriticsMap.

Efficient and Readable:
The solution leverages a hash map for fast lookups and ensures concise code.

This approach is efficient because:
The map allows constant-time lookup for replacements.
The regular expression ensures only relevant characters are processed.
*/
