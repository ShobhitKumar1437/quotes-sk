const quotes = require("./quotes");

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
module.exports = {
  getRandomQuote,
  allQuotes: quotes,
};