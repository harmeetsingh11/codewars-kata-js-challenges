function findChildren(santasList, children) {
  // Use a Set to remove duplicates and filter children present in Santa's list
  return [
    ...new Set(children.filter((child) => santasList.includes(child))),
  ].sort(); // Sort the final list alphabetically
}

const santasList = ['Sam', 'sAm', 'Alice', 'Tom'];
const children = ['Tom', 'alice', 'Sam', 'Sam', 'sAm'];
console.log(findChildren(santasList, children));
// Output: ['Sam', 'Tom', 'sAm']

/* 
Explanation:

Filtering Children on Santa's List:
children.filter(child => santasList.includes(child)): This filters out only the children who are present in Santa's list. The includes method ensures case-sensitive comparison.

Removing Duplicates:
Wrapping the filtered result in new Set() removes duplicates, as a Set only allows unique values.

Sorting:
Convert the Set back into an array using the spread operator ([...new Set()]) and apply the .sort() method to sort the names alphabetically.

Result:
A sorted, case-sensitive list of children present in Santa's list, with no duplicates.
*/
