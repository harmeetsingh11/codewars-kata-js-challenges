function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  //   The total parameter represents the accumulator, and goals represents each individual element in the array.
  //   We initialize the accumulator with 0, and then add each goals value to the total.
  return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce(
    (total, goals) => total + goals,
    0
  );
}
