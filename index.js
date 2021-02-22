// const QUOTEBANK = [
//     {
//         quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
//         author: "Albert Einstein"
//     },
//     {
//         quote: "Be yourself; everyone else is already taken.",
//         author: "Oscar Wilde"
//     },
//     {
//         quote: "Be the change that you wish to see in the world.",
//         author: "Mahatma Gandhi"
//     }
// ]

window.onload = init;
function init() {
    generateQuote();
}

function generateQuote(){
    let quotesNumber = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * 
                                    Math.floor(quotesNumber)); 
    let randomeQuoteData = QUOTEBANK[randomIndex];

    let quoteInApiFormat = randomeQuoteData.quote.replace(/ /g, "%20");
    let authorInApiFormat = randomeQuoteData.author.replace(/ /g, "%20");

    
    let twitterLink = "https://twitter.com/intent/tweet?";
        twitterLink += "text=";
        twitterLink += quoteInApiFormat;
        twitterLink += "%20";
        twitterLink += authorInApiFormat;
    
    document.getElementById("tweet-quote").href = twitterLink;



   // console.log("Quote Generated!!!");

    document.getElementById("text")
        .innerText = randomeQuoteData.quote;
    document.getElementById("author")
        .innerText = randomeQuoteData.author;
}