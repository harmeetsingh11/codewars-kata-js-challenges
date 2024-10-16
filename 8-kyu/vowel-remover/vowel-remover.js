function shortcut(string) {
  // Use replace with a regular expression to remove lowercase vowels
  return string.replace(/[aeiou]/g, '');
}
