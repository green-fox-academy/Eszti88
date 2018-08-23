export class flowersAndTrees {
    color: string;
    waterAtTheMoment: number;
    waterNeeded: number;
    waterAbsorbed: number;

    constructor(color: string, waterNeeded: number, waterAbsorbed: number) {
        this.color = color;
        this.waterAtTheMoment = 0;
        this.waterNeeded = waterNeeded;
        this.waterAbsorbed = waterAbsorbed;
    }

    amountOfWater(someWater) {
        this.waterAtTheMoment += someWater * this.waterAbsorbed;
    }

    watering() {
        if (this.waterAtTheMoment < this.waterNeeded) {
            console.log;
            
        }
    }
}