// CODE here for your Lambda Classes

class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(options) {
    super(options);
    this.specialty = options.specialty;
    this.favLanguage = options.favLanguage;
    this.catchPhrase = options.catchPhrase;
  }

  demo(str) {
    console.log(`Today we are learning about ${str}`);
  }

  grade(stuObj, subjectStr) {
    console.log(`${stuObj.name} receives a perfect score on ${subjectStr}.`);
  }
}

class Student extends Person {
  constructor(options) {
    super(options);
    this.previousBackground = options.previousBackground;
    this.className = options.className;
    this.favSubjects = options.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach( subject => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}`);
  }

}