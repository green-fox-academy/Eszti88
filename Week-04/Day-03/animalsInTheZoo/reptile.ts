import { Animal } from "./animal";
import { layingEggs } from "./layingEggs";

export class Reptile extends Animal implements layingEggs {
    breed(): string {
        return 'laying eggs.';
        }
}