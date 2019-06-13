// CODE here for your Lambda Classes

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }


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

class Student extends Person {
  constructor(stuAttrs) {
    super(stuAttrs);
    this.previousBackground = stuAttrs.previousBackground;
    this.className = stuAttrs.className;
    this.favSubjects = stuAttrs.favSubjects;
  }

  listsSujects() {
    console.log(`${this.favoriteSubjects}`);
  }

  PRAssignment() {
    console.log(`${this.name} has submitted a PR for ${this.subject}`);
  }

  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge for ${this.subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${this.channel} @channel standup time`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student}'s code on ${subject}'`);
  }
}


const dan = new Instructor({
  name: 'Dan',
  age: '32',
  location: 'Colorado',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Rosie, no!',
})

const josh = new Instructor({
  name: 'Josh',
  age: '32',
  location: 'Utah',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Banjo time!',
})

const emily = new Student({
  name: 'Emily',
  age: '32',
  location: 'Illinois',
  previousBackground: 'Teacher',
  className: 'Web 21',
  favSubjects: 'Logic',
})

const marcus = new Student({
  name: 'Marcus',
  age: '32',
  location: 'Illinois',
  previousBackground: 'Teacher',
  className: 'Web 21',
  favSubjects: 'Logic',
})

const nick = new ProjectManager({
  name: 'Nick',
  age: '32',
  location: 'New Mexico',
  gradClassName: 'Web 19',
  favInstructor: 'Dan',
})

const jose = new ProjectManager({
  name: 'Jose',
  age: '32',
  location: 'Illinois',
  gradClassName: 'Web 19',
  favInstructor: 'Dan',
})

console.log(dan.name);
console.log(dan.catchPhrase);
