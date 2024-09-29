function checkExam(array1, array2) {
  let score = 0;
  array2.forEach((_, index) => {
    array2[index] === array1[index]
      ? (score += 4)
      : array2[index] === ''
      ? (score += 0)
      : (score -= 1);
  });
  return score > 0 ? score : 0;
}
