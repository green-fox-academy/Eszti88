'use strict';

class Student {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string= 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  public getGoal() {
    console.log('My goal is: Be a junior software developer.');    
  }

  public introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who has skipped ${this.skippedDays} days from the course already.`);    
  }

  public skipDays(numberOfDays) {
    return this.skippedDays += numberOfDays;
  }
}

let John = new Student('John Doe', 20, 'male', 'BME');
let somebody = new Student();

John.introduce();
John.getGoal();

somebody.skipDays(3);
somebody.introduce();
somebody.getGoal();