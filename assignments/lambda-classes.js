// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}. `)
  }
}

class Instructor extends Person {
  constructor(attr){
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a score on ${subject}.`)
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach( subject => console.log(subject));
  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR request for {subject}`)
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun a sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attr){
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
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

const sally = new Student({
  name: 'Sally',
  location: 'Long Beach',
  age: 32,
  gender: 'female',
  previousBackground: 'barista',
  className: 'FSWPT3',
  favSubjects: ["JavaScript", "CSS"]
});

const george = new ProjectManager({
  name: 'George',
  location: 'Ottery St Catchpole',
  age: 32,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Give her hell from us, Peeves.`,
  gradClassName: 'CS10',
  favInstructor: 'Cam'
});

console.log(fred.location);
console.log(fred.demo('CSS'));
console.log(sally.listsSubjects());
console.log(sally.PRAssignment('JS-IV'));
console.log(sally.sprintChallenge('Advanced CSS'));
console.log(george.catchPhrase);
console.log(george.debugsCode(sally, 'JavaScript'));
console.log(george.favInstructor);
