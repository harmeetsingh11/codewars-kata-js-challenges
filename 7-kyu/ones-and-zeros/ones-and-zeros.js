const binaryArrayToNumber = (arr) => {
  const binaryString = arr.join('');
  return parseInt(binaryString, 2);
};
