// CODE here for your Lambda Classes

class Person {
  constructor(personAtr) {
    this.name = personAtr.name;
    this.age = personAtr.age;
    this.location = personAtr.location;
    this.gender = personAtr.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructAtr){
    super(instructAtr);
    this.specialty = instructAtr.specialty;
    this.favLanguage = instructAtr.favLanguage;
    this.catchPhrase = instructAtr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(studentAtr) {
    super(studentAtr);
    this.previousBackground = studentAtr.previousBackground;
    this.className = studentAtr.className;
    this.favSubjects = studentAtr.favSubjects;
  }
  listsSubjects() {
    console.log(this.favSubjects.forEach((item)=>item))
  }
  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(pmAtr){
    super(pmAtr);
    this.gradClassName = pmAtr.gradClassNam;
    this.favInstructor = pmAtr.favInstructor;
  }
  standUp(slackChannel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}