// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
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
    return `Today, we are learning about ${subject}`;
  }
  grade(student, variable) {
    return `${student.name} receives a perfect score on ${variable}`;
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
    favSubjects.forEach((fs) => console.log.fs);
  };
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
  super(attributes);
  this.gradClassName = attributes.gradClassName;
  this.favInstructor = attributes.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @${channel} standup time!`
  }
  debugsCode(student, subject) {
    return `{name} debugs ${this.name}\'s code on {subject}.`
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

const kelly = new Student({
  name: 'Kelly',
  location: 'Bedrock',
  age: 37,
  gender: 'female',
  favSubjects: 'EcmaScript, Preprocessing',
  favLanguage: 'EcmaScript',
  specialty: 'Front-end',
  catchPhrase: `whatever`
});

const cole = new ProjectManager({
  name: 'Cole',
  location: 'Bedrock',
  age: 1,
  gender: 'female',
  favSubjects: 'EcmaScript, Preprocessing',
  favLanguage: 'EcmaScript',
  specialty: 'Front-end',
  catchPhrase: `whatever`
});


console.log(kelly.sprintChallenge('JSIV'));
