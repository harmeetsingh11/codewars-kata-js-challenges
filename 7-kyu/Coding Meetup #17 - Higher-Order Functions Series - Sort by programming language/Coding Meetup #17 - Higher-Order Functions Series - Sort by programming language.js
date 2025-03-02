function sortDevelopers(list) {
  return list.sort(
    (a, b) =>
      a.language.localeCompare(b.language) ||
      a.firstName.localeCompare(b.firstName)
  );
}

// Test case
var list1 = [
  {
    firstName: 'Nikau',
    lastName: 'R.',
    country: 'New Zealand',
    continent: 'Oceania',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Precious',
    lastName: 'G.',
    country: 'South Africa',
    continent: 'Africa',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 30,
    language: 'C',
  },
  {
    firstName: 'Agustin',
    lastName: 'V.',
    country: 'Uruguay',
    continent: 'Americas',
    age: 19,
    language: 'JavaScript',
  },
];

console.log(sortDevelopers(list1));

/*
### Explanation:
1. **`sort()` method**: Sorts the array in-place.
2. **`localeCompare()`**:
   - `a.language.localeCompare(b.language)`: Sorts by programming language alphabetically.
   - If the languages are the same (`||` operator ensures fallback), `a.firstName.localeCompare(b.firstName)` sorts by first name.
3. **Concise & Efficient**: 
   - `localeCompare()` is optimized for string comparison.
   - Uses a single `sort()` call with a two-level comparison, making it optimal.  

This approach ensures the list is sorted first by language and then by first name if languages are the same.
*/
