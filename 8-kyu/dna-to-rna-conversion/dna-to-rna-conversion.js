function DNAtoRNA(dna) {
  // The `replace` method is used with a regular expression `/T/g`:
  // - `/T/` matches the character 'T'.
  // - The `g` flag makes sure all occurrences of 'T' in the string are replaced, not just the first one.
  // - Each 'T' is replaced with 'U'.

  return dna.replace(/T/g, 'U');
}
