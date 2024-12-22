// Add the property `usersAnswer` to every object in the array `questions`
questions.forEach((question) => {
  question.usersAnswer = null; // Initialize `usersAnswer` with `null`
});

/* 
Explanation:

forEach Method:
Iterates through each object in the questions array.
It's suitable for this task as we don't need to return a new array but rather modify the existing one.

Adding the Property:
For each object (question), we simply assign a new property usersAnswer with the value null.
*/
