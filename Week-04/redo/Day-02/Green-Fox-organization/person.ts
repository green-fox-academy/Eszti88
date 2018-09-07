'use strict';

class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`);    
  }

  public getGoal() {
    console.log('My goal is: Live for the moment!');    
  }
}

let Mark = new Person('Mark', 46, 'male');
let somebody = new Person();

Mark.introduce();         // Hi, I'm Mark, a 46 year old male.
Mark.getGoal();           // My goal is: Live for the moment!
somebody.introduce();     // Hi, I'm Jane Doe, a 30 year old female.
somebody.getGoal();       // My goal is: Live for the moment!


