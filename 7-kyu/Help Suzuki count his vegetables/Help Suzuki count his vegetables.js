function countVegetables(str) {
  // Define valid vegetables
  const veggies = [
    'cabbage',
    'carrot',
    'celery',
    'cucumber',
    'mushroom',
    'onion',
    'pepper',
    'potato',
    'tofu',
    'turnip',
  ];

  // Create a Map to store counts
  const countMap = new Map();

  // Split the string into words and count valid vegetables
  str.split(' ').forEach((word) => {
    if (veggies.includes(word)) {
      countMap.set(word, (countMap.get(word) || 0) + 1);
    }
  });

  // Convert the map to an array of [count, vegetable] pairs
  return (
    Array.from(countMap.entries())
      .map(([veg, count]) => [count, veg])
      // Sort: by count descending, then name descending
      .sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]))
  );
}

const input =
  'onion carrot onion cabbage carrot pepper turnip tofu potato mushroom cucumber carrot turnip';
console.log(countVegetables(input));

/*
### Explanation:
- `veggies.includes(word)`: filters out non-vegetables.
- `countMap`: efficiently tracks occurrences.
- `map(([veg, count]) => [count, veg])`: flips order for the desired output format.
- `sort(...)`: sorts first by count descending, then by name descending (Z to A).
*/
