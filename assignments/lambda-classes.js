// CODE here for your Lambda Classes
class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts. age;
        this.location = atts.location;
        this.gender = atts.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}

class Instructor {
  constructor(instrAtts) {
      super(Person);
      this.specialty = instrAtts.specialty;
      this.favLanguage = instrAtts.favLanguage;
      this.catchPhrase = instrAtts.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student {
    constructor(studAtts) {
        super(Person);
        this.previousBackground = studAtts.previousBackground;
        this.className = studAtts.className;
        this.favSubjects = studAtts.favSubjects
    }
    listSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers {
    constructor(PRAtts) {
        super(Instructor);
        this.gradClassName = PRAtts.gradClassName;
        this.favInstructor = PRAtts.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}