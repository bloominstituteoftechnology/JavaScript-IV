// CODE here for your Lambda Classes
//base-class declaration
class Person {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.location = personInfo.location;
    this.gender = personInfo.gender;
  }
  //methods
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//extended class Instructor from Person
class Instructor extends Person {
  constructor(insInfo) {
    super(insInfo);
    this.speciality = insInfo.speciality;
    this.favLanguage = insInfo.favLanguage;
    this.catchPhrase = insInfo.catchPhrase;
  }
  //methods
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

//extended class Student from Person
class Student extends Person {
  constructor(stuInfo) {
    super(stuInfo);
    this.previousBackground = stuInfo.previousBackground;
    this.className = stuInfo.className;
    this.favSubjects = stuInfo.favSubjects;
  }
  //methods
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

//extended class ProjectManager from Instructor
class ProjectManager extends Instructor {
  constructor(PMInfo) {
    super(PMInfo);
    this.gradClassName = PMInfo.gradClassName;
    this.favInstructor = PMInfo.favInstructor;
  }
  //methods
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
