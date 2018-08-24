// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location} `;
  }
}

class Instructor extends Person {
  constructor(insAttr) {
    super(insAttr);
    this.speciality = insAttr.speciality;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(Student, subject) {
    `${student.name} recieves a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(stuAttr) {
    super(stuAttr);
    this.previousBackground = stuAttr.previousBackground;
    this.favSubjects = stuAttr.favSubjects;
  }
}
