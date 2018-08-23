// CODE here for your Lambda Classes
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    this.subject = subject;
    return `Today we are learning about ${this.subject}`;
  }
  grade(student, subject) {
    this.student = student;
    this.subject = subject;
    return `${this.student.name} receives a perfect score on ${this.subject}`
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listsSubjects(favSubjects) {
    this.favSubjects = favSubjects;
    return this.favSubjects;
  }
  PRAssignment(subject) {
    this.subject = subject;
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge(subject) {
    this.subject = subject;
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    this.channel = channel;
    return `${this.name} annouces to ${this.channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    this.student = student;
    this.subject = subject;
    return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`;
  }
}

// Classes end here ------------------
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const jim = new Student({
  name: 'jim',
  location: 'Bedrock',
  age: 27,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `forget the homies`
});
console.log(fred.demo('math'));
console.log(fred.grade(jim, 'math'));
