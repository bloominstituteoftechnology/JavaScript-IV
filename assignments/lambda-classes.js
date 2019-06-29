// CODE here for your Lambda Classes
class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(opt) {
    super(opt);
    this.specialty = opt.specialty;
    this.favLanguage = opt.favLanguage;
    this.catchPhrase = opt.catchPhrase;
  }

  demo(subject) {
    return "Today we are learning about ", subject;
  }

  grade(student, subject) {
    return `${this.student} receives a perfect score on ${this.subject}`;
  }
}

class Student extends Person {
  constructor(opti) {
    super(opti);
    this.previousBackground = opti.previousBackground;
    this.className = opti.className;
    this.favSubjects = [];
  }

  listSubjects() {
    return this.favSubjects;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${this.subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${this.subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(optio) {
    super();
    this.gradClassName = optio.gradClassName;
    this.favInstructor = optio.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${this.channel} @channel standy time!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const dav = new ProjectManager({
  name: "David",
  location: "Here",
  age: 1,
  favLanguage: "JS",
  specialty: "Front end",
  catchPhrase: "Wut",
  gradClassName: "CS100000",
  favInstructor: "Luis"
});

fred.demo(wut);
