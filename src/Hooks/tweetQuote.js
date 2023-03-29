const tweetQuote = (quoteText, quoteAuthor = '') => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=
  ‟${quoteText}‟ + ${quoteAuthor}`;
  window.open(twitterUrl, '_blank');
};

export default tweetQuote;
