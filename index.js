const request = require('request');
const pathModule = require('path');
const fs = require('fs');

const quotes = require('./quotes.json');

const quoteArray  = []

// console.log(typeof(quotes));



quotes.forEach(function(quote){
	// const authorName = quote.author;
	// const quote = quote.desc;	
	quoteArray.push({
		'author': quote.author,
		'quote' : quote.desc
	});
})

let random = quoteArray[Math.floor(Math.random() * quoteArray.length)];

console.log(`
			###################################################################################################
					${random.quote} -- ${random.author}
			###################################################################################################
`);