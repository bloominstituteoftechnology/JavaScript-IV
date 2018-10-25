// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.location = attr.location;
    this.age = attr.age;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
  }
  listsSubjects() {
    return `My favorite subjects are ${[...this.favSubjects].join(", ")}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(slack) {
    return `${this.name} announces to ${slack}, @${slack} standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
const dan = new Instructor({
  name: "Dan",
  location: "San Andreas",
  age: 26,
  gender: "male",
  favLanguage: "C",
  specialty: "Back-end",
  catchPhrase: `Henlo`
});
const connor = new Instructor({
  name: "Connor",
  location: "New York",
  age: 29,
  gender: "male",
  favLanguage: "Python",
  specialty: "Back-end",
  catchPhrase: `F`
});
const ashley = new ProjectManager({
  name: "Ashley",
  location: "Dallas",
  age: 21,
  gender: "female",
  favLanguage: "Java",
  specialty: "Back-end",
  catchPhrase: `Let's get this bread gamers`
});
const emily = new ProjectManager({
  name: "Emily",
  location: "Austin",
  age: 33,
  gender: "female",
  favLanguage: "HTML/CSS",
  specialty: "Front-end",
  catchPhrase: `lit`
});
const ed = new ProjectManager({
  name: "Edward",
  location: "Houston",
  age: 26,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `eskitit`
});
const josh = new Student({
  name: "Josh",
  location: "San Antonio",
  age: 20,
  gender: "male",
  grade: 100,
  previousBackground: "Call Center",
  className: "FSWPT3",
  favSubjects: ["Front-end", "JavaScript", "Responsive Design"]
});
const nolan = new Student({
  name: "Nolan",
  location: "NH",
  age: 25,
  gender: "male",
  grade: 92,
  previousBackground: "Warehouse",
  className: "FSWPT3",
  favSubjects: ["Back-end", "C", "OOP"]
});
const jose = new Student({
  name: "Jose",
  location: "OKC",
  age: 29,
  gender: "male",
  grade: 89,
  previousBackground: "IT",
  className: "FSWPT3",
  favSubjects: ["Back-end", "Python", "OOP"]
});

console.log(fred.speak());
console.log(connor.demo("JavaScript-IV"));
console.log(dan.grade(josh, "JavaScript-IV"));

console.log(ashley.speak());
console.log(ed.demo("JavaScript-IV"));
console.log(ashley.grade(nolan, "JavaScript-IV"));
console.log(emily.standUp("FSWPT3"));
console.log(ed.debugsCode(jose, "JavaScript-IV"));

console.log(josh.speak());
console.log(josh.listsSubjects());
console.log(nolan.PRAssignment("JavaScript-II"));
console.log(jose.sprintChallenge("JavaScript-IV"));

console.log("-----------stretch-----------");
console.log(dan.addGrades(josh));
console.log(ashley.addGrades(nolan));
