// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location} `;
  }
}

class Instructor extends Person {
  constructor(insAttr) {
    super(insAttr);
    this.speciality = insAttr.speciality;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(Student, subject) {
    `${Student.name} recieves a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(stuAttr) {
    super(stuAttr);
    this.previousBackground = stuAttr.previousBackground;
    this.className = stuAttr.className;
    this.favSubjects = stuAttr.favSubjects;
  }
  listSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces ${channel}, @channel standy times`;
  }
  debugsCode(subject) {
    return `${this.name} debugs ${Student.name}'s code on ${subject}`;
  }
}

//Instructor Objects
const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const bob = new Instructor({
  name: "Bob",
  location: "Austin",
  age: 42,
  gender: "male",
  favLanguage: "React",
  specialty: "Front-end",
  catchPhrase: `yep I'm Bob`
});

//Student Objects

const marguel = new Student({
  name: "Marguel",
  location: "College Station",
  age: 21,
  gender: "male",
  previousBackground: "Student",
  className: "CSPT2",
  favSubjects: "JavaScript"
});

const Jessica = new Student({
  name: "Jesiica",
  location: "New York",
  age: 33,
  gender: "Female",
  previousBackground: "Student",
  className: "CSPT2",
  favSubjects: "CSS"
});
