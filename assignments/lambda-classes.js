// CODE here for your Lambda Classes
class Person {
  constructor(parentAttributes) {
    this.name = parentAttributes.name;
    this.age = parentAttributes.age;
    this.location = parentAttributes.location;
    this.gender = parentAttributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
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
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  grading(student) {
    return Math.random(0.5, student.grade) * 100;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade > 70) {
      return `Congrats ${this.name}! You have graduated.`;
    } else if (this.grade < 70) {
      return `${this.name} keep studying. You are not ready to graduate.`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standup time!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const josh = new Instructor({
  name: "Josh",
  location: "Utah",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const jameson = new Student({
  name: "Jameson",
  location: "Utah",
  age: 27,
  gender: "male",
  previousBackground: "Workforce Management",
  className: "CS11",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 95
});

const holly = new ProjectManager({
  name: "Holly",
  location: "Utah",
  age: 28,
  gender: "female",
  gradClassName: "CS6",
  favInstructor: "Josh"
});

// console.log(holly.speak());
// console.log(holly.standup('cs11'));
// console.log(josh.grade(jameson, "science"))
// console.log(josh.grade(jameson, "science"))
// console.log(jameson.PRAssignment("JavaScript"))
// console.log(jameson.speak());
// console.log(holly.debugsCode(jameson, "JavaScript"))
// console.log(jameson.listsSubjects())
// console.log(jameson.sprintChallenge("JavaScript"))
