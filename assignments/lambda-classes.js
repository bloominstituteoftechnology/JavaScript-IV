class Person {
  constructor({ name, age, location, gender }) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(atrs) {
    super(atrs);
    this.specialty = atrs.specialty;
    this.favLanguage = atrs.favLanguage;
    this.catchPhrase = atrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
}

class Student extends Instructor {
  constructor(atrs) {
    const { previousBackground, className, favSubjects, grade = 100 } = atrs;
    super(atrs);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = grade;
  }

  listSubjects() {
    for (let subject of favSubjects) {
      console.log(subject);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(atrs) {
    super(atrs);
    this.gradClassName = atrs.gradClassName;
    this.favInstructor = atrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${students.name}'s code on ${subject}.`);
  }
}
