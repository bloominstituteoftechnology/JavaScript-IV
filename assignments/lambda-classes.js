class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructAttributes) {
    super(attributes);
    this.specialty = instructAttributes.specialty;
    this.favLanguage = instructAttributes.favLanguage;
    this.catchPhrase = instructAttributes.catchPhrase;
  }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
  constructor(pmAttributes) {
    super(instructAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
    standUp()
}
