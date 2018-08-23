export abstract class Animal {
    protected name: string;
    protected age: number;
    protected gender: string;
    protected isHungry: boolean;
    protected isSleepy: boolean;
    protected isDangerous: boolean;

    constructor(name: string) {
        this.name = name;
        this.isHungry = false;
        this.isSleepy = false;
        this.isDangerous = false;
    }

    getName(): string {
        return this.name;
    }
    
    abstract breed(): string;
}