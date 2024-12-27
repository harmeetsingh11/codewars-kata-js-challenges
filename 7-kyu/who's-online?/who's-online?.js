function getOnlineStatus(users) {
  // Return an empty object if the input array is empty
  if (!users.length) return {};

  // Initialize result object
  const status = { online: [], offline: [], away: [] };

  // Iterate over the user list and categorize them
  users.forEach(({ username, status: userStatus, lastActivity }) => {
    if (userStatus === 'offline') {
      status.offline.push(username);
    } else if (lastActivity > 10) {
      status.away.push(username);
    } else {
      status.online.push(username);
    }
  });

  // Remove empty categories from the result
  return Object.fromEntries(
    Object.entries(status).filter(([_, usernames]) => usernames.length)
  );
}

// Test case
const users = [
  { username: 'David', status: 'online', lastActivity: 10 },
  { username: 'Lucy', status: 'offline', lastActivity: 22 },
  { username: 'Bob', status: 'online', lastActivity: 104 },
];

console.log(getOnlineStatus(users));
// Output: { online: ['David'], offline: ['Lucy'], away: ['Bob'] }

/* 
Explanation:

Handle Empty Input: If the input array is empty, return an empty object immediately.

Initialize Status Object: Use an object with keys online, offline, and away to store usernames for each category.

Categorize Users: Use forEach to iterate through the users. For each user:
Add to offline if the status is offline.
Add to away if the status is online and lastActivity > 10.
Otherwise, add to online.

Remove Empty Categories: Use Object.entries and filter to remove categories with no usernames before returning the result.
*/
