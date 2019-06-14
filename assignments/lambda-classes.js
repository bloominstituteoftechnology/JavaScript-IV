
// Person class

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}


// Instructor class

class Instructor extends Person {
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student} receives a perfect score on ${subject}`)
  }
}


// Student class

class Student extends Person {
  constructor(stuAttrs) {
    super(stuAttrs);
    this.previousBackground = stuAttrs.previousBackground;
    this.className = stuAttrs.className;
    this.favSubjects = [stuAttrs.favSubjects];
  }

  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }

  PRAssignment() {
    console.log(`${this.name} has submitted a PR for ${this.subject}`);
  }

  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge for ${this.subject}`);
  }
}


// ProjectManager class

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel} @channel Standup Time!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${student.favSubjects}`);
  }
}

// Instructor objects

const dan = new Instructor({
  name: 'Dan',
  age: 32,
  location: 'Colorado',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Rosie, no!',
})


const josh = new Instructor({
  name: 'Josh',
  age: 32,
  location: 'Utah',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Banjo time!',
})


// Student objects

const emily = new Student({
  name: 'Emily',
  age: 32,
  location: 'Illinois',
  previousBackground: 'Teacher',
  className: 'Web 21',
  favSubjects: 'Logic',
})

const marcus = new Student({
  name: 'Marcus',
  age: 32,
  location: 'Illinois',
  previousBackground: 'Teacher',
  className: 'Web 21',
  favSubjects: ['Logic', 'Syntax', 'Language'],
})


// ProjectManager objects

const nick = new ProjectManager({
  name: 'Nick',
  age: 32,
  location: 'New Mexico',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Listen up!',
  gradClassName: 'Web 19',
  favInstructor: 'Dan',
})

const jose = new ProjectManager({
  name: 'Jose',
  age: 32,
  location: 'Illinois',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Listen up!',
  gradClassName: 'Web 19',
  favInstructor: 'Dan',
})


// console.log() tests

console.log(dan.name);
console.log(dan.catchPhrase);
console.log(emily.location);
console.log(marcus.listsSubjects())
console.log(nick.catchPhrase);
console.log(nick.standUp("Nick_Ballenger's_Channel"));
console.log(nick.debugsCode(emily));
