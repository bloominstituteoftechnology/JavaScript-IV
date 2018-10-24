// CODE here for your Lambda Classes
class Person {
  constructor(personAtt) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location =  personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak() {
    `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructors extends Person{
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Students extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listsSubjects() {
    //a method that logs out all of the student's favoriteSubjects one by one.
  }
  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructors {
  constructor(projectManagersAttr) {
    super(projectManagersAttr);
    this.gradClassName = projectManagersAttr.gradClassName;
    this.favInstructor = projectManagersAttr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const ins1 = new Instructor({
  name: '',
  location: '',
  age: ,
  gender: '',
  favLanguage: '',
  specialty: '',
  catchPhrase: ''
});

const ins2 = new Instructor({
  name: '',
  location: '',
  age: ,
  gender: '',
  favLanguage: '',
  specialty: '',
  catchPhrase: ''
});

const student1 = new Student({
  name: '',
  location: '',
  age: ,
  gender: '',
  previousBackground: '',
  className: '',
  favSubjects: ''
});

const student2 = new Student({
  name: '',
  location: '',
  age: ,
  gender: '',
  previousBackground: '',
  className: '',
  favSubjects: ''
});

const pm1 = new ProjectManagers({
  name: '',
  location: '',
  age: ,
  gender: '',
  favLanguage: '',
  specialty: '',
  catchPhrase: '',
  gradClassName: '',
  favInstructor: ''
});

const pm2 = new ProjectManagers({
  name: '',
  location: '',
  age: ,
  gender: '',
  favLanguage: '',
  specialty: '',
  catchPhrase: '',
  gradClassName: '',
  favInstructor: ''
});
