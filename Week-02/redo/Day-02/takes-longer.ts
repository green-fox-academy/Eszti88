'use strict';
export{};

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let addition: string = 'always takes longer than ';

quote = quote.substr(0, 21) + addition + quote.substr(21);

console.log(quote);