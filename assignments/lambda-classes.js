// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}, and I am from ${this.location}.`);
    }
    
}// Person class

class Insturctor extends Person {
  constructor(Inattributes) {
  super(Inattributes);
  this.name = Inattributes.name;
  this.location = Inattributes.location;
  this.age = Inattributes.age;
  this.gender = Inattributes.gender;
  this.favLanguage = Inattributes.favLanguage;
  this.specialty = Inattributes.specialty;
  this.catchPhrase = Inattributes.catchPhrase;
  }
  demo(){
      console.log (`Today we are learning about ${this.favLanguage}.`)
  }
  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}.`)
  }
  
}// Instructor class

class Student extends Person {
  constructor(StuAttributes) {
  super(StuAttributes);
  this.name = StuAttributes.name;
  this.location = StuAttributes.location;
  this.age = StuAttributes.age;
  this.gender = StuAttributes.gender;
  this.previousBackground = StuAttributes.previousBackground; 
  this.favSubjects = StuAttributes.favSubjects;
  }
  listSubjects(subject1, subject2, subject3){
      console.log (`${subject1}, ${subject2}, ${subject3}.`)
  }
  PRAssignment(student, subject){
    console.log(`${student.name} has submitted PR for ${subject}.`)
  }
  sprintChallenge(student, subject){
    console.log(`${student.name} has began spring challenge on ${subject}.`)
  }
}// Student class

class ProjectManager extends Instructor {
  constructor(ProAttributes) {
  super(ProAttributes);
  this.name = ProAttributes.name;
  this.location = ProAttributes.location;
  this.age = ProAttributes.age;
  this.gender = ProAttributes.gender;
  this.gradClassName = ProAttributes.gradClassName; 
  this.favInstructor = ProAttributes.favInstructor;
  }
  standUp(){
      console.log(`${this.name} announces to, @channel, standy times!`) 
  }
  debugsCode(student, subject){
    console.log (`${this.name} debugs ${student.name}/'s code on ${subject}.`)
  }
  
}// Project Manager class


const fred = new Person({
  name: 'Fred',
  location: 'Pasadena',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const james = new Instructor({
  name: 'James',
  location: 'Los Angeles',
  age: 30,
  gender: 'male',
  favLanguage: 'HTML',
  specialty: 'Front-end',
  catchPhrase: `What up BOY!`
});

const brenda = new Student({
    name: 'Brenda',
    location: 'Los Angeles',
    age: 23,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Well, cook my grits!`,
    previousBackground: 'Finance',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']

  });

  const barbara = new ProjectManager({
    name: 'Barbara',
    location: 'Los Angeles',
    age: 43,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `I'm such a lady!`,
    gradClassName: 'CS1',
    favInstructor: 'Josh'
  });
//instructor 
  console.log(james.speak);
  console.log(james.demo);
  console.log(james.grade('Brenda', 'CSS'));

  //student
  console.log(brenda.listSubjects('HTML', 'CSS', 'JavaScript'));
  console.log(brenda.PRAssignment('Melissa', 'React'));
  console.log(brenda.PRAssignment('Terri', 'Redux'));

  //Project manager
  console.log(barbara.standUp('Brenda', 'CSS'));
  console.log(barbara.debugsCode('Howard', 'HTML'));


  //Example of how to invoke object methods 'console.log(barbara.debugsCode(brenda, 'CSS'));'


  