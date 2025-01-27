class Song {
  // Constructor initializes the song's title, artist, and a set to track unique listeners
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = new Set(); // Using a Set for efficient storage and lookup
  }

  // Method to calculate how many new listeners the song has gained
  howMany(people) {
    const initialCount = this.listeners.size;

    // Add each person to the Set after converting their name to lowercase
    people.forEach((person) => this.listeners.add(person.toLowerCase()));

    // Return the difference between the new size of the Set and the initial size
    return this.listeners.size - initialCount;
  }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// Day 1
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn'])); // Output: 5

// Day 2
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])); // Output: 2

// Day 3
console.log(mountMoose.howMany(['John', 'joHN', 'carl'])); // Output: 0

/* 
Explanation of the Code:

Class Initialization:
The Song class has a constructor that initializes the title, artist, and a Set named listeners.
A Set is used because it automatically handles unique values, making it ideal for tracking listeners.

Case-Insensitive Handling:
All names are converted to lowercase using .toLowerCase() before adding them to the Set to ensure case insensitivity.

Tracking New Listeners:
The size of the Set is stored in initialCount before adding the new names.
After adding all names, the difference between the new size and initialCount gives the count of new listeners.

Efficiency:
Adding elements to a Set and checking for duplicates both run in O(1) average time complexity.
This makes the solution highly efficient, even for large arrays of names.

Edge Cases:
Duplicate names within the same day are ignored due to the Set.
Names with different cases (e.g., "John" and "john") are treated as the same listener.
*/
