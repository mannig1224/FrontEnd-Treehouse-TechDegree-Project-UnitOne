/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/*** 
  An array of objects containing quotes that we will use later in the program to cycle through them.
***/

var quotes = [
  {
     quote: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light not our darkness that most frightens us.",
     source: "Marriam Williamsom"
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.  ",
    source: "Patrick McKenzie"
  },
  {
    quote: "If civilization is to survive, we must cultivate the science of human relationships - the ability of all peoples, of all kinds, to live together, in the same world at peace.",
    source: "Franklin D. Roosevelt"
  },
  {
    quote: "The good thing about science is that it's true whether or not you believe in it. ",
    source: "Neil deGrasse Tyson",
    citation: "Brainy Quotes"
  },
  {
    quote: "For most, as long as they are happy nothing else matters, but although I believe this is true; I also believe that most humans if given the oppurtunity to care they will take it! ",
    source: "unknown",
    year: "2020",

  }
];




/***
  The function getRandomQuote will provide a random number based on the length of the quotes array. Then we will use that number to return an object
  within the array.
***/

function getRandomQuote() {
   var random = Math.floor(Math.random() * quotes.length);
   return quotes[random];

};

/***
  Every 3 seconds the quote and color functions will be called if the button isn't clicked.
***/

let quoteTimer = setInterval('printQuote();', 3000);
let colorTimer = setInterval('changeColor();', 3000);



/***
  The printQuote() function will call the getRandomQuote() function and then print it out to the html. This function
  also resets the timers.
***/

function printQuote() {
   var quote = getRandomQuote();
   var string = '';
   string += '<p class="quote">' + quote.quote + '</p>';
   string += '<p class="source">' + quote.source;
   if (typeof quote.citation !== 'undefined') {
    string += '<span class="citation">' + quote.citation  + '</span>';
  }
  if (typeof quote.year !== 'undefined') {
    string += '<span class="year">' + quote.year  + '</span>';
  }
  string += '</p>';
  document.getElementById('quote-box').innerHTML=string;

    clearInterval(quoteTimer);
    clearInterval(colorTimer);

     quoteTimer = setInterval('printQuote();', 3000);
     colorTimer = setInterval('changeColor();', 3000);

}
/***
  The changeColor function will create a hexadecimal string that we then add to the css style property of 'loadQuote'
***/
function changeColor() {
   var symbols = "0123456789ABCDEF";
   var color = "#";

   for (var i = 0; i < 6; i++){
     color += symbols[Math.floor(Math.random() * 16)];
   }
   document.body.style.background = color;
   document.getElementById('loadQuote').style.background = color;


}
/***
  listens to the button to be clicked on and calls the printQuote() function
***/
    

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  document.getElementById('loadQuote').addEventListener("click", changeColor, false);


  