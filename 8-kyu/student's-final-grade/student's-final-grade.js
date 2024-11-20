function finalGrade(exam, projects) {
  // Check if the exam grade is greater than 90 or projects are more than 10
  if (exam > 90 || projects > 10) return 100;

  // Check if the exam grade is greater than 75 and projects are at least 5
  if (exam > 75 && projects >= 5) return 90;

  // Check if the exam grade is greater than 50 and projects are at least 2
  if (exam > 50 && projects >= 2) return 75;

  // If none of the above conditions are met, return 0
  return 0;
}
