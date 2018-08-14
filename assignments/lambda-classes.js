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
    super(instructorAttrs);
    this.gender = instructorAttrs.gender;
    this.age = instructorAttrs.age;
    this.name = instructorAttrs.name;
    this.location = instructorAttrs.location;
    this.isInstructor = instructorAttrs.isInstructor;
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(subject) {
    return `${this.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.gender = studentAttrs.gender;
    this.age = studentAttrs.age;
    this.name = studentAttrs.name;
    this.location = studentAttrs.location;
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
  listSubjects() {
    return this.favSubjects;
  }
  PRAssignmnet(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManagers extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gender = pmAttrs.gender;
    this.age = pmAttrs.age;
    this.name = pmAttrs.name;
    this.location = pmAttrs.location;
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const ray = new Student({
  name: "Ray",
  location: "Austin",
  age: 31,
  gender: "male",
  previousBackground: "military",
  className: "CS13",
  favSubjects: ["javascript"]
});

const kait = new ProjectManagers({
  name: "Kait",
  location: "Austin",
  age: 30,
  gender: "female",
  previousBackground: "student",
  className: "CS5",
  favSubjects: ["python"],
  gradClassName: "CS1",
  favInstructor: "Josh"
});

console.log(fred.speak());
console.log(fred.demo("chess"));
console.log(ray.speak());
console.log(ray.listSubjects());
console.log(ray.PRAssignmnet("chess"));
console.log(ray.sprintChallenge("chess"));
console.log(kait.speak());
console.log(kait.standUp("cs13"));
console.log(kait.debugsCode("ray", "chess"));
