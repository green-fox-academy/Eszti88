'use strict';

/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/

class Student {
  public learn(inputTeacher: Teacher) {
    return this.teacher.teach();
  }

  public question(inputTeacher: Teacher) {
    return this.teacher.answer();
  }
}

class Teacher {
  public teach(inputStudent: Student) {
    return this.student.learn();
  }

  public answer(inputStudent: Student) {
    if (this.student.question) {
      return 'valami';
    }
  }
}