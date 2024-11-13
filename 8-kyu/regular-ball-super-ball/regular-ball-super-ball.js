class Ball {
  constructor(ballType = 'regular') {
    // Set the ballType property to the provided argument or default to "regular" if no argument is given
    this.ballType = ballType;
  }
}

/* 
Explanation:
Class Declaration: We define a class Ball using the class keyword.
Constructor with Default Parameter:
The constructor method accepts a parameter ballType with a default value of "regular".
If no argument is provided when creating a Ball object, ballType will default to "regular".
Setting the Property:
this.ballType assigns the value of ballType to the instance property ballType, either from the provided argument or the default value.
*/
