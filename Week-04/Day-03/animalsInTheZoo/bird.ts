import { Animal } from "./animal";
import { layingEggs } from "./layingEggs";

export class Bird extends Animal implements layingEggs {
    breed(): string {
        return 'laying eggs';
    }
}