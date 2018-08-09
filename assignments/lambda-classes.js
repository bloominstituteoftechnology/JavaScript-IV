// CODE here for your Lambda Classes
//=============PERSON CLASS | BASE CLASS=============
class Person {
  constructor(options){
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

//=============INSTRUCTOR CLASS=============
class Instructor extends Person {
  constructor(instructorOptions){
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}` ;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}` ;
  }
}

//=============STUDENT CLASS=============
class Student extends Person {
  constructor(studentOptions){
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
    this.grade = studentOptions.grade;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade > 70) {
        return `${this.name} has graduated with a grade of ${this.grade}!`;
    }
  }
}

//=============PROJECT MANAGER CLASS=============
class ProjectManager extends Instructor {
  constructor(pmOptions){
    super(pmOptions);
    this.gradClassName = pmOptions.gradClassName;
    this.favInstructor = pmOptions.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
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

const john = new Instructor({
  name: 'John',
  location: 'Bedrock',
  age: 40,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Backend',
  catchPhrase: `Python is awesome`
});

const george = new Student({
  name: 'George',
  location: 'Texas',
  age: 29,
  gender: 'male',
  previousBackground: 'UX-Design',
  favSubjects: 'JavaScript,  Python, HTML, CSS',
  className: 'CS13',
  grade: 80
});

const amanda = new Student({
  name: 'Amanda',
  location: 'Wisconsin',
  age: 26,
  gender: 'female',
  previousBackground: 'UX-Design',
  favSubjects: 'HTML, CSS, LESS, Web-Design',
  className: 'CS13',
  grade: 90
});

const ron = new ProjectManager({
  name: 'Ron',
  location: 'California',
  age: 30,
  gender: 'male',
  gradClassName: 'CS8',
  favInstructor: 'Sean'
});

const lucy = new ProjectManager({
  name: 'Lucy',
  location: 'California',
  age: 32,
  gender: 'female',
  gradClassName: 'CS9',
  favInstructor: 'Bill'
});

console.log(fred.location)
console.log(george.sprintChallenge('javascript'));
console.log(fred.grade(george,'javascript'));
console.log(ron.debugsCode(george, 'Python'));
console.log(amanda.speak());
console.log(george.listSubjects());
console.log(lucy.standUp('#cs13-lucy-team'));
console.log(john.demo('JS Classes'));
console.log(amanda.PRAssignment("Javascript-II"));
console.log(amanda.listSubjects());
console.log(george.graduate());