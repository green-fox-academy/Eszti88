'use strict';
import {Person} from "./person";

class Sponsor extends Person {
    private company: string;
    private hiredStudents: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire() {
        return this.hiredStudents++;
    }

    getGoal() {
        console.log(`My goal is: Hire brilliant junior software developers.`);
    }
}

let sponsor1: Sponsor = new Sponsor('Bill', 40, 'male', 'L Ltd');
let sponsor2: Sponsor = new Sponsor();

sponsor1.introduce();
sponsor1.hire();
sponsor1.getGoal();

sponsor2.introduce();
