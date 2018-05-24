
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}. I am from ${this.location}`;
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
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} received a perfect score on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel} standy times!`;
  }
  debugsCode(student, subject) {
    return `${student.name}'s code on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

const ciara = new Student({
  name: "Ciara",
  age: 31,
  location: 'NJ',
  gender: 'F',
  previousBackground: 'Web Developer',
  className: 'CS11',
  favSubjects: ['HTML', 'CSS', 'Python', 'Data Science']
});

const jon = new Student({
  name: "Jon",
  age: 29,
  location: 'WY',
  gender: 'M',
  previousBackground: 'Office Assistant',
  className: 'CS18',
  favSubjects: ['JavaScript', 'Ruby on Rails', 'MySQL']
});

console.log(ciara);
console.log(jon);
