'use strict';
import {Person} from "./person";

class Sponsor extends Person {
    private company: string;
    protected hiredStudents: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire() {
        this.hiredStudents++;
    }


    getGoal() {
        console.log(`My goal is: Hire brilliant junior software developers.`);
    }
}

let sponsor1: Sponsor = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
let sponsor2: Sponsor = new Sponsor();

for (let i: number = 0; i < 3; i++) {
    sponsor1.hire();
}
sponsor1.introduce();
sponsor1.getGoal();

for (let j: number = 0; j < 5; j++) {
    sponsor2.hire();
}
sponsor2.introduce();
sponsor2.getGoal();
