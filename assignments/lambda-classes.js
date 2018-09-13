// CODE here for your Lambda Classes

// Base Class
class Person {
  constructor(properties) {
    this.name = properties.name;
    this.age = properties.age;
    this.location = properties.location;
    this.gender = properties.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(subject, student) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }

  listSubjects() {
    return `These are my favoirte subjects: ${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Person {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }

  standUp(channel) {
    return `${
      this.name
    } announces to ${channel}, @${channel} standy times!​​​​​`;
  }

  debugCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// PEOPLE

const michael = new Instructor({
  name: 'Michael',
  location: 'Scranton',
  age: 45,
  gender: 'male',
  favLanguage: 'Improv Comedy',
  specialty: 'Front-end',
  catchPhrase: `I love inside jokes. I'd love to be part of one one day.`
});

const josh = new Instructor({
  name: 'Josh',
  location: 'Provo',
  age: 38,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Good morning FSW-14`
});

const ryan = new Student({
  name: 'Ryan',
  location: 'Youngstown',
  age: 29,
  gender: 'male',
  previousBackground: 'Music',
  className: 'FSW-14',
  favSubjects: ['LESS', 'JavaScript', 'React', 'Express', 'Responsive Design']
});

const pam = new Student({
  name: 'Pam',
  location: 'New York',
  age: 30,
  gender: 'female',
  previousBackground: 'Receptionist',
  className: 'FSW-12',
  favSubjects: ['CSS', 'LESS', 'Art', 'Design', 'Responsive Design']
});

const jim = new ProjectManager({
  name: 'Jim',
  location: 'Scranton',
  age: 35,
  gender: 'male',
  previousBackground: 'Sales',
  gradClassName: 'FSW-1',
  favInstructor: josh
});

const dwight = new ProjectManager({
  name: 'Dwight',
  location: 'Schrute Farms',
  age: 40,
  gender: 'male',
  previousBackground: 'Sales',
  gradClassName: 'FSW-1',
  favInstructor: michael
});

console.log(dwight.speak());
console.log(josh.demo('JavaScript'));
console.log(michael.grade('JavaScript', pam));
console.log(ryan.listSubjects());
console.log(ryan.PRAssignment('CSS'));
console.log(pam.sprintChallenge('React'));
console.log(jim.standUp('FSW-14'));
console.log(jim.debugCode(ryan, 'Express'));
