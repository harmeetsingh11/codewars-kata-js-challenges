// Function to replace vowels with corresponding numbers
function encode(string) {
  // Replace each vowel using a regex and mapping object
  return string.replace(
    /[aeiou]/g,
    (char) => ({ a: '1', e: '2', i: '3', o: '4', u: '5' }[char])
  );
}

// Function to replace numbers with corresponding vowels
function decode(string) {
  // Replace each number using a regex and mapping object
  return string.replace(
    /[1-5]/g,
    (num) => ({ 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }[num])
  );
}

/* 
Explanation:

encode Function:
Uses replace with a regular expression /[aeiou]/g to match all lowercase vowels.
For each matched vowel, it replaces it with a number using a mapping object { a: '1', e: '2', i: '3', o: '4', u: '5' }.

decode Function:
Uses replace with a regular expression /[1-5]/g to match all numbers from 1 to 5.
For each matched number, it replaces it with the corresponding vowel using a mapping object { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }.

This approach is efficient because it performs a single pass through the string and uses concise mappings, making it both readable and fast.
*/
