import { Animal } from "./animal";

export class Zoo {
    private animals: Animal[];
    private name: string;
    private yearOfFoundation: number;

    constructor(name: string, yearOfFoundation: number) {
        this.name = name,
        this.yearOfFoundation = yearOfFoundation;
        this.animals = [];
    }

    addAnimal(animal: Animal) {
        this.animals.push(animal);
    }

    breed(): void {
        let babyAnimal: Animal[] = this.animals.map(a => a.breed());
        this.animals.concat(babyAnimal);
    }

    getName(): void {
        console.log(this.name);        
    }
}

