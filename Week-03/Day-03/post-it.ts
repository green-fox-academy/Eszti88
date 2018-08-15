declare function require(path: string): any;
'use strict';
export{};

/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor*/
/*Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/

class PostIt {
    backgroundColour: string;
    text: string;
    textColour: string;
}

const myPostIt = new PostIt();
//console.log(myPostIt);

myPostIt.backgroundColour = 'orange';
myPostIt.textColour = 'blue';
myPostIt.text = 'Idea 1';
console.log(myPostIt);

