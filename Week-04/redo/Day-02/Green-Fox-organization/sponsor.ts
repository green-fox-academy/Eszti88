'use strict';

class Sponsor {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected company: string;
  protected hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }

  public introduce() {
    console.log(`HI, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);    
  }

  public hire() {
    return this.hiredStudents++;
  }

  public getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');    
  }
}

let Elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
let somebody = new Sponsor;

Elon.hire();
Elon.introduce();
Elon.getGoal();

somebody.introduce();
somebody.getGoal();
