/*
  === Person ===
  * name
  * age
  * location
  * gender
  * speak() // returns the string: 'Hello my name is <name>, I am from <location>.'
*/
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

/*
  === Instructor ===
  Inherit from Person
  * specialty
  * favLanguage
  * catchPhrase
  * demo(subject) // returns the phrase: 'Today we are learning about <subject>'
  * grade(student, subject) // returns the phrase: '<student.name> receives a perfect score on <subject>'
*/
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

/*
  === Student ===
  Inherit from Person
  * previousBackground
  * className
  * favSubjects
  * listSubjects() // logs out the student's favorite subject one by one.
  * PRAssignment(subject) // logs out the phrase: '<student.name> has submitted a PR for <subject>'
  * sprintChallenge(student, subject) // logs out the phrase: '<student.name> has begun sprint challenge on <subject>'
*/
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach(e => console.log(e));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

/*
  === ProjectManager ===
  Inherit from Instructor
  * gradClassName
  * favInstructor
  * standUp(channel) // logs out the phrase '<name> announces to <channel>, @channel standy times!'
  * debugsCode(student, subject) // logs out the phrase: '<name> debugs <student.name>'s code on <subject>'
*/
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
