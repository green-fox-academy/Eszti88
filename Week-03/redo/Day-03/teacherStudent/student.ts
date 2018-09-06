'use strict';
import { Teacher } from "./teacher";

/*Student
learn()
question(teacher) -> calls the teachers answer method*/

export class Student {
  public learn () {    
  }

  public question(teacher) {
    teacher.answer();
  }
}