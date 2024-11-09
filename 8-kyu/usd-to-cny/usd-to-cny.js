function usdcny(usd) {
  // Convert USD to CNY by multiplying with 6.75, format to 2 decimal places, and append 'Chinese Yuan'
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}
