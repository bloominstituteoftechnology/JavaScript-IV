// CODE here for your Lambda Classes

class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(options) {
    super(options);
    this.specialty = options.specialty;
    this.favLanguage = options.favLanguage;
    this.catchPhrase = options.catchPhrase;
  }

  demo(str) {
    console.log(`Today we are learning about ${str}`);
  }

  grade(stuObj, subjectStr) {
    console.log(`${stuObj.name} receives a perfect score on ${subjectStr}.`);
  }
}

class Student extends Person {
  constructor(options) {
    super(options);
    this.previousBackground = options.previousBackground;
    this.className = options.className;
    this.favSubjects = options.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach( subject => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

}

class ProjectManager extends Instructor {
  constructor(options) {
    super(options);
    this.gradClassName = options.gradClassName;
    this.favInstructor = options.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(stuObj, subject) {
    console.log(`${this.name} debugs ${stuObj.name}'s code on ${subject}`);
  }

}

const fred = new ProjectManager({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'CS10',
  favInstructor: 'Sean'
});

let xangattr = {
  name: "Xang",
  age: 25,
  location: "Fremont, CA",
  gender: "male",
  previousBackground: "Valet",
  className: "CS10",
  favSubjects: ["html", "CSS", "JavaScript"]
};
const xang = new Student(xangattr);

xang.speak();
xang.listsSubjects();
xang.PRAssignment("JS IV");
xang.sprintChallenge("JavaScript");

fred.speak();
fred.demo("class in JavaScript");
fred.standUp("#weekend");
fred.debugsCode(xang, "JavaScript");