class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(childAttributes) {
    super(childAttributes);
    this.favLanguage = childAttributes.favLanguage;
    this.specialty = childAttributes.specialty;
    this.catchPhrase = childAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(grandChildAttributes) {
    super(grandChildAttributes);
    this.previousbackground = grandChildAttributes.previousbackground;
    this.className = grandChildAttributes.className;
    this.favSubjects = grandChildAttributes.favSubjects;
  }
  listsSubject() {
    return `These are my favorite subjects in Lambda School: ${this.favSubjects}`;
  }
  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge() {
    return `${this.name} has begun spring challenge ${this.subject}`;
  }
}

class ProjectManager extends Student {
  constructor(greatGrandChildAttributes) {
    super(greatGrandChildAttributes);
    this.gradClassName = greatGrandChildAttributes.gradClassName;
    this.favInstructor = greatGrandChildAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
  }
  debugsCode() {
    return `${this.name} debugs ${andrew.name} 's code on ${this.subject}`;
  }
}

const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 100,
  gender: 'male',
});


const john = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 34,
  gender: 'male',
  favLanguage: "JavaScript, Python, Elm",
  specialty: "Redux",
  catchPhrase: "Don't forget the homies"
});

const andrew = new Student({
  name: 'Em',
  location: 'Seattle',
  age: 65,
  gender: 'female',
  previousbackground: "healthcare",
  className: "CS132",
  favSubjects: ["HTML", "CSS", "Javascript"],
});

const kels = new ProjectManager({
  name: 'Johnathan',
  location: 'Unknown',
  age: 100,
  gender: 'male',
  gradClassName: "CSI",
  favInstructor: "Sean PDiddy Combs"
});

console.log(fred.name);
console.log(fred.speak());
console.log(fred.age);
console.log(john);
console.log(john.demo());
console.log(andrew.listsSubject());
console.log(andrew);
console.log(kels.favInstructor);
console.log(kels.debugsCode());
console.log(andrew.PRAssignment());
console.log(andrew.sprintChallenge('today'));
console.log(kels.standUp());
console.log(john.grade('LaLa', 'math'));
console.log(john.grade('Rosco', 'music'));