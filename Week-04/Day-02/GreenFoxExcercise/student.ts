'use strict';
import {Person} from "./person";

class Student extends Person {
    private previousOrganization: string;
    private skippedDays: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
        super(name, age, gender);       //ezzel a person.ts adatait hívom meg
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;       //minden új diáknak 0-t állítok be, ezt a constructorba nem kell beírni
    }

    getGoal() {
        console.log(`My goal is: Be a junior software developer.`);        
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} from ${this.previousOrganization} who has skipped ${this.skippedDays} days from the course already`);        
    }
}

let student1: Student = new Student('John Doe', 20, 'male', 'BME');
let student2: Student = new Student();

student1.introduce();
student1.getGoal();
student2.introduce();
student2.getGoal();
