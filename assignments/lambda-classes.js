// CODE here for your Lambda Classes

// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.

//==================================== Person Class =====================================

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

//==================================== Instructor Class =====================================

class Instructors extends Person {
  constructor(instAttributes) {
    super(instAttributes);
    this.specialty = instAttributes.specialty;
    this.favLanguage = instAttributes.favLanguage;
    this.catchPhrase = instAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

//==================================== Student Class =====================================

class Students extends Person {
  constructor(studAttributes) {
    super(studAttributes);
    this.previousBackground = instAttributes.previousBackground;
    this.className = instAttributes.className;
    this.favSubjects = instAttributes.favSubjects;
  }
  listsSubjects(student) {
    console.log(`${this.name}'s favorite subjects is ${this.favSubjects}`);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

//==================================== Project Manager Class =====================================

class ProjectManager extends Instructors {
  constructor(pmAtrributes) {
    super(pmAtrributes);
    this.gradClassName = pmAtrributes.gradClassName;
    this.favInstructor = pmAtrributes.favInstructor;
  }
  standup(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${this.name}'s code on ${subject}`);
  }
}
