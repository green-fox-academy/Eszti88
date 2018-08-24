import {Animal} from "./animal";

class Farm {
    private animals: Animal[];
    private freeSlots: number;

    constructor() {
        this.animals = [];
        this.freeSlots = 10;
    }

    breed() {
        if (this.freeSlots > 0) {
            let myAnimal: Animal = new Animal(); //add new animal
            this.animals.push(myAnimal);
            this.freeSlots --;
        }
    }
    
    slaughter() {
        if (this.animals.length !== 0) {
        let animalToSlaughterIndex: number = 0;
        for (let i: number = 0; i < this.animals.lenght; i++) {
            let leastHungry: Animal = this.animals[animalToSlaughterIndex];
            let currentAnimal: Animal = this.animals[i];
            if (currentAnimal.getHungry() < leastHungry.getHungry) {
                animalToSlaughterIndex = i;
            }
        }}

        this.animals.splice(animalToSlaughterIndex, 1);
        this.freeSlots ++;
    }
}