'use strict';
import { Student } from "./student";

/*Teacher
teach(student) -> calls the students learn method
answer()*/

export class Teacher {
  public aswer() {    
  }

  public teach(student) {
    return student.learn();
  }  
}