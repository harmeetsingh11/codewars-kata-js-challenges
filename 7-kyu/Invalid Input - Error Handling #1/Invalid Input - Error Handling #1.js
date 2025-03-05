function getCount(str) {
  // Define vowels set for quick lookup
  const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

  // If input is not a string, return default result
  if (typeof str !== 'string') return { vowels: 0, consonants: 0 };

  // Convert string to lowercase and filter out non-alphabet characters
  const letters = str.toLowerCase().replace(/[^a-z]/g, '');

  // Count vowels and consonants
  let vowels = 0,
    consonants = 0;
  for (const char of letters) {
    vowelsSet.has(char) ? vowels++ : consonants++;
  }

  return { vowels, consonants };
}

console.log(getCount('test')); // { vowels: 1, consonants: 3 }
console.log(getCount('tEst')); // { vowels: 1, consonants: 3 }
console.log(getCount('    ')); // { vowels: 0, consonants: 0 }
console.log(getCount()); // { vowels: 0, consonants: 0 }
console.log(getCount(12345)); // { vowels: 0, consonants: 0 }
console.log(getCount('hello world')); // { vowels: 3, consonants: 7 }

/*
### Explanation:
1. **Validate input** – If `str` is not a string, return `{ vowels: 0, consonants: 0 }`.
2. **Normalize the input** – Convert `str` to lowercase for case insensitivity.
3. **Filter only alphabetic characters** – Remove non-alphabetic characters using `.replace(/[^a-z]/g, '')`.
4. **Count vowels and consonants** – Iterate through the cleaned string, using a `Set` for fast vowel lookup.
5. **Return the result** – The function returns an object with `vowels` and `consonants` count.
*/
