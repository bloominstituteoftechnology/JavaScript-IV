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
    this.favSubject = stuAttrs.favSubjects;
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

  debugsCode(student) {
    console.log(`${this.name} debugs  ${this.subject}`);
  }
}


const dan = new Instructor({
  specialty: "redux",
  favLanguage: "JavaScript",
  catchPhrase: "I love cats!"
})
