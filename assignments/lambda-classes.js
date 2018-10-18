// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructors extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo() {
    return ``
  }
}

class Student extends Instructors {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    return `${favSubjects}`;
  }
  PRAssignment() {

  }
  sprintChallenge() {

  }
}

class ProjectManager extends Student {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp () {
    console.log(`${this.name} announces to ${channel}, @channel standup times!`);
  }
  debugsCode () {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
  }
}
