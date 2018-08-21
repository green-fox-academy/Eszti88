'use strict';

export class Person {
    protected name: string;
    protected age: number;
    protected gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {        //itt állítok be default értékeket
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);        
    }

    getGoal() {
        console.log(`My goal is: Live for the moment!`);        
    }
}

let person1: Person = new Person('Mark', 46, 'male');
let person2: Person = new Person();

person1.introduce();
person1.getGoal();
person2.introduce();
person2.getGoal();       //kikommentelve, hogy a student.ts ne futtassa le ezt is
