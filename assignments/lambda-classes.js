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
    console.log(`{this.name} debugs ${student.name}'s code on ${subject}`);
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
  name: 'Mr. Teacher',
  age: 37,
  location: 'Classroom',
  gender: 'Male',
  specialty: 'UI design',
  favLanguage: 'JavaScript',
  catchPhrase: "Now you're thinking with functions!" });

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
