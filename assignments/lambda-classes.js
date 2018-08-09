// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name} and Im from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(attrs);
    this.isInstructor = instructorAttrs.isInstructor;
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade() {
    console.log(`{student.name} receives a perfect score on {subject}`);
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(attrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
  listSubjects() {}
  PRAssignmnet() {}
  sprintChallenge() {}
}

class ProjectManagers extends Instructor {
  constructor(pmAttrs) {
    super(attrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp() {
    console.log(`{name} announces to {channel}, @channel standy times!​​​​​`);
  }
  debugsCode() {
    console.log(`{name} debugs {student.name}'s code on {subject}`);
  }
}
