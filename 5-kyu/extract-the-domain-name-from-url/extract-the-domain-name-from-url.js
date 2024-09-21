// SOLUTION 1: Using Regular Expressions
function domainName(url) {
  // Regular expression to match the domain name
  // Explanation of the pattern:
  // ^               : Start of the string.
  // (?:https?:\/\/)? : Non-capturing group for matching 'http://' or 'https://'. The '?' makes the whole group optional.
  // (?:www\.)?       : Non-capturing group to match 'www.'. The '?' makes this optional.
  // ([^\/]+)         : Capturing group that matches one or more characters that are not a forward slash ('/').
  // This captures the domain name part of the URL (e.g., 'example.com' from 'https://www.example.com').
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/;

  // Match the URL against the regular expression
  const match = url.match(domainRegex);

  // Check if we got a match from the regular expression
  if (match) {
    // Split the captured domain (e.g., 'example.com') by '.' to handle subdomains
    // and return the first part (e.g., 'example')
    const domainParts = match[1].split('.');
    return domainParts[0];
  }

  // Return null if no domain name is found
  return null;
}

// SOLUTION 2: Using String Manipulation (Simpler but less robust)
function domainName(url) {
  // Remove the protocol ('https://', 'http://') and 'www.' from the URL
  // We use the replace() method to remove each part.
  // First, we replace 'https://' with an empty string.
  // Then, we replace 'http://' with an empty string.
  // Lastly, we replace 'www.' with an empty string.
  // After these replacements, we will only have the domain left.
  // Example: 'https://www.example.com' becomes 'example.com'.

  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');

  // Split the remaining string by '.' to isolate the domain name
  // and return the first part (e.g., 'example' from 'example.com').
  return url.split('.')[0];
}

// Key Differences:
// Solution 1: Regular expression approach is more robust as it can handle
// different URL structures like subdomains, URLs with or without protocols,
// and paths (e.g., 'https://sub.example.com/path').
//
// Solution 2: The string replacement approach is simpler and faster but
// only works for basic cases and does not handle complex URLs reliably.
