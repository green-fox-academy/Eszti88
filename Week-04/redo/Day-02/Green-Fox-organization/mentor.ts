'use strict';

class Mentor {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  public getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');    
  }

  public introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, who is a ${this.level} level mentor.`);    
  }
}

let Gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
let somebody = new Mentor();

Gandhi.introduce();
Gandhi.getGoal();
somebody.introduce();
somebody.getGoal();