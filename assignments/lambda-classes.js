// CODE here for your Lambda Classes
// Person class will be the base-class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

// Insturctor class -> inherits Person props
class Instructor extends Person{
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

// Student class -> inherits Person props
class Student extends Person{
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects; // most likely an array
  }
  listsSubjects() {
    // logs out student's favSubject one by one
    this.favSubjects.forEach(e => {
      console.log(e);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

// Project Manager -> inherits Instructor props
class ProjectManager extends Instructor {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const lee = new Student({
  name: 'Lee',
  location: 'Brooklyn',
  age: 32,
  gender: 'male',
  previousBackground: 'miner',
  className: 'CSPT2',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

console.log(fred.demo('CSS'));
console.log(fred.grade(lee, 'Html'));
console.log(lee.listsSubjects());
