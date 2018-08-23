import { FlowersAndTrees } from "./flowersAndTrees";

export class Flower extends FlowersAndTrees {
    constructor(colour: string) {
        super(colour, 0.75, 5);
    }
}