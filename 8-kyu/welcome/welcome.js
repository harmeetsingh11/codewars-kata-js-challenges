// Create a database object where each language is a key and the greeting is the value
const database = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
};

// Function that takes a language and returns the corresponding greeting from the database
// If the language is not found, it returns "Welcome" as a fallback
function greet(language) {
  return database[language.toLowerCase()] || 'Welcome';
}
