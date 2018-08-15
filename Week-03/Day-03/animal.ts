declare function require(path: string): any;
'use strict';
export{};

/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

class Animal {
    hungerValue: number;
    thirstValue: number;
    eat() {
        this.hungerValue -= 1;
    }
    drink() {
        this.thirstValue -= 1;
    }
    play() {
        this.hungerValue += 1;
        this.thirstValue += 1;
    }
    constructor() {
        this.hungerValue = 50;
        this.thirstValue = 50;
    }
}

let puppy = new Animal();

puppy.eat();
console.log(puppy);
