// CODE here for your Lambda Classes

//=========PERSON CLASS=========

class Person {
  constructor(properties){
    this.name = properties.name;
    this.age = properties.age;
    this.location = properties.location;
    this.gender = properties.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

//=========INSTRUCTOR CLASS=======

class Instructor extends Person {
  constructor(instructorProperties) {
    super(instructorProperties);
    this.specialty = instructorProperties.specialty;
    this.favLanguage = instructorProperties.favLanguage;
    this.catchPhrase = instructorProperties.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

//=========STUDENT CLASS==========

class Student extends Instructor {
  constructor(studentProperties){
    super(studentProperties);
    this.previousBackground = studentProperties.previousBackground;
    this.className = studentProperties.className;
    this.favSubjects = studentProperties.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}.`;
  }
  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${student.name} has begun sprint challeng on ${subject}.`;
  }
}

//==========PM CLASS==============

class ProjectManager extends Instructor {
  constructor(pmProperties){
    super(pmProperties);
    this.gradClassName = pmProperties.gradClassName;
    this.favInstructor = pmProperties.favInstructor;
  }
  standUp(channel) {
    return `${name} announces to ${channel}, @channel standup times!`;
  }
  debugsCode(studentObject, object) {
    return `${name} debugs ${student.name}'s code on ${subject}.`;
  }
}

//=============INSTRUCTORS==========

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const gary = new Instructor({
  name: 'Gary',
  location: 'South Lyon',
  age: 25,
  gender: 'male',
  favLanguage: 'HTML',
  specialty: 'Back-end',
  catchPhrase: `What up doe?`
});

const jen = new Instructor({
  name: 'Jen',
  location: 'San Francisco',
  age: 30,
  gender: 'female',
  favLanguage: 'CSS',
  specialty: 'Back-end',
  catchPhrase: `YOLO`
});

//=============STUDENTS=============

const lucas = new Student({
  name: 'Lucas',
  location: 'Tiburon',
  age: 24,
  gender: 'male',
  favLanguage: 'CSS',
  specialty: 'Front-end',
  catchPhrase: `PAIN AND GAIN`,
  previousBackground: `landscaping`,
  className: `CS13`,
  favSubjects: [`HTML`, `CSS`, `JavaScript`]
});

const lily = new Student({
  name: 'Lily',
  location: 'San Anselmo',
  age: 18,
  gender: 'female',
  favLanguage: 'HTML',
  specialty: 'Back-end',
  catchPhrase: `Living my best life`,
  previousBackground: `Highschool`,
  className: `CS13`,
  favSubjects: [`HTML`, `CSS`, `JavaScript`]
});

const jacob = new Student({
  name: 'Jacob',
  location: 'California',
  age: 32,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `fat pockets`,
  previousBackground: `Bachelors degree in science`,
  className: `CS13`,
  favSubjects: [`HTML`, `CSS`, `JavaScript`]
});

//=============PROJECT MANAGERS===========

const henry = new ProjectManager({
  name: 'Henry',
  location: 'Detroit',
  age: 42,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `YO`,
  previousBackground: `homeless`,
  className: `CS1`,
  favSubjects: [`HTML`, `CSS`, `JavaScript`],
  gradClassName: `CS1`,
  favInstructor: `Sean`
});

const susan = new ProjectManager({
  name: 'Susan',
  location: 'Tulsa',
  age: 29,
  gender: 'female',
  favLanguage: 'CSS',
  specialty: 'Back-end',
  catchPhrase: `Fabulous`,
  previousBackground: `model`,
  className: `CS1`,
  favSubjects: [`HTML`, `CSS`, `JavaScript`],
  gradClassName: `CS1`,
  favInstructor: `Josh`
});

const abbey = new ProjectManager({
  name: 'Abbey',
  location: 'Hartland',
  age: 23,
  gender: 'female',
  favLanguage: 'HTML',
  specialty: 'Back-end',
  catchPhrase: `hey bubba`,
  previousBackground: `artist`,
  className: `CS1`,
  favSubjects: [`HTML`, `CSS`, `JavaScript`],
  gradClassName: `CS1`,
  favInstructor: `Frank`
});

console.log(susan.gradClassName);
console.log(lily.specialty);
console.log(jen.gender);
console.log(gary.catchPhrase);
console.log(jacob.location);
console.log(lucas.age);
fred.grade(lucas, 'HTML');