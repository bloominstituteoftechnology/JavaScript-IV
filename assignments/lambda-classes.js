// CODE here for your Lambda Classes
// Initial Pull Request

// Base Class
class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// Instructor Class
class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  testScore(student) {
    let grade = student.grade;
    let random = Math.floor(Math.random() * 21);
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    let newRandom = random * plusOrMinus;
    if (grade) {
      return grade + newRandom;
    }
  }
  graduate(student) {
    let score = this.testScore(student);
    if (score >= 70) {
      return `Congratulations you passed! your score is ${score}`;
    } else {
      return `Sorry get your grades up! Score: ${score}`;
    }
  }
}

// Student Class
class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
    this.grade = studentOptions.grade;
  }
  listsSubjects() {
    return `${this.name}'s favorite subjects are ${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

// Project Manager Class
class ProjectManager extends Instructor {
  constructor(pmOptions) {
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
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const dan = new Student({
  name: "Dan",
  location: "Charlotte",
  age: 34,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Back-end",
  catchPhrase: `Biggest risk in life is not taking one`,
  previousBackground: "MySQL",
  className: "CS11",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 70
});

const perry = new ProjectManager({
  name: "Perry",
  location: "Boston",
  age: 39,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Back-end",
  catchPhrase: `Roll with the punches`,
  previousBackground: "MySQL",
  className: "CS11",
  favSubjects: ["Html", "CSS", "JavaScript"],
  gradClassName: "CS8",
  favInstructor: "Fred"
});

console.log(fred.demo("Javascript"));
console.log(fred.speak());
console.log(fred.grade(dan, "Javascript"));
console.log(dan.listsSubjects());
console.log(dan.PRAssignment("CSS"));
console.log(dan.sprintChallenge("CSS"));
console.log(perry.standUp("CS11"));
console.log(perry.debugsCode(dan, "CS11"));
// Stretch Goal
console.log(fred.testScore(dan));
console.log(fred.graduate(dan));
