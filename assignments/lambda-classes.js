// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = location.attrs;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.speciality = attrs.speciality;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name}, receives a perfect score on  ${subject} `;
  }
}
