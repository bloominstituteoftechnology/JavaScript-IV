// CODE here for your Lambda Classes

class Person {
  constructor(PersonAttibutes) {
    this.name = PersonAttibutes.name;
    this.age = PersonAttibutes.age;
    this.location = PersonAttibutes.location;
    this.gender = PersonAttibutes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(InstructorAttibutes) {
    super(InstructorAttibutes);
    this.specialty = InstructorAttibutes.specialty;
    this.favLanguage = InstructorAttibutes.favLanguage;
    this.catchPhrase = InstructorAttibutes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade() {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(StudentAttributes) {
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground;
    this.className = StudentAttributes.className;
    this.favSubjects = StudentAttributes.favSubjects;
  }
  listSubjects() {
    //list subjects one by one
  }
  PRAssigment(subject) {
    console.log(`${Student.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${Student.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(ProjectManagerAttibutes) {
    super(ProjectManagerAttibutes);
    this.gradClassName = ProjectManagerAttibutes.gradClassName;
    this.favInstructor = ProjectManagerAttibutes.favInstructor;
  }
  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(Student, subject) {
    console.log(`${name} debugs ${Student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
