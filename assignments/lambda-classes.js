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
  adjustGradeUp(student, points) {
    let pointsAdjusted = Math.floor(Math.random() * Math.floor(100));
    let newGrade = student.grade + pointsAdjusted;
    student.grade = newGrade;
    newGrade > 100 ? (student.grade = 100) : (newGrade = student.grade);
    console.log(
      `${this.name} adjusted ${student.name}'s grade up by ${pointsAdjusted} ${
        student.name
      }'s new grade is ${student.grade}`
    );
  }
  adjustGradeDown(student, points) {
    let pointsAdjusted = Math.floor(Math.random() * Math.floor(100));
    let newGrade = student.grade - pointsAdjusted;
    student.grade = newGrade;
    newGrade < 0 ? (student.grade = 0) : (newGrade = student.grade);
    console.log(
      `${this.name} adjusted ${
        student.name
      }'s grade down by ${pointsAdjusted} ${student.name}'s new grade is ${
        student.grade
      }`
    );
  }
}

class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favoriteSubjects = studentOptions.favoriteSubjects;
    this.grade = studentOptions.grade;
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
  graduate() {
    this.grade >= 70
      ? console.log(`You are ready to graduate with a grade of ${this.grade}`)
      : console.log(
          `Oh no your grade is only ${
            this.grade
          } you need a 70 or better to graudate better keep studying`
        );
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

const Michael = new Student({
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

const Julian = new ProjectManager({
  name: "Julian",
  location: "Orlando, Florida",
  age: 27,
  gender: "male",
  gradClassName: "CS8",
  favInstructor: "Everyone"
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
console.log(Julian.speak());
Michael.grade = 87;
console.log(Michael.grade);
console.log(Julian.adjustGradeUp(Michael));
console.log(Julian.adjustGradeDown(Michael));
console.log(Julian.adjustGradeUp(Michael));
console.log(Julian.adjustGradeDown(Michael));
console.log(Julian.adjustGradeUp(Michael));
console.log(Julian.adjustGradeDown(Michael));
console.log(Michael.graduate());
