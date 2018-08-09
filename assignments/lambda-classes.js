// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receieves a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name}  has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(PmAttributes) {
    super(PmAttributes);
    this.gradClassName = PmAttributes.gradClassName;
    this.favInstructor = PmAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// TESTING

// INSTRUCTOR TESTS
const Fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "Don't forget the homies"
});

const Bob = new Instructor({
  name: "Bob",
  location: "Home",
  age: 12,
  gender: "Female",
  favLanguage: "PHP",
  specialty: "All-ends",
  catchPhrase: "Forget the homies"
});

const Pete = new Instructor({
  name: "Pete",
  location: "Bedrock",
  specialty: "Pasta",
  catchPhrase: "HELLO?"
});

// STUDENT TESTS
const StudentOne = new Student({
  name: "Frankie",
  location: "NYC",
  age: 7,
  previousBackground: "School",
  className: "CS13",
  favSubjects: "HTML",
  catchPhrase: "WHAT IS GOING ON"
});

const StudentTwo = new Student({
  name: "Joe",
  location: "Bedrock",
  age: 57,
  gender: "male",
  favLanguage: "JavaScript",
  favSubjects: "Front-end",
  catchPhrase: "I KNOW EVERYTHING ALREADY"
});

const StudentThree = new Student({
  name: "Jimmy Two Shoes",
  location: "The hood",
  age: 17,
  gender: "male",
  favLanguage: "Rap",
  specialty: "Pushin",
  className: "I love to code!"
});

// PM TESTS
const pmOne = new ProjectManager({
  name: "pmOne",
  age: 37,
  gender: "male",
  gradClassName: "CS1",
  specialty: "Front-end",
  catchPhrase: "Don't forget the homies"
});

const pmTwo = new ProjectManager({
  name: "pmTwo",
  location: "Home",
  gradClassName: "CS2",
  specialty: "All-ends",
  catchPhrase: "Forget the homies"
});

const pmThree = new ProjectManager({
  name: "pmThree",
  location: "Bedrock",
  favInstructor: "ME",
  catchPhrase: "HELLO?"
});

console.log(pmTwo.name);
console.log(StudentThree.className);
console.log(Pete.specialty);
console.log(pmOne.gradClassName);

console.log(pmThree.speak());
console.log(pmOne.standUp("CS19"));
console.log(StudentTwo.sprintChallenge("JSIV"));
