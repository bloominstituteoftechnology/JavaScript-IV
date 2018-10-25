// CODE here for your Lambda Classes
class Person {
  constructor(attribs) {
    this.name = attribs.name;
    this.age = attribs.age;
    this.location = attribs.location;
    this.gender = attribs.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attribs) {
    super(attribs)
    this.specialty = attribs.specialty;
    this.favLanguage = attribs.favLanguage;
    this.catchPhrase = attribs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(attribs) {
    super(attribs)
    this.previousBackground = attribs.previousBackground;
    this.className = attribs.className;
    this.favSubjects = attribs.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(x => console.log(x));
}
  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge() {
    return `${student.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(attribs) {
    super(attribs)
    this.gradClassName = attribs.gradClassName;
    this.favInstructor = attribs.favInstructor;
  }
  standup(channel) {
    return `${name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject ) {
    return `${name} debugs ${student.name}'s code on ${subject}`
  }
}