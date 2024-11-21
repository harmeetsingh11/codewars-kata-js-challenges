function past(h, m, s) {
  // Calculate total milliseconds since midnight:
  // 1 hour = 3600000 milliseconds (60 * 60 * 1000)
  // 1 minute = 60000 milliseconds (60 * 1000)
  // 1 second = 1000 milliseconds
  return h * 3600000 + m * 60000 + s * 1000;
}
