// CODE here for your Lambda Classes

// base class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;

  }
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
}

// child classes of Person
class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.favLanguage = instructorAttrs.favLanguage;
    this.specialty = instructorAttrs.specialty;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerAttrs) {
    super(projectManagerAttrs);
    this.gradClassName = projectManagerAttrs.gradClassName;
    this.favInstructor = projectManagerAttrs.favInstructor;
  }
  standup(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standup time!​​​​​`)
  }
  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}



const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Under the hood`
})

const frank = new ProjectManager({
  name: 'Frank',
  location: 'Olympia',
  age: 29,
  gender: 'male',
  favLanguage: 'CSS',
  specialty: 'Stylesheets',
  catchPhrase: `CSS is the best!`,
  gradClassName: 'CS3',
  favInstructor: 'Fred'
})

const tom = new Student({
  name: 'Tom',
  location: 'Seattle',
  age: 28,
  gender: 'male',
  previousBackground: "Coffee",
  className: "FSW16",
  favSubjects: ['CSS', 'JavaScript']
})


console.log(fred);
console.log(frank);
console.log(tom);

fred.speak();
tom.speak();
fred.demo("JavaScript")
fred.grade(tom, "JavaScript");
frank.standup('General');
frank.debugCode(tom, 'CSS');