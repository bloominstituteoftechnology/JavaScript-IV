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
    super(attribute);
    this.specialty = attribute.specialty;
    this.favLanguage = attribute.favLanguage;
    this.catchPhrase = attribute.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${this.subject}!`;
  }
}

class Student extends Person {
  constructor(attribute) {
    super(attribute);
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
  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}!`;
  }
}

class ProjectManager extends Instructor {
  constructor(attribute) {
    super(attribute);
    this.gradClassName = attribute.gradClassName;
    this.favInstructor = attribute.favIntructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}.`;
  }
}

const student_one = new Student({
  name: "Greg",
  age: 30,
  location: "Austin",
  previousBackground: "Uber",
  className: "Javascript II",
  favSubjects: ["HTML", "Javascript", "CS"]
});

const student_two = new Student({
  name: "Colin",
  age: 28,
  location: "Salt Lake City",
  previousBackground: "Sales",
  className: "Javascript II",
  favSubjects: ["Javascript", "Redux"]
});

const student_three = new Student({
  name: "Eric",
  age: 22,
  location: "San Antonio",
  previousBackground: "Retail",
  className: "Javascript II",
  favSubjects: ["HTML", "CSS", "npm"]
});

const instructor_one = new Instructor({
  name: "Brit Demming",
  age: 31,
  location: "Canada",
  specialty: "Keepin' it real",
  favLanguage: "Javascript, HTML, CSS",
  catchPhrase: "You're gonna know all about my pets"
});

const instructor_two = new Instructor({
  name: "Ryan Hamblin",
  age: 32,
  location: "Salt Lake City",
  specialty: "Prototypical Inheritance",
  favLanguage: "Javascript, React",
  catchPhrase: "Put the keys in the car"
});

const projectManager_one = new ProjectManager({
  name: "Don Whitely",
  age: 40,
  location: "Indianapolis",
  specialty: "Troubleshooting",
  favLanguage: "React, Python",
  catchPhrase: "Hold em' or Fold em'",
  gradClassName: "Web13",
  favInstructor: "James Starks"
});

const projectManager_two = new ProjectManager({
  name: "Joseph Hayden",
  age: 30,
  location: "Chicago",
  specialty: "Keepin' it real",
  favLanguage: "Javascript, Python",
  catchPhrase: "Wubba Lubba Javascript",
  gradClassName: "Web18",
  favInstructor: "Brit Demming"
});

console.log(student_three.PRAssignment("CSS"));
console.log(projectManager_one.standUp("Web24"));
console.log(projectManager_two.debugsCode("Greg", "CSS"));
console.log(instructor_two.demo("callback functions"));
