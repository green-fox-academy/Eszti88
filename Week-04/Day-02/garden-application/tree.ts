import { FlowersAndTrees } from "./flowersAndTrees";

export class Tree extends FlowersAndTrees {
    constructor(colour: string) {
        super(colour, 0.4, 10);
    }
}