// CODE here for your Lambda Classes
//Step 1: Create the classes for: Person, Instructor, Student, and Project Manager

//'Person' is the base class
class Person {
  constructor(parentAttributes) {
    this.name = parentAttributes.name;
    this.location = parentAttributes.location;
  }
  speak() {
    return console.log(
      `Hello, my name is ${this.name}, I am from ${this.location}.`
    );
  }
}

//'Instructor' class -> inherits(extends) from 'Person' class
class Instructor extends Person {
  constructor(instructorAttributes) {
    //super connects intructorAttributes to Person
    super(instructorAttributes);
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo() {
    return console.log(`Today we are learning about ${this.subject}`);
  }
  grade() {
    return console.log(
      `${this.name} receives a perfect score on ${this.subject}`
    );
  }
}

//'Student' class -> inherits(extends) from the 'Person' class
class Student extends Person {
  constructor(studentAttributes) {
    //super connects studentAttributes to the 'Person' class
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listSubjects() {
    return console.log(`${this.favSubjects}`);
  }
  PRAssignment() {
    return console.log(`${this.name} has submitted a PR for ${this.subject}`);
  }
  sprintChallenge() {
    return console.log(
      `${this.name} has begun a sprint challenge on ${this.subject}`
    );
  }
}

//'Project Manager' class -> inherits(extends) from the 'Instructor' class
class Project extends Instructor {
  constructor(projectAttributes) {
    //super connects projectAttributes to the 'Instructor class
    super(projectAttributes);
    this.gradClassName = projectAttributes.gradClassName;
    this.favInstructor = projectAttributes.favInstructor;
  }
  standUp() {
    return console.log(
      `${this.name} announces to the ${this.channel}, @channel standy times}`
    );
  }
  debugsCode() {
    console.log(`${this.name} debugs ${this.name}`);
  }
}
