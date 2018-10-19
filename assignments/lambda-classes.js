// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(studentObj, subject) {
    return `${studentObj.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
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

// Instructor
const bob = new Instructor({
  name: "Bob",
  age: 55,
  location: "Happy Town",
  gender: "Male",
  specialty: "Backend",
  favLanguage: "Node.JS",
  catchPhrase: "Write happy little code"
});

// Project Managers
const alex = new ProjectManager({
  name: "Alex",
  age: 25,
  location: "New Mexico",
  gender: "Female",
  gradClassName: "FSW 14",
  favInstructor: "Henry"
});

// Students
const thomas = new Student({
  name: "Thomas",
  age: 27,
  location: "North Carolina",
  gender: "Male",
  previousBackground: "Janitor",
  className: "FSW 15",
  favSubjects: ["UI/UX", "JavaScript", "Computer Science"]
});

console.log(thomas.listsSubjects());
console.log(thomas.PRAssignment("Javascript"));

console.log(alex.debugsCode(thomas, "React-1"));
console.log(alex.standUp(`FSW-15`));

console.log(bob.grade(alex, "Javascript"));
