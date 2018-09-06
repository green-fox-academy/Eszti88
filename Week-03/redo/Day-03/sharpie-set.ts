import { Sharpie } from "./sharpie";

'use strict';

/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/

class SharpieSet extends Sharpie{
  sharpie: Sharpie[];

  constructor() {
    super();
    this.sharpie = [];
  }

  public countUsable(inputSharpie: Sharpie): boolean {
    return this.inkAmount > 0;
  }

 // public removeTrash() {

  }
}

let sharpie1 = new Sharpie('yellow', 5);
let sharpie2 = new Sharpie('green', 30);



