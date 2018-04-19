// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

const jose = new Person({ name: 'Jose', location: 'LA' });

console.log(jose.speak());

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
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}

// const ryan = new Instructor({
//   specialty: 'react',
//   favLanguage: 'javascript',
//   catchPhrase: 'none',
// });

// console.log(ryan.grade('luis', 'java'))

class Students extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackGround = attributes.previousBackGround;
    this.className = attributes.className;
    this.favSubject = attributes.favSubject;
  }
  listsSubjects() {
    return `${this.name} likes ${this.favSubject}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `student.name has begun spring challenge on ${subject}`;
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${
      this.name
    } announces to ${channel}, ${slackChannel} standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const me = new Students({
  className: 10,
  name: 'ryan',
  favSubject: ['math', 'java', 'code'],
});

const ryan = new Instructor({
  name: 'Ryan',
  location: 'Cali',
  specialty: 'Java',
  favLanguage: 'Java',
  catchPhrase: 'Nifty',
});
