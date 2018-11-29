// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(
      `Hello my name is ${this.name}, and I am from ${this.location}.`
    );
  }
}

class Instructor extends Person {
  constructor(instructAttrbs) {
    super(instructAttrbs);
    this.speciality = instructAttrbs.speciality;
    this.favLanguage = instructAttrbs.favLanguage;
    this.catchPhrase = instructAttrbs.catchPhrase;
  }

  demo(string) {
    console.log(`Today we are learning about ${string}.`);
  }

  grade(subject) {
    console.log(`${this.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttrbs) {
    super(studentAttrbs);
    this.previousBackground = studentAttrbs.previousBackground;
    this.className = studentAttrbs.className;
    this.favSubjects = studentAttrbs.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
}

class PM extends Instructor {
  constructor(PMAttrbs) {
    super(PMAttrbs);
    this.gradClassName = PMAttrbs.gradClassName;
    this.favInstructor = PMAttrbs.favInstructor;
  }

  standUp(channel) {}
}
