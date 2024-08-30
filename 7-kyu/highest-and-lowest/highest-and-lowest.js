function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
