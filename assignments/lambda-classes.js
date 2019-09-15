// CODE here for your Lambda Classes

class Person {
  constructor(personObjectAttrs) {
    this.name = personObjectAttrs.name;
    this.age = personObjectAttrs.age;
    this.location = personObjectAttrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//Person 1

const peter = new Person({
  name: "Peter",
  age: 35,
  location: "New Jersey"
});
console.log(peter.speak());

//Person 2

const michael = new Person({
  name: "Michael",
  age: 32,
  location: "Nashville"
});
console.log(michael.speak());

//Instructor Class

class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student} receives a perfect score on ${subject}`);
  }
}

//Instructor 1

let andrew = new Instructor({
  name: "Andrew",
  age: 35,
  location: "LA",
  specialty: "Back-end",
  favLanguage: "Node.js",
  catchPhrase: "Do you guys want to do a group session or 1:1s?"
});

console.log(andrew.demo("Node.js"), andrew.grade("Jane", "Javascript"));

//Instructor 2

let George = new Instructor({
  name: "George",
  age: 36,
  location: "NewYork",
  specialty: "Data Science",
  favLanguage: "Python",
  catchPhrase: "What is your fav back-end language?"
});

console.log(George.demo("Python"), andrew.grade("Mary", "JavaScript"));

//student
class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignments(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

//Student 1
let sam = new Student({
  name: "Sam",
  previousBackground: "Former Truck Driver",
  className: "Java Script II",
  favSubjects: ["HTML", "CSS", "JS"]
});

console.log(sam.listsSubjects());
console.log(sam.PRAssignments("JS"));
console.log(sam.sprintChallenge("CSS"));

//Student 2
let ann = new Student({
  name: "Ann",
  previousBackground: "Secretary",
  className: "Javscript III",
  favSubjects: ["JS", "Python", "Data Science"]
});

console.log(ann.listsSubjects());
console.log(ann.PRAssignments("Python"));
console.log(ann.sprintChallenge("Data Science"));

class ProjectManager extends Instructor {
  constructor(projectManager) {
    super(projectManager);
    this.gradClassName = projectManager.gradClassName;
    this.favInstructor = projectManager.favInstructor;
  }

  standUp(slackChannel) {
    console.log(
      `${this.name} annouces to ${slackChannel}, @ channel standy time`
    );
  }
  debugsCode(student, subject) {
    console.log(
      `${this.name} debugs ${student.className}'s code on ${subject}`
    );
  }
}

const jim = new ProjectManager({
  gradClassName: "USC",
  favInstructor: "Andrew",
  name: "Jim",
  age: 40,
  location: "Atlanta"
});

console.log(jim.standUp("Webpt10"));
console.log(jim.debugsCode(ann, "JavaScript III"));
