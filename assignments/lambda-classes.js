// CODE here for your Lambda Classes

// Person class (base class)

class Person {

  constructor(props) {

    this.name = props.name;
    this.age = props.age;
    this.gender = props.gender;
    this.location = props.location;

  }

  speak() {

    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);

  }

}

// Instructor class (child of Person)

class Instructor extends Person {

  constructor(props) {

    super(props);

    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;

  }

  demo(subject) {

    console.log(`Today we are learning about ${subject}`);

  }

  grade(student, subject) {

    console.log(`${student.name} receives a perfect score on ${subject}`);

  }

}

  // Student class (child of Person)

class Student extends Person {

  constructor(props) {

    super(props);

    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;

  }

  listSubjects() {

    console.log(`${this.name}'s favorite subjects:`);

    this.favSubjects.forEach(subject => console.log(subject));

  }

  PRAssignment(subject) {

    console.log(`${this.name} has submitted a PR for ${subject}`);

  }

  sprintChallenge(subject) {

    console.log(`${this.name} has begun sprint challenge on ${subject}`);

  }

}

  // Project Manager class (child of Instructor)

class ProjectManager extends Instructor {

  constructor(props) {

    super(props);

    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;

  }

  standUp(channel) {

    console.log(`${this.name} announces to ${channel}, @channel standy times!`);

  }

  debugCode(student, subject) {

    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);

  }

}

// Test code

// Students

const jonny = new Student({
  name: "Jonny",
  age: 19,
  gender: 'male',
  location: 'CA Bay Area',
  previousBackground: "High school student",
  className: "FSW15",
  favSubjects: ['JS', 'CSS', 'HTML']
});

const fred = new Student({
  name: "Fred",
  age: 85,
  gender: 'male',
  location: 'Norway',
  previousBackground: "Professional asparagus chef",
  className: "FSW22",
  favSubjects: ['JS', 'CSS', 'Python']
});

jonny.speak();
jonny.listSubjects();
jonny.PRAssignment("Preprocessing I");
jonny.sprintChallenge("JavaScript Fundamentals");

console.log();

fred.speak();
fred.listSubjects();
fred.PRAssignment("Preprocessing I");
fred.sprintChallenge("JavaScript Fundamentals");

console.log();

// Instructors

const josh = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front End Dev',
  catchPhrase: `Don't forget the homies`
});

const jerry = new Instructor({
  name: 'Jerry',
  location: 'Mars',
  age: 12,
  gender: 'male',
  favLanguage: 'BF',
  specialty: 'Database Integration',
  catchPhrase: `Life is like a box of KFC. You never know what you're gonna get.`
});

josh.speak();
josh.demo("Node.js");
josh.grade(jonny, "React.js");

console.log();

jerry.speak();
jerry.demo("Mongo.db");
jerry.grade(fred, "View.js");

// Project Managers

const john = new ProjectManager({
  name: "John",
  age: 25,
  gender: 'male',
  location: 'Seattle',
  gradClassName: "FSW14",
  favInstructor: "Josh"
});

const lisa = new ProjectManager({
  name: "Lisa",
  age: 32,
  gender: 'female',
  location: 'The wild west',
  gradClassName: "FSW31",
  favInstructor: "Jerry"
});

john.speak();
john.demo("Node.js");
john.grade(jonny, "React.js");
john.standUp("fsw15_john");
john.debugCode(jonny, "Node.js");

console.log();

lisa.speak();
lisa.demo("React.js");
lisa.grade(fred, "React.js");
lisa.standUp("fsw15_lisa");
lisa.debugCode(fred, "Angular.js");
