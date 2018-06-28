// CODE here for your Lambda Classes

// ***** Person Class *****
class Person {
  constructor (info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
    this.gender = info.gender;
  }

  speak () {
    console.log(`Hello my name is ${this.name}, I am from Bedrock`);
  }
}

//***** Instructor Class *****
class Instructor extends Person {
  constructor (info) {
    super(info);
    this.specialty = info.specialty;
    this.favLanguage = info.favLanguage;
    this.catchPhrase = info.catchPhrase;
  }

  demo (subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade (student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

// *****Student Class *****
class Student extends Person {
  constructor (info) {
    super(info);
    this.previousBackground = info.previousBackground;
    this.className = info.className;
    this.favSubjects = info.favSubjects;
  }

  listsSubjects () {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge (subjec) {
    console.log(`${this.name} has begun spring challenge on ${subject}`);
  }
}

// ***** Project Manager Class *****
class ProjectManager extends Instructor {
  constructor (info) {
    super(info);
    this.gradClassName = info.gradClassName;
    this.favInstructor = info.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`);
  }
}
