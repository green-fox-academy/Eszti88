'use strict';
import {Person} from "./person";

class Mentor extends Person {
    private level: string;

    constructor(name: string, age: number, gender: string, level: string = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal() {
        console.log(`My goal is: Educate brilliant junior sotfware developers.`);        
    }
}

let mentor1: Mentor = new Mentor('Arnika', 20, 'female', 'senior');

mentor1.introduce();
mentor1.getGoal();