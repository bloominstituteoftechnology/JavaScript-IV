// CODE here for your Lambda Classes
class Person {
  constructor(personProps) {
    this.name = personProps.name;
    this.location = personProps.location;
    this.age = personProps.age;
    this.gender = personProps.gender;
  }
  speak() {
    return `Hello my name is ${this.name} , I am from ${this.location}`;
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
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) { //checking if quotes are needed later
    return `${student.name} recieves a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects.map(subject => subject)} `;
  }
  PRAssignments(subject) {
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }
  debugsCode(student) {
    return `${name} debugs ${student.name}'s code on ${subject} `
  }
  standUp(slackChannel) {
    return `${name} announces to ${slackChannel}, @channel standy times! `
  }
}

// PERSON ///////
// this.gender = personProps.gender;
// this.name = personProps.name;
// this.age = personProps.age;
// this.location = personProps.location;

// INSTRUCTOR ////////
// this.specialty = instructorProps.specialty;
// this.favLanguage = instructorProps.favLanguage;
// this.catchPhrase = instructorProps.catchPhrase;

// STUDENT //////////
// this.previousBackground = studentProps.previousBackground;
// this.className = studentProps.className;
// this.favSubjects = studentProps.favSubjects

// Project Manageer ////////
// this.gradClassName = pmProps.gradClassName;
// this.favInstructor = pmProps.favInstructor;


const Jon = new Person({
  name: 'Jon',
  location: 'Spain',
  age: 97,
  gender: 'male',
});
console.log(Jon);

const Jessica = new Person({
  name: 'Jessica',
  location: 'Guatemala',
  age: 37,
  gender: 'female'
});
console.log(Jessica);

const Kamal = new Instructor({
  name: 'Kamal',
  location: 'Guadalajara',
  age: 45,
  gender: 'male',
  specialty: 'systems',
  favLanguage: 'Cobal',
  catchPhrase: 'Coballin Coballin'
});
console.log(Kamal)

const Frank = new Instructor({
  name: 'Frank',
  location: 'California',
  age: 39,
  gender: 'male',
  specialty: 'Front-End',
  favLanguage: 'Javascript',
  catchPhrase: 'dont mess with me'
});
console.log(Frank)

const Celina = new Student({
  name: 'Celia',
  location: 'California',
  age: 20,
  gender: 'female',
  previousBackground: 'geology',
  className: 'CS_582',
  favSubjects: ['Linux', 'math', 'algorithms']
});
console.log(Celina)

const Andrew = new Student({
  name: 'Andrew',
  location: 'South Dakota',
  age: 59,
  gender: 'male',
  previousBackground: 'support tech',
  className: 'CS_7',
  favSubjects: ['Functional programming', 'Java', 'Business']
})
console.log(Andrew)

const Lora = new ProjectManager({
  name: 'Lora',
  location: 'Houston',
  age: 50,
  gender: 'female',
  specialty: 'React.js',
  favLanguage: 'Javascript',
  catchPhrase: 'Standy Time!!',
  gradClassName: 'CS_15',
  favInstructor: 'Calamari'
});
console.log(Lora)

const Cole = new ProjectManager({
  name: 'Cole',
  location: 'Houston',
  age: 35,
  gender: 'male',
  specialty: 'python',
  favLanguage: 'Python',
  catchPhrase: 'lets get crackin!',
  gradClassName: 'CS_40',
  favInstructor: 'Bill'
});
console.log(Cole)