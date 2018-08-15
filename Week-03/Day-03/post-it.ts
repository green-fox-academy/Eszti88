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

class postIt {
    backgroundColour: string;
    text: string;
    textColour: string;
}

const postIt1 = new postIt();
//console.log(myPostIt);

postIt1.backgroundColour = 'orange';
postIt1.textColour = 'blue';
postIt1.text = 'Idea 1';
console.log(postIt1);

const postIt2 = new postIt();

postIt2.backgroundColour = 'pink';
postIt2.textColour = 'black';
postIt2.text = 'Awesome';
console.log(postIt2);

const postIt3 = new postIt();
postIt3.backgroundColour = 'yellow';
postIt3.textColour = 'green';
postIt3.text = 'Superb!'

console.log(postIt3);





