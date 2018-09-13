// CODE here for your Lambda Classes

class Person {
  constructor(peopleAttributes) {
    this.name = peopleAttributes.name;
    this.age = peopleAttributes.age;
    this.location = peopleAttributes.location;
    this.gender = peopleAttributes.gender;
  }

  speak() {
    return `Hello, my name is ${this.name}. I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(subject => subject);
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class PM extends Instructor {
  constructor(PMAttributes){
    super(PMAttributes);
    this.gradClassName = PMAttributes.gradClassName;
    this.favInstructor = PMAttributes.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}
