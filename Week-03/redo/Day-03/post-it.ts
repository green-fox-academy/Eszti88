'use strict';

/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/

class PostIt {
  private backgroundColour: string;
  private text: string;
  private textColour: string;

  constructor(backgrounColour: string, text: string, textColour: string) {
    this.backgroundColour = backgrounColour;
    this.text = text;
    this.textColour = textColour;
  }
}

let postIt1 = new PostIt('orange', 'Idea 1', 'blue');
let PostIt2 = new PostIt ('pink', 'Awesome', 'black');
let postIt3 = new PostIt('yellow', 'Superb!', 'green');

console.log(postIt1);
console.log(PostIt2);
console.log(postIt3);


