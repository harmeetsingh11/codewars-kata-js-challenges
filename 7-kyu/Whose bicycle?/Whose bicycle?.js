function buyBicycle(diary1, diary2, diary3) {
  // Helper function to calculate the sum of marks
  const sumMarks = (diary) =>
    Object.values(diary).reduce((sum, mark) => sum + mark, 0);

  // Calculate total marks for each son
  const scores = [sumMarks(diary1), sumMarks(diary2), sumMarks(diary3)];

  // Age mapping for resolving ties
  const ages = [14, 9, 8]; // first, second, third son's age respectively

  // Find the index of the highest score, prioritizing the youngest in case of a tie
  const bestIndex = scores
    .map((score, index) => ({ score, age: ages[index], index }))
    .sort((a, b) => b.score - a.score || a.age - b.age)[0].index;

  // Return the result based on the best index
  return `I need to buy a bicycle for my ${
    ['first', 'second', 'third'][bestIndex]
  } son.`;
}

/*
Explanation:
1. **Calculate Total Marks**: We use `sumMarks` to sum the values in each diary object.
2. **Store Scores and Ages**: We create an array of scores and use a predefined age list.
3. **Find the Best Index**: 
   - We map scores to objects containing score, age, and index.
   - We sort by highest score first; if scores are tied, the youngest wins.
4. **Return the Result**: We use the best index to construct the output string.

*/
