// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, and I am from ${this.location}. `
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
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a score on ${subject}.`
  }
  assignGrade(student) {
    let randomPoints = Math.floor(Math.random() * 5) - 10;

    console.log(`${student.name}'s grade is now ${student.grade + randomPoints}`)
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = 50;
  }
  listsSubjects(){
    this.favSubjects.forEach( subject => console.log(subject));
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR request for ${subject}`
  }
  sprintChallenge(subject){
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
  graduate (grade) {
    if (grade >= 35) {
      console.log(`Congratulations ${this.name}, you've graduated!`);
    } else {
      console.log(`Have your PM or Instructor grade more of your assignments.`);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attr){
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
console.log(fred.grade(sally, 'JS-I'));
console.log(fred.assignGrade(sally));


console.log(sally.listsSubjects());
console.log(sally.PRAssignment('JS-IV'));
console.log(sally.sprintChallenge('Advanced CSS'));
console.log(george.catchPhrase);
console.log(george.debugsCode(sally, 'JavaScript'));
console.log(george.favInstructor);
console.log(sally.graduate(sally.grade));
