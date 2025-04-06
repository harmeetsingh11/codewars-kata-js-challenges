function workNeeded(projectMinutes, freelancers) {
  // Calculate total time contributed by freelancers in minutes
  const totalFreelancerMinutes = freelancers.reduce(
    (sum, [h, m]) => sum + h * 60 + m,
    0
  );

  // Calculate how much time *you* need to work
  const remainingMinutes = projectMinutes - totalFreelancerMinutes;

  // If no work needed, return easy money
  if (remainingMinutes <= 0) return 'Easy Money!';

  // Convert remaining minutes to hours and minutes
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;

  return `I need to work ${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(
  workNeeded(400, [
    [2, 33],
    [3, 44],
  ])
); // "I need to work 0 hour(s) and 43 minute(s)"
console.log(
  workNeeded(100, [
    [2, 0],
    [0, 30],
  ])
); // "Easy Money!"

/*
### Time Complexity:
- `O(n)`, where `n` is the number of freelancers (because of the `reduce` loop).

### pace Complexity:
- `O(1)`, constant extra space (only variables used, no data structures scaled with input).
*/
