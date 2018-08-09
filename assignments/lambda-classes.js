//classes below
class Person {
  constructor(attr){
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(intAttr){
    super(intAttr);
    this.specialty = intAttr.specialty;
    this.favLanguage = intAttr.favLanguage;
    this.catchPhrase = intAttr.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  changeGrade(student){
    let change = Math.floor(Math.random() * 10) + 1;
    let negOrPos = Math.floor(Math.random() * 2);
    if (negOrPos === 0){
      change = change * -1;
    }
    console.log(`${student.name}'s old grade was ${student.grade}`);
    student.grade = student.grade + change;
    console.log(`${this.name} changed ${student.name}'s grade to ${student.grade} due to current performance.`);
  }
}

class Student extends Person {
  constructor(stuAttr){
    super(stuAttr);
    this.previousBackground = stuAttr.previousBackground;
    this.className = stuAttr.className;
    this.favSubjects = stuAttr.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1;
  }
  listsSubjects(){
    console.log(`${this.favSubjects}`);
  }
  PRAssignment(subject){
    console.log(`${this.name} has sumitted a PR for ${subject}`)
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
  classComplete(){
    if (this.grade >= 70){
      console.log(`\ngreat job ${this.name} you graduate!`);
    } else {
      console.log(`\nsorry ${this.name} you failed school.`);
    }
  }
}

class ProjectMananger extends Instructor {
  constructor(PMAttr){
  super(PMAttr);
  this.gradClassName = PMAttr.gradClassName;
  this.favInstructor = PMAttr.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} annouces to ${channel}, @channel stanby times!`)
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}
// -------------------------------
// Person 
const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'LA',
  gender: 'M',
})
// -------------------------------
// Instructor 
const steve = new Instructor({
  name: 'steve',
  location: 'seattle',
  age: 42,
  gender: 'M',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `You betcha`,
});
// -------------------------------
//student 
const jess = new Student({
  name: 'Jess',
  location: 'Texas',
  age: 22,
  gender: 'F',
  previousBackground: 'office manager',
  className: 'CS13',
  favSubjects: ['html', 'css'],
})
// -------------------------------
// project manager
const john = new ProjectMananger({
  name: 'John',
  location: 'Winterfell',
  age: 33,
  gender: 'M',
  favLanguage: 'JavaScript',
  specialty: 'Sword fighting',
  catchPhrase: "I'm king of the north!",
  gradClassName: 'Nights Watch class 05',
  favInstructor: 'Ned Stark',
})

// tests for Person
// console.log(fred);
fred.speak();

// // test for Instructor
console.log(steve)
steve.speak();
steve.demo('HTML');
steve.grade(jess, 'HTML');

// // tests for Student
console.log(jess);
jess.speak();
jess.listsSubjects();
jess.PRAssignment("html");
jess.sprintChallenge('css');

// // tests for project manager
console.log(john);
john.speak();
john.demo('Sword Fighting');
john.grade(jess, 'Sword Fighting');
john.standUp('private');
john.debugsCode(jess, "html");

//stretch tests
john.changeGrade(jess);
john.changeGrade(jess);
jess.classComplete();