// CODE here for your Lambda Classes
//***********************Classes***********************//

// * First we need a Person class *//
class person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    console.log(
      `Hello, my name is ${this.name}, and I am from ${this.location}.`
    );
  }
}

class Instructor extends person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(string) {
    console.log(`Today, we are learning about ${string}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun the Sprint Challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(projectManagersAttributes) {
    super(projectManagersAttributes);
    this.gradClassName = projectManagersAttributes.gradClassName;
    this.favInstructor = projectManagersAttributes.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel} @Channel standy times!`
    );
  }
  debugsCode(studentObject, subject) {
    console.log(
      `${this.name} debugs ${studentObject.name}'s code on ${subject}.`
    );
  }
}

/***** PERSON OBJECTS *****/

const tony = new person({
  name: "Tony",
  age: 46,
  location: "Illinois",
  gender: "male"
});

const cat = new person({
  name: "Cat",
  age: 29,
  location: "Florida",
  gender: "female"
});

tony.speak();
cat.speak();

/***** INSTRUCTOR OBJECTS *****/
const pace = new Instructor({
  name: "Pace",
  age: 31,
  location: "Lambda School",
  gender: "male",
  specialty: "front-end",
  favLanguage: "CSS",
  catchPhrase: "5 mins get up and move around"
});

const josh = new Instructor({
  name: "Josh",
  age: 38,
  location: "Lambda School",
  gender: "male",
  specialty: "front-end",
  favLanguage: "JavaScript",
  catchPhrase: "to code or not to code."
});

pace.demo("Constructors");
josh.grade(cat, "Node.js");

/***** STUDENT OBJECTS *****/
const june = new Student({
  name: "June",
  age: 33,
  location: "New York",
  gender: "female",
  previousBackground: "uber",
  className: "WEBpt11",
  favSubjects: ["html", "css", "javascript", "less"]
});

const matt = new Student({
  name: "Matt",
  age: 28,
  location: "Jersey",
  gender: "male",
  previousBackground: "Warehouse",
  className: "WEBpt11",
  favSubjects: ["javascript", "html", "css", "Less"]
});

june.speak();
june.listsSubjects();
matt.PRAssignment("JavaScript-IV");
matt.sprintChallenge("JavaScript-Fundamentals");

/***** PROJECT MANAGERS OBJECTS *****/
const erica = new ProjectManagers({
  name: "Erica",
  age: 21,
  location: "Missippi",
  gender: "female",
  specialty: "back-end",
  favLanguage: "javascript",
  catchPhrase: "let's get it",
  gradClassName: "WEBpt11",
  favInstructor: "Josh"
});

const kyle = new ProjectManagers({
  name: "Kyle",
  age: 26,
  location: "California",
  gender: "male",
  specialty: "full-stack",
  favLanguage: "Python",
  catchPhrase: "Time to Code!",
  gradClassName: "WEBpt11",
  favInstructor: "Pace"
});

erica.speak();
erica.demo("Methods");
kyle.grade(nate, "javascript");
kyle.standUp("WEB24-justin");
kyle.debugsCode(stephanie, "javascript");
