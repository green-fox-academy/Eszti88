'use strict';
import {Person} from "./person";

class Student extends Person {
    private previousOrganization: string;
    private skippedDays: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number) {
        super(name, age, gender);       //ezzel a person.ts adatait hívom meg
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;       //minden új diáknak 0-t állítok be
    }

    getGoal() {
        console.log(`My goal is: Be a junior software developer.`);        
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} from ${this.previousOrganization} who has skipped ${this.skippedDays} days from the course already`);        
    }
}

let student1: Student = new Student('Eszti', 30, 'female', 'X Ltd', 5);
let student2: Student = new Student();

student1.introduce();
student1.getGoal();
