// Base Human class
class Human {
  constructor(name) {
    this.name = name; // Each human has a name
  }
}

// Man class inherits from Human
class Man extends Human {
  constructor(name = 'Adam') {
    super(name); // Man has a name, default to "Adam"
  }
}

// Woman class inherits from Human
class Woman extends Human {
  constructor(name = 'Eve') {
    super(name); // Woman has a name, default to "Eve"
  }
}

// God class to create Adam and Eve
class God {
  /**
   * @returns {Human[]}
   */
  static create() {
    // Return an array with instances of Man and Woman
    return [new Man(), new Woman()];
  }
}

/* 
Explanation:

Human Class:
This is the base class that defines the common property name for all humans.

Man and Woman Classes:
These subclasses extend Human and inherit its name property. They default to the names "Adam" and "Eve", respectively, but you could pass other names if desired.

God Class:
The static method create is defined to return an array of length 2. It creates one instance of Man and one of Woman, which are subclasses of Human.
The method is marked with @returns {Human[]} in the comment to indicate that it returns an array of Human instances.
*/
