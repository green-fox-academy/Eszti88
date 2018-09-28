zoo.ts fájl

export class Zoo {
    private animals: Animal [];
    private name: string;
    private yearOfFoundation: number;

    cons. (name, yearoffound) {
        this.name = name,
        this.yearoff = yearoffound;
        this.animals = [];
    }

    addAnimal(animal: Animal) {
        this.animal.push(animal);
    }
}

//animal.ts fájlba

exp abstract class Animal {
    protected name: string;
    protected yearOfbirth: number;
    protected isHUngry, majd is sleepy, majd is dangerous: boolean;

    constructor(name, yearofbirth + típusok, isDangerous: boolean) {
        this.name = name;
        this.yearOfbirth = yearofB,
        this.isdang = isdang;
        this.ishung = false,        //alapértelmezettben hamis!!!
        this.issleepy = false;
    }

    abstract eat(): void;
    /*eat() {
        console.log(egyél);        
    }*/
    abstract play(): void;
    abstract breed(): Animal;

}

//meerkat.ts fájlba:

import animal, alá MediaStreamTrackEvent

exp class meerkat ext animal {      //implementálás: villanykörte, és ott felajánlja, majd beilleszti
    eat () void {
        //threw new error (method not implemented)
        log(csipegetek - mondta ${this.name})
        isHUngry = true;
    }

    play () : void 
    ishungry true

    breed () : animal{
        let child: Animal = new meerkat (this name + 'son', this year +2, true);
    }
}

breedAll () {
    let babyanimal: Animal[] = this.animal.map(a => a.breed)
    this.animals.concat(babyAnimals) 
}

/* progress.ts 

let myMeerkat: animal = new Animal(Meerkat, 2000, false);

exp class Meerkat {

} */