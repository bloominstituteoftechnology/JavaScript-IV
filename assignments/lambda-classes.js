// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.speciality = attributes.speciality;
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

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.previousBackground = attributes.previousBackground;
  }

  listsSubjects() {
    for(let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun a spring challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
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

const derrick = new Instructor({
  name: 'Derrick',
  location: 'Couchboulder',
  age: 33,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `I don't remember it being this wet`
});

const terra = new Student({
  name: 'Terra',
  location: 'Wyoming',
  age: 26,
  gender: 'Female',
  previousBackground: 'Model',
  className: 'CS132',
  favSubjects: ['Math', 'English', 'CSS']
});

const bev = new Student({
  name: 'Beverly',
  location: 'Some Dakota',
  age: 45,
  gender: 'Female',
  previousBackground: 'Doctor',
  className: 'CS132',
  favSubjects: ['Science', 'Surgery', 'CSS']
});

const dave = new Student({
  name: 'David',
  location: 'Old Hampshire',
  age: 33,
  gender: 'Male',
  previousBackground: 'Buisness',
  className: 'CS132',
  favSubjects: ['Statistics', 'Money', 'CSS']
});

const tinniffer = new ProjectManager({
  name: 'Tinniffer',
  location: 'The gram',
  age: 'twenty-something',
  gender: 'Fluid',
  gradClassName: 'Pumpkin-spice',
  favInstructor: 'Wynonna'
});

const henry = new ProjectManager({
  name: 'Henry',
  location: 'Chicago',
  age: 40,
  gender: 'Male',
  gradClassName: 'FTSC#3-TRW49.7',
  favInstructor: 'Dan'
});