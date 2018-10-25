// CODE here for your Lambda Classes
//
class Person {
  constructor(personProps) {
    this.name = personProps.name;
    this.age = personProps.age;
    this.location = personProps.location;
    this.gender = personProps.gender;
  }

  speak() {
    return console.log(
      `Hello my name is ${this.name}, I am from ${this.location}.`,
    );
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.language;
    this.catchPhrase = instructorProps.catchPhrase;
  }

  demo(subject) {
    return console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    return console.log(
      `${student.name} receives a perfect score on ${subject}`,
    );
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }

  listsSubjects() {
    return this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(prProps) {
    super(prProps);
    this.gradClassName = prProps.gradClassName;
    this.favInstructor = prProps.favInstructor;
  }

  standUp(channel) {
    return console.log(
      `${this.name} announces to ${channel}, @${channel} standup times!`,
    );
  }

  debugsCode(student) {
    return console.log(
      `${this.name} debugs {student.name}'s code on ${this.subject}'`,
    );
  }
}
