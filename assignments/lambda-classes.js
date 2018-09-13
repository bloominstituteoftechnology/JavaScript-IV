// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(
      `Hello my name is ${this.name} and I am from ${this.location}.`
    );
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student) {
    return `${student} recieves a perfect score`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listSubjects(subjects) {
    let subjectsArr = subjects.forEach(function(subject) {
      console.log(subject);
    });
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerAttributes) {
    super(projectManagerAttributes);
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel} @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

const josh = new Instructor({
  age: 30,
  name: "Josh",
  location: "Utah",
  specialty: "Teaching",
  favLanguage: "JavaScript",
  catchPhrase: "Back in my day we used inline block and floats."
});

const bill = new ProjectManager({
  age: 25,
  name: "Bill",
  location: "Planet Earth",
  specialty: "RegEx",
  favLanguage: "Machine Code",
  catchPhrase: "Did everyone fill out their daily retrospective?",
  gradClassName: "CS1"
});

const riley = new Student({
  age: "22",
  name: "Riley",
  previousBackground: "Professional Time Waster",
  className: "FSW14",
  favSubjects: ["JavaScript, CSS, Python"]
});

console.log(josh.catchPhrase);
console.log(josh.demo("JavaScript"));
console.log(josh.grade("Riley"));
console.log(bill.catchPhrase);
console.log(bill.standUp("fsw14_bill"));
console.log(bill.gradClassName);
console.log(riley.previousBackground);
console.log(riley.favSubjects);
riley.listSubjects(riley.favSubjects);
console.log(riley.PRAssignment("JavaScript IV"));
console.log(riley.sprintChallenge("JavaScript Fundamentals"));
console.log(bill.debugsCode("Riley", "Closures"));
