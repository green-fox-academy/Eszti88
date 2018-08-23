export class FlowersAndTrees {

    protected colour: string;
    protected waterATM: number;
    protected waterNeeded: number;
    protected waterAbsorbed: number;

    constructor(colour: string, waterNeeded: number, waterAbsorbed: number) {
        this.colour = colour;
        this.waterATM = 0;
        this.waterNeeded = waterNeeded;
        this.waterAbsorbed = waterAbsorbed;
    }

    water(amountOfWater) {
        this.waterATM += amountOfWater * this.waterAbsorbed;
    }

    //watering();
}