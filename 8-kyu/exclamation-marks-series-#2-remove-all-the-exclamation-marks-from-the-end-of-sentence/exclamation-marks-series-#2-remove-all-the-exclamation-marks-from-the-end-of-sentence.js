function removeTrailingExclamationMarks(sentence) {
  // Use a regular expression to remove all exclamation marks at the end of the string
  return sentence.replace(/!+$/, '');
}

/*
Explanation:
Regular Expression:
/!+$/: Matches one or more (+) exclamation marks (!) at the end of the string ($).

replace Method:
The replace method is used to replace the matched part of the string (trailing exclamation marks) with an empty string (''), effectively removing them..
*/
