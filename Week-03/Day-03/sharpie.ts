/* Create a sharpie class. We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount */

class Sharpie {
    protected colour: string;
    protected width: number;
    protected inkAmount: number;

    constructor(colour: string, width: number) {
        this.colour = colour;
        this.width = width;
        this.inkAmount = 100;
    }

    // we can use() the sharpie object which decreases inkAmount
    use() {
        this.inkAmount--;
    }

}

let newSharpie: Sharpie = new Sharpie('green', 50);
newSharpie.use();
console.log(newSharpie);

let newSharpie2: Sharpie = new Sharpie('blue', 10);
newSharpie2.use();
console.log(newSharpie2);
