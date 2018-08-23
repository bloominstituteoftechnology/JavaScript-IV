class Person {
  constructor(demographics) {
    this.name = demographics.name;
    this.age = demographics.age;
    this.location = demographics.location;
    this.gender = demographics.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.speciality = instructorOptions.speciality;
    this.favLanguage = instructorOptions.speciality;
    this.catchPhrase = instructorOptions.speciality;
  }
  demo(subject) {
    console.log(`Today we are talking about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favoriteSubjects = studentOptions.favoriteSubjects;
  }
  listSubjects() {
    for (i = 0; i < this.favoriteSubjects.length; i++) {
      console.log(this.favoriteSubjects);
    }
  }
  PRAssignment(student, subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }
  spintChallenge(stuent, subject) {
    console.log(`${studnet.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmOptions) {
    super(pmOptions);
    this.gradClassName = pmOptions.gradClassName;
    this.favInstructor = pmOptions.favInstructor;
  }
  standup(channel) {
    console.log(`${this.name} announces to ${channel},@ channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const Joe = new Instructor({
  name: "Joe",
  location: "San Diego, California",
  age: 29,
  gender: "male",
  favLanguage: "C++",
  specialty: "Front-end",
  catchPhrase: `Debug! Debug! Debug!`
});

const Michael = new Instructor({
  name: "Michael",
  location: "Akron,Ohio",
  age: 29,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Full-Stack",
  catchPhrase: "Anything worth doing is worth doing right"
});

const Michelle = new Student({
  name: "Michelle",
  location: "Las Vegas, Nevada",
  age: 21,
  gender: "female",
  previousBackground: "Front-end developer",
  className: "CSPT2",
  favoriteSubjects: ["Math", "Science", "English"]
});

const Nick = new Student({
  name: "Nick",
  location: "Medina, Ohio",
  age: 39,
  gender: "male",
  previousBackground: "none",
  className: "CSPT2",
  favoriteSubjects: ["Math", "History", "Trigonometry"]
});

const Jack = new ProjectManager({
  name: "Jack",
  location: "Orlando, Florida",
  age: 27,
  gender: "male",
  gradClassName: "CS8",
  favInstructor: "Dan Frehner"
});

const Judy = new ProjectManager({
  name: "Judy",
  location: "Wichita, Kansas",
  age: 47,
  gender: "female",
  gradClassName: "CS9",
  favInstructor: "Dan Frehner"
});

console.log(Michelle.favoriteSubjects);
console.log(Jack.speak());
