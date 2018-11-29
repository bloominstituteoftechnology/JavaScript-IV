class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructors extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
} // Instructors

const Josh = new Instructors({
  name: "Johsn",
  age: 35,
  location: "Home",
  gender: "Male",
  specialty: "FrontEnd",
  favLanguage: "JavaScript",
  catchPhrase: "Come in here"
});

const Ryan = new Instructors({
  name: "Ryan",
  age: 30,
  location: "Also Home",
  gender: "Male",
  specialty: "BackEnd",
  favLanguage: "JavaScript",
  catchPhrase: "Lookin good"
});

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }

  PRAssignment(student, subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}

const Enoka = new Student({
  name: "Enoka",
  age: 28,
  location: "MinneSNOWta",
  gender: "Male",
  previousBackground: "Insurance",
  className: "FSW16",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const Johnny = new Student({
  name: "Johnny",
  age: 30,
  location: "Da Bronx",
  gender: "Male",
  previousBackground: "Banker",
  className: "FSW16",
  favSubjects: ["Html", "CSS", "Python"]
});

class ProjectManager extends Instructors {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const Clint = new ProjectManager({
  name: "Clint",
  age: 30,
  location: "Utah",
  gender: "Male",
  specialty: "FrontEnd?",
  favLanguage: "JavaScript",
  catchPhrase: "Feelin good?"
});

const Bobby = new ProjectManager({
  name: "Bobby",
  age: 33,
  location: "Florida",
  gender: "Male",
  specialty: "BackEnd",
  favLanguage: "Python",
  catchPhrase: "You got this?"
});

Josh.demo("JavaScript");
Ryan.grade(Enoka, "JavaScript");
Enoka.PRAssignment(Enoka, "JavaScript");
Johnny.listsSubjects();
Clint.debugsCode(Johnny, "Python");
Bobby.standUp("FSW16");
