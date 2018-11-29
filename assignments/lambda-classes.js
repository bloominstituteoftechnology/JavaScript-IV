// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  finalGrade(student) {
    let score = Math.floor(Math.random() * (100 - 60)) + 60;
    return student.graduate(score);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate(grade) {
    if (grade >= 70) {
      return `${this.name} has graduated from Lambda School.`;
    } else {
      return `${
        this.name
      } still has a bit more work to do before graduating from Lambda School.`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}\'s code on ${subject}`;
  }
}

const samuel = new Student({
  name: "Samuel",
  age: 23,
  location: "New Jersey",
  gender: "M",
  previousBackground: "cat sitter",
  className: "FSW16",
  favSubjects: ["JavaScript", "HTML", "CSS"]
});

const jackie = new Student({
  name: "Jacqueline",
  age: 26,
  location: "Fort Lauderdale",
  gender: "F",
  previousBackground: "architect",
  className: "FSW16",
  favSubjects: "CSS"
});

const connie = new Student({
  name: "Conrad",
  age: 46,
  location: "DesMoines",
  gender: "M",
  previousBackground: "driver",
  className: "FSW16",
  favSubjects: "HTML"
});

const mitzi = new Instructor({
  name: "Mitzi",
  age: 30,
  location: "Los Alamos",
  gender: "F",
  specialty: "CodePen",
  favLanguage: "JavaScript",
  catchPhrase: "Keep it DRY!"
});

const luther = new ProjectManager({
  name: "Luther",
  age: 27,
  location: "San Bernardino",
  gender: "M",
  specialty: "React",
  favLanguage: "BASIC",
  catchPhrase: "That is awesome!",
  gradClassName: "CS5",
  favInstructor: "Mitzi"
});

console.log(
  `${mitzi.speak()}. I'll be your instructor for this course. ${mitzi.demo(
    "CSS"
  )}. ${mitzi.catchPhrase}`
);
console.log(
  `${luther.speak()}. Anybody else from ${
    luther.location
  }? Nobody? Okay, I'm your PM for today. Our slack channel is #${
    luther.gradClassName
  }-${luther.name}.`
);
console.log(`${samuel.speak()}. Some of my favorite subjects are:`);
samuel.listsSubjects();
console.log(connie.PRAssignment("CSS-IV"));
console.log(luther.debugsCode(connie, "HTML"));
console.log(luther.standup("#luther"));
console.log(luther.grade(samuel, "attendance"));
console.log(luther.finalGrade(samuel));
