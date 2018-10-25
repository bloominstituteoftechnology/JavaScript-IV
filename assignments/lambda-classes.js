// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standup time!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    return this.favSubjects.forEach(item => console.log(item));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
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

const wilma = new Instructor({
  name: 'Wilma',
  location: 'Bedrock',
  age: 31,
  gender: 'female',
  favLanguage: 'Ruby',
  specialty: 'Back-end',
  catchPhrase: 'Well I never'
})

const barney = new ProjectManager({
  name: 'Barney',
  location: 'Stoneville',
  age: 36,
  gender: 'male',
  favLanguage: 'Rust',
  catchPhrase: 'Hubba hubba',
  gradClassname: 'iOS 2',
  favInstructor: 'Wallace Shawn'
})

const betty = new ProjectManager({
  name: 'Betty',
  location: 'Shale Lake City',
  age: 27,
  gender: 'female',
  favLanguage: 'CSS',
  catchPhrase: 'What goes up must come down',
  gradClassName: 'CS15',
  favInstructor: 'Stanley Slate'
})

const jonathan = new Student({
  name: 'Jonathan',
  location: 'Jacksonville',
  age: 34,
  gender: 'male',
  previousBackground: 'foodservice',
  favSubjects: ['JavaScript', 'Python', 'back-end', 'games']
})

const jenae = new Student({
  name: 'Jenae',
  location: 'Seattle',
  age: 19,
  gender: 'female',
  previousBackground: 'automotive repair',
  favSubjects: ['large motor repair', 'baseball', 'horticulture', 'server deployment']
})

console.log(jonathan.age);
console.log(jenae.gender);
console.log(barney.favInstructor);
console.log(wilma.favLanguage);
jonathan.listsSubjects();
console.log(jenae.speak());
console.log(fred.speak());
console.log(betty.speak());
console.log(fred.demo("NodeJS"));
console.log(barney.grade(jenae, "HTML5"));
console.log(jonathan.previousBackground);
console.log(betty.standUp("fswpt3"));
console.log(jonathan.PRAssignment("User Interface"));
console.log(jenae.sprintChallenge("JavaScript Fundamentals"));
console.log(barney.debugsCode(jonathan, "LESS"));
console.log(wilma.grade(jenae, "Applied JavaScript"));
