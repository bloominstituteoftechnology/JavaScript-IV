// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.gender = props.gender;
    this.location = props.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(x => console.log(x));
  }

  PRAssigment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Yabba dabba doo`
});

const dovahkin = new Student({
  name: "Dovahkin",
  location: "Tamriel",
  age: 30,
  gender: "male",
  className: "CS12",
  favSubjects: ["JavaScript", "C", "Python"],
  previousBackground: "Dragon Slayer"
});

const barney = new ProjectManager({
  name: "Barney",
  location: "Bedrock",
  age: 27,
  gender: "male",
  favLanguage: "Python",
  specialty: "DevOps",
  catchPhrase: `Don't forget the homies`,
  gradClassName: "CS3",
  favInstructor: "Fred"
});

fred.speak();
fred.demo("React");
fred.grade(dovahkin, "Computer Architecture");
dovahkin.speak();
dovahkin.listsSubjects();
dovahkin.PRAssigment("JavaScript-II");
dovahkin.sprintChallenge("Redux");
barney.speak();
barney.demo("Data Structures");
barney.standUp("#cs12");
barney.debugsCode(dovahkin, "React");
