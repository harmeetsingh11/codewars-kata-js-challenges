function getArticle(noun) {
  // Match all vowels including umlauts using a regular expression with global & case-insensitive flags
  const vowels = (noun.match(/[aeiouäöü]/gi) || []).length;

  // Decide article based on vowel count
  if (vowels < 2) return 'das ' + noun;
  if (vowels <= 3) return 'die ' + noun;
  return 'der ' + noun;
}

console.log(getArticle('Mädchen')); // das Mädchen
console.log(getArticle('Apfel')); // die Apfel
console.log(getArticle('Universität')); // der Universität

/*
### Explanation:

* `noun.match(/[aeiouäöü]/gi)`:

  * Finds all vowel matches in the noun, including umlauts.
  * `g` flag: global (find all matches), `i` flag: case-insensitive.
  * If no matches, returns `null`, so we fall back to `[]` with `|| []`.
* `.length` counts the number of vowels.
* Then, based on the number:

  * `< 2` → `"das"`
  * `2 or 3` → `"die"`
  * `> 3` → `"der"`
* Finally, the correct article is concatenated with the original noun.
*/
