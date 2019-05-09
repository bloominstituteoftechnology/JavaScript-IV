// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  Speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  Demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  Grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    const subjects = this.favSubjects.map(
      index => `${index} is one of ${this.name}'s favorite subjects`
    );
    return subjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const student = new Student({
  name: "bob",
  age: "32",
  location: "alabama",
  previousBackground: "HTML",
  className: "web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});
const instructor = new Instructor({
  name: "robert",
  age: "32",
  location: "alabama",
  specialty: "react.js",
  favLanguage: "python",
  catchPhrase: "Don't put the pill in the drink bill"
});
const projectManager = new ProjectManager({
  name: "Dan",
  age: "32",
  location: "alabama",
  specialty: "react.js",
  favLanguage: "python",
  catchPhrase: "Don't put the pill in the drink bill",
  gradClassName: "cs1",
  favInstructor: "Sean"
});
console.log(student);
console.log(student.Speak());
console.log(student.listsSubjects());
console.log(student.PRAssignment("WebDev"));
console.log(student.sprintChallenge("WebDev"));
console.log("\n\n");
console.log(instructor);
console.log(instructor.Speak());
console.log(instructor.Demo("JS 4"));
console.log(instructor.Grade(student, "JS 4"));
console.log("\n\n");
console.log(projectManager);
console.log(projectManager.Speak());
console.log(projectManager.Demo("JS 2"));
console.log(projectManager.Grade(student, "JS 2"));
console.log(projectManager.standUp("Sprint 3"));
console.log(projectManager.debugsCode(student, "JS 2"));
