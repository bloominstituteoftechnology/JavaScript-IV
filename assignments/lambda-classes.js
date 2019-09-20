// CODE here for your Lambda Classes

class Person {
  constructor(attribute) {
    this.name = attribute.name;
    this.age = attribute.age;
    this.location = attribute.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}. `;
  }
}

class Instructor extends Person {
  constructor(attribute) {
    this.specialty = attribute.specialty;
    this.favLanguage = attribute.favLanguage;
    this.catchPhrase = attribute.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${this.subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${this.subject}!`;
  }
}

class Student extends Person {
  constructor(attribute) {
    this.previousBackground = attribute.previousBackground;
    this.className = attribute.className;
    this.favSubjects = attribute.favSubjects;
  }
  listsSubjects(favSubjects) {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR Assignment for ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(attribute) {
    this.gradClassName = attribute.gradClassName;
    this.favInstructor = attribute.favIntructor;
  }
  standUp(channel) {
    return `${this.name} announce to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}
