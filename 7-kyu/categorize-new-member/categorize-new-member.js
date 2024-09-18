function openOrSenior(data) {
  // Use the map function to iterate over the array 'data', which contains [age, handicap] pairs.
  // For each pair, check if the age is 55 or more AND the handicap is greater than 7.
  // If both conditions are true, return 'Senior'. Otherwise, return 'Open'.
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? 'Senior' : 'Open'
  );
}
