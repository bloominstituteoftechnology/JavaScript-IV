// CODE here for your Lambda Classes
class Person { 
  constructor( bio) {
    this.name = bio.name;
    this.age = bio.age;
    this.location = bio.location;
    this.gender = bio.gender;
  }
}

Person.prototype.speak = function () {
  return  `Hello my name is ${this.name}, I am from ${this.location}`
}
class Instructor extends Person {
  constructor(characteristics) {
    super(characteristics);
    this.specialty = characteristics.specialty;
    this.favLanguage = characteristics.favLanguage;
    this.catchPhrase = characteristics.catchPhrase;
  }
}

Instructor.prototype.demo = function (subject) {
  return `Today we are learning about ${subject}`
};

class Student extends Person { 
  constructor(likes) {
    super(likes);
    this.previousBackground = likes.previousBackground;
    this.favLanguage = likes.favLanguage;
    this.className = likes.className;
    this.favSubjects = likes.favSubjects;
  }
}
Student.prototype.listsSubjects = function () {
  console.log(`${this.name}'s favorite subject is ${this.favSubjects}`)
}
Student.prototype.PRAssignment = function (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
}
Student.prototype.sprintChallenge = function (subject) {
  console.log(`${this.name} has begun sprint challenge on ${subject}`)
}

class ProjectManagers extends Instructor {
  constructor(skills) {
    super(skills);
    this.gradClassName = skills.gradClassName;
    this.favInstructor = skills.favInstructor;

  }
}
ProjectManagers.prototype.standUp = function (channel) {
  console.log(`${this.name} '@'${channel} stand up time! `)
}
ProjectManagers.prototype.debugsCode = function (student, subject) {
  console.log(`${this.name} debugs  ${student}'s code on ${subject}`)
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

const marc = new ProjectManagers({
  name: 'Cark',
  location: 'Yucaipa',
  age: 32,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `Don't forget my movies`
});

const Javier = new Student({
  name: 'Javi',
  location: 'Colton',
  age: 36,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Whilst`,
  favSubjects: "HTML",
});

console.log(fred.age);
marc.debugsCode("javier", "javascript")
Javier.listsSubjects()