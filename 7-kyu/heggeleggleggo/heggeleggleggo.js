function eggTalk(str) {
  // Use a regular expression to replace each consonant (both upper and lower case)
  // A consonant is any letter except vowels (a, e, i, o, u)
  return str.replace(/([^aeiou\s])/gi, '$1egg');
}

console.log(eggTalk('hello')); // heggeleggleggo
console.log(eggTalk('eggs')); // egegggeggsegg
console.log(eggTalk('FUN KATA')); // FeggUNegg KeggATeggA

/*
### Explanation:

- `/([^aeiou\s])/gi`:
  - `[^aeiou\s]` matches any character that is **not** a vowel or space (i.e., a consonant).
  - `g` makes it match **globally** across the string.
  - `i` makes it **case-insensitive** (matches both uppercase and lowercase letters).

- `'$1egg'` replaces each matched consonant (`$1`) with itself followed by `'egg'`.
*/
