'use strict';

/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

export class Sharpie {
  private colour: string;
  private width: number;
  protected inkAmount: number = 100;

  constructor(colour: string, width: number) {
    this.colour = colour;
    this.width = width;
    this.inkAmount = this.inkAmount;
  }

  public use() {
    return this.inkAmount--;
  }
}

let mySharpie = new Sharpie('orange', 50);

mySharpie.use();
console.log(mySharpie);


