// CODE here for your Lambda Classes
class Person {
  constructor(personAttributes) {
      this.name = personAttributes.name;
      this.age = personAttributes.age;
      this.location = personAttributes.location;
      this.gender = personAttributes.gender;
  }

  speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class Instructor extends Person {
  constructor(insAttributes) {
    super(insAttributes);
    this.specialty = insAttributes.specialty;
    this.favLanguage = insAttributes.favLanguage;
    this.catchPhrase = insAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(stuAttributes) {
    super(stuAttributes);
    this.previousBackground = stuAttributes.previousBackground;
    this.className = stuAttributes.className;
    this.favSubjects = stuAttributes.favSubjects;
  }

  
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(`One of ${this.name}'s favorite subject is ${this.favSubjects[i]}.`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
