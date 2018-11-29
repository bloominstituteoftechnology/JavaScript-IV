// CODE here for your Lambda Classes
 
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak () {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(InstructorAttrs) {
    super(InstructorAttrs);
    this.specialty = InstructorAttrs.specialty;
    this.favLanguage = InstructorAttrs.favLanguage;
    this.catchPhrase = InstructorAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade (student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(StudentAttrs) {
    super(StudentAttrs);
    this.previousBackground = StudentAttrs.previousBackground;
    this.className = StudentAttrs.className;
    this.favSubjects = StudentAttrs.favSubjects;
  }
  listsSubjects () {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}






const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const scott = new Student ({
  name: 'Scott',
  location: 'Seattle',
  age: 25,
  gender: 'male',
  previousBackground: 'Sales and Operations',
  className: "FSW16",
  favSubjects: "JavaScript"
})

console.log(fred.name);
console.log(fred.demo("CSS"));
console.log(fred.grade(scott, "HTML"));
console.log(scott.name);
console.log(scott.listsSubjects());
console.log(scott.PRAssignment("JS IV"));
console.log(scott.sprintChallenge("JavaScript"));
