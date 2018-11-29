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
  super();
  this.name = Inattributes.name;
  this.location = Inattributes.location;
  this.age = Inattributes.age;
  this.gender = Inattributes.gender;
  this.favLanguage = Inattributes.favLanguage;
  this.specialty = Inattributes.specialty;
  this.catchPhrase = Inattributes.catchPhrase;
  }
  demo(){
      console.log ('Today we are learning about ${subject}.')
  }
  grade(){
    console.log('${student.name} receives a perfect score on ${subject1}.')
  }
  
}// Instructor class

class Student extends Person {
  constructor(Inattributes) {
  super();
  this.name = Stuattributes.name;
  this.location = Stuattributes.location;
  this.age = Stuattributes.age;
  this.gender = Stuattributes.gender;
  this.previousBackground = StuAttributes.previousBackground; 
  this.favSubjects = StuAttributes.favSubjects;
  }
  listSubjects(){
      console.log ('${subject1}, ${subject2}, ${subject3}.')
  }
  PRAssignment(){
    console.log('${student.name} has submitted PR for ${subject2}.')
  }
  sprintChallenge(){
    console.log('${student.name} has began spring challenge on ${subject3}.')
  }
}// Student class

class ProjectManager extends Instructor {
  constructor(Proattributes) {
  super();
  this.name = Proattributes.name;
  this.location = Proattributes.location;
  this.age = Proattributes.age;
  this.gender = Proattributes.gender;
  this.gradClassName = ProAttributes.gradClassName; 
  this.favInstructor = ProAttributes.favInstructor;
  }
  standUp(){
      console.log(`${this.name} announces to ${channel}, @channel, standy times!`) 
  }
  debugsCode(){
    console.log (`${this.name} debugs ${student.name}/'s code on ${subject}`.)
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


const james = new Person({
  name: 'James,
  location: 'Los Angeles',
  age: 30,
  gender: 'male',
  favLanguage: 'HTML',
  specialty: 'Front-end',
  catchPhrase: `What up BOY!`
});

const brenda = new Person({
    name: 'Brenda,
    location: 'Los Angeles',
    age: 23,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Well, cook my grits!`
    previousBackground: 'Finance',
    className: 'FSW16',
    favSubjects: 'HTML', 'CSS', 'JavaScript'

  });

  const barbara = new Person({
    name: 'Barbara,
    location: 'Los Angeles',
    age: 43,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `I'm such a lady!`
    gradClassName: 'CS1',
    favInstructor: 'Josh'
  });
