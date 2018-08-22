export abstract class Animal {
    protected name: string;
    protected age: number;
    protected gender: string;
    protected isHungry: boolean;
    protected isSleepy: boolean;
    protected isDangerous: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isHungry = isHungry;
        this.isSleepy = false;
        this.isDangerous = false;
    }

    abstract.breed(): Animal;
}