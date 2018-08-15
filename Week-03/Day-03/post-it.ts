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

const PostIt1 = new PostIt();
//console.log(myPostIt);

PostIt1.backgroundColour = 'orange';
PostIt1.textColour = 'blue';
PostIt1.text = 'Idea 1';
console.log(PostIt1);

const PostIt2 = new PostIt();

PostIt2.backgroundColour = 'pink';
PostIt2.textColour = 'black';
PostIt2.text = 'Awesome';
console.log(PostIt2);




