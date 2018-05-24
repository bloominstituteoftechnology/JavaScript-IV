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

class Instructor extends Person {
  constructor(instructAttributes) {
    super(attributes);
    this.specialty = instructAttributes.specialty;
    this.favLanguage = instructAttributes.favLanguage;
    this.catchPhrase = instructAttributes.catchPhrase;
  }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
  constructor(pmAttributes) {
    super(instructAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(attributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
    listsSubjects() {
      console.log(favSubjects.join(", "));
    }
    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
}   sprintChallenge(subject) {
      console.log(`${this.name} has begun the sprint challenge on ${subject}`);
}
