// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {
    quote:
      "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: 150,
    tag: "Stoicism"
  },
  {
    quote:
      "The purpose of life is finding the largest burden that you can bear and bearing it.",
    source: "Jordan Peterson",
    citation: "12 Rules for Live",
    year: 2018,
    tag: "Self-help"
  },
  {
    quote: "Love your family, work super hard, live your passion.",
    source: "Gary Vaynerchuck",
    citation:
      "Gary Vaynerchuck, Crush It!: Why Now Is the Time to Cash In on Your Passion",
    year: 2009,
    tag: "Hustle"
  },
  {
    quote:
      "But man is not made for defeat. A man can be destroyed but not defeated",
    source: "Ernest Hemingway"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing",
    source: "Socrates",
    tag: "Philosophy"
  }
];

// Create random number
function createRandomNumber(numberUpTo) {
  return Math.floor(Math.random() * numberUpTo);
}

// Randomly change the background color of the page
function changeBackground() {
  // Create random numbers
  let r = createRandomNumber(255);
  let g = createRandomNumber(255);
  let b = createRandomNumber(255);
  let bodyElement = document.body;
  // Update body css style
  bodyElement.style.backgroundColor = "rgb( " + r + ", " + g + ", " + b + ")";
}

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
  let randomIndex = createRandomNumber(array.length);
  console.log(`Get random quote index is: ${randomIndex}`)
  let randomQuote = array[randomIndex];
  return randomQuote;
}

// Create the printQuote function and name it printQuote
function printQuote() {
  quote = getRandomQuote(quotes);
  let stringOfQuoteProperties = "";
  stringOfQuoteProperties += '<p class="quote"> ' + quote.quote +" </p>" + '<p class="source"> ' + quote.source;
  
  if (quote.citation !== undefined) {
    stringOfQuoteProperties +=
      '<span class="citation"> ' + quote.source + " </span>";
  }
  if (quote.year !== undefined) {
    stringOfQuoteProperties += '<span class="year"> ' + quote.year + " </span>";
  }
  if (quote.tag !== undefined) {
    stringOfQuoteProperties += '<p class="tag"> ' + quote.tag;
  }
  
  stringOfQuoteProperties += " </p>";

  document.getElementById("quote-box").innerHTML = stringOfQuoteProperties;
  changeBackground();
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Print a new quote every 20 seconds
window.setInterval(printQuote, 20000);