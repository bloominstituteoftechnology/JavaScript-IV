class Person {
  constructor(personAttrs){
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttrs){
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttrs){
    super(PMAttrs);
    this.gradClassName = PMAttrs.gradClassName;
    this.favInstructor = PMAttrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const nick = new Student({
  name: 'Nick',
  age: 21,
  location: 'Colorado',
  gender: 'M',
  previousBackground: 'UX/UI Work',
  className: 'FSW 16',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const fred = new Student({
  name: 'Fred',
  age: 30,
  location: 'Crystal Cove',
  gender: 'M',
  previousBackground: 'Mystery Solving',
  className: 'FSW 16',
  favSubjects: ['HTML', 'CSS', 'JavaScript', 'Monster Catching']
});

const scooby = new Student({
  name: 'Scooby Doo',
  age: 5,
  location: 'Crystal Cove',
  gender: 'M',
  previousBackground: 'Eating Scooby Snacks',
  className: 'FSW 16',
  favSubjects: ['HTML', 'CSS', 'JavaScript', 'Eating Scooby Snacks']
});

const jeremy = new Instructor({
  name: 'Jeremy',
  age: 26,
  location: 'California',
  gender: 'M',
  specialty: 'React',
  favLanguage: 'Javascript',
  catchPhrase: `it's me, Jeremy!`
});

const zach = new Instructor({
  name: 'Zach',
  age: 35,
  location: 'Washington',
  gender: 'M',
  specialty: 'Python',
  favLanguage: 'Python',
  catchPhrase: `Woah guys it's me Zach.`
});

const kelly = new Instructor({
  name: 'Kelly',
  age: 29,
  location: 'Texas',
  gender: 'F',
  specialty: 'Backend',
  favLanguage: 'Javascript',
  catchPhrase: `Hey everyone, it's me Kelly`
});

const velma = new ProjectManager({
  name: 'Velma',
  age: 25,
  location: 'Crystal Cove',
  gender: 'F',
  gradClassName: 'CSW 14',
  favInstructor: 'Kelly'
});

const shaggy = new ProjectManager({
  name: 'Shaggy',
  age: 23,
  location: 'Crystal Cove',
  gender: 'M',
  gradClassName: 'CSW 13',
  favInstructor: 'Jeremy'
});

const daphne = new ProjectManager({
  name: 'Daphne',
  age: 24,
  location: 'Crystal Cove',
  gender: 'F',
  gradClassName: 'CSW 14',
  favInstructor: 'Zach'
});