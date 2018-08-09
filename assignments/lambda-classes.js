// CODE here for your Lambda Classes
// Creating Person class
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
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
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  hijinx(student) {
    let luckyNum = Math.random() * (100);
    let randomNum = Math.random() * (10);
    if (luckyNum > 49) {
      student.grade += randomNum;
      console.log(`${student.name} gained ${this.name}'s favor and earned ${randomNum} points on their grade!`);
    } else {
      student.grade -= randomNum;
      console.log(`${student.name} failed to grasp the curriculum, and lost ${randomNum} points on their grade!`);
    }
  }
  graduate(student) {
    if (student.grade >= 70) {
      console.log(`Congratulations ${student.name}! You graduated!`);
    } else {
      console.log(`I'm sorry ${student.name}, you need to go study some more...`);
    }
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
      console.log(this.favSubjects);
    }
    PRAssignment(subject) {
      console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
      console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }

}

const michael = new Student({
  name: 'Michael',
  age: 32,
  location: 'Arkansas',
  gender: 'Male',
  previousBackground: 'Technical Support',
  className: 'CS13',
  favSubjects: [
    'JavaScript',
    'LESS',
    'Lunch'
  ],
  grade: 100,
});

const teacherMan = new Instructor({
  name: 'Mr. Garrison',
  age: 40,
  location: 'South Park',
  gender: 'Male',
  specialty: 'Public Speaking',
  favLanguage: 'JavaScript',
  catchPhrase: "Oh, geez!" });

  const goose = new ProjectManager({
    name: 'Goose',
    age: 25,
    location: 'Lambda Land',
    gender: 'Female',
    specialty: 'Inspiring Presence',
    favLanguage: 'C',
    catchPhrase: "Make sure to commit and push!",
    gradClassName: 'CS8',
    favInstructor: 'Josh'
  });

  goose.standUp('cs13');
  teacherMan.demo('CSS');
  michael.listsSubjects();
  goose.grade(michael, 'JavaScript');
  teacherMan.speak();
  goose.speak();
  teacherMan.hijinx(michael);
  teacherMan.hijinx(michael);
  goose.hijinx(michael);
  goose.hijinx(michael);
  console.log(michael.grade);
  goose.graduate(michael);
