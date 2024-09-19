function correct(string) {
  // The function takes a string as input and corrects certain characters that may have been misinterpreted.

  // Replace all occurrences of '5' with 'S'
  return (
    string
      .replace(/5/g, 'S')
      // Replace all occurrences of '0' with 'O'
      .replace(/0/g, 'O')
      // Replace all occurrences of '1' with 'I'
      .replace(/1/g, 'I')
  );
}
