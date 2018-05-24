// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(skills) {
    super(skils);
    this.specialty = skills.specialty;
    this.favLanguage = skills.favLanguage;
    this.catchPrase = skills.catchPrase;
  }
  demo(str) {
    console.log(`Today we are learning about ${str}`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class student extends Instructor {
  constructor(properties) {
    super(properties);
    this.previousBackground = properties.previousBackground;
    this.className = properties.className;
    this.favSubjects = properties.favSubjects;
  }
  listSubjects() {
    for (var subject in favSubjects) {
      console.log(subject)
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun a sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(pmskills) {
    super(pmskills);
    this.gradClassName = pmskills.gradClassName;
    this.favInstructor = pmskills.favInstructor;
  }
  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`)
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`)
  }
}
