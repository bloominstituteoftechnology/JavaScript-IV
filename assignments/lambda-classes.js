// CODE here for your Lambda Classes
class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = `Don't forget the homies`;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(studentObject, subjectString) {
    return `${studentObject.name} receives a perfect score on ${subjectString}`;
  }
}

class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }

  PRAssignment(prSubject) {
    return `${this.name} has submitted a PR for ${prSubject}`;
  }

  sprintChallenge(sprintSubject) {
    return `${this.name} has begun sprint challenge on ${sprintSubject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmOptions) {
    super(pmOptions);
    this.gradClassName = pmOptions.gradClassName;
    this.favInstructor = pmOptions.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(studentObject, studentSubject) {
    return `${this.name} debugs ${studentObject.name}'s code on ${studentSubject}`;
  }
}
