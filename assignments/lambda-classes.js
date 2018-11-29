// CODE here for your Lambda Classes

// random grade generators

const gradeGenerator = function () {
  return Math.floor((Math.random() * 50) + 50);
}

const gradeChanger = function () {
  return Math.floor((Math.random() * 40 - 20) + 1);
}

let randomGrade = gradeGenerator();
let changeGrade = gradeChanger();
let finalGrade = randomGrade + changeGrade;

// console.log(randomGrade);
// console.log(finalGrade);

// base class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;

  }
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
}

// Instructor class, child of Person
class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.favLanguage = instructorAttrs.favLanguage;
    this.specialty = instructorAttrs.specialty;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
  changeGrade(student) {
    console.log(`${student.name}'s grade is ${student.grade}. I am altering the grade by ${changeGrade}.`);
  }
}

// Student class child of Person
class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
  }
  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are:`)
    for (let i = 0; i < this.favSubjects.length; i++)
      console.log(this.favSubjects[i]);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduation() {
    if (finalGrade > 70) {
      console.log(`${this.name}'s final grade is ${finalGrade}! They have graduated from LS!`)
    } else {
      console.log(`${this.name}'s final grade is ${finalGrade}. Have do not yet qualify to graduate from LS.`)
    }

  }
}

// ProjectManager class child of Instructor
class ProjectManager extends Instructor {
  constructor(projectManagerAttrs) {
    super(projectManagerAttrs);
    this.gradClassName = projectManagerAttrs.gradClassName;
    this.favInstructor = projectManagerAttrs.favInstructor;
  }
  standup(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standup time!​​​​​`)
  }
  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// create Instructors
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Under the hood`
})
const betty = new Instructor({
  name: 'Betty',
  location: 'LA',
  age: 31,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Time to get learning`
})
const tina = new Instructor({
  name: 'Tina',
  location: 'New York',
  age: 28,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `This is the best `
})

// create ProjectManagers
const frank = new ProjectManager({
  name: 'Frank',
  location: 'Olympia',
  age: 29,
  gender: 'male',
  favLanguage: 'CSS',
  specialty: 'Stylesheets',
  catchPhrase: `CSS is the best!`,
  gradClassName: 'CS3',
  favInstructor: 'Fred'
})
const john = new ProjectManager({
  name: 'John',
  location: 'Big City West',
  age: 25,
  gender: 'male',
  favLanguage: 'HTML',
  specialty: 'index.html',
  catchPhrase: `HTML is the best!`,
  gradClassName: 'CS5',
  favInstructor: 'Betty'
})
const jane = new ProjectManager({
  name: 'Jane',
  location: 'Test City East',
  age: 29,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Teaching new people',
  catchPhrase: `How fun!`,
  gradClassName: 'CS8',
  favInstructor: 'Fred'
})

// create Students
const tom = new Student({
  name: 'Tom',
  location: 'Seattle',
  age: 28,
  gender: 'male',
  previousBackground: "Coffee",
  className: "FSW16",
  favSubjects: ['CSS', 'JavaScript'],
  grade: randomGrade
})


// ==================== testing Stretch methods

// console.log(tom.grade);
fred.changeGrade(tom);
tom.graduation();


// ==================== testing MVP methods
// fred.speak();
// tom.speak();
// fred.demo("JavaScript")
// fred.grade(tom, "JavaScript");
// frank.standup('General');
// frank.debugCode(tom, 'CSS');

// tom.listsSubjects();
// tom.PRAssignment("Java");
// tom.sprintChallenge("Java");


// ==================== testing creation of classes
// console.log(fred);
// console.log(betty);
// console.log(tina);
// console.log(frank);
// console.log(john);
// console.log(jane);
// console.log(tom);