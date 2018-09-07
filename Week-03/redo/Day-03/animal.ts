'use strict';

/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

export class Animal {
  protected hungerValue: number;
  protected thirstValue: number;

  constructor(hungerValue: number = 50, thirstValue: number = 50) {
    this.hungerValue = hungerValue;
    this.thirstValue = thirstValue;
  }

  public eat(): number {
    return this.hungerValue--;
  }

  public drink(): number {
    return this.thirstValue--;
  }

  public play(): number {
    return this.hungerValue++ && this.thirstValue++;
  }

  public getHungry(): number {
    return this.hungerValue;
  }
}

let dog = new Animal;
dog.drink();
dog.eat();

console.log(dog);
