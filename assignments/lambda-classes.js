// CODE here for your Lambda Classes

// ===Base Class===
class Person {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
    this.gender = info.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// ===Instructor Class===

class Instructor extends Person {
  constructor(instructorInfo) {
    super(instructorInfo);
    this.specialty = instructorInfo.specialty;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`;
  }
}

// ===Student Class===

class Student extends Person {
  constructor(studentInfo) {
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}`;
  }
}

// ===Project Manager Class===

class ProjectManager extends Instructor {
  constructor(projectManagerInfo) {
    super(projectManagerInfo);
    this.gradClassName = projectManagerInfo.gradClassName;
    this.favInstructor = projectManagerInfo.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const josh = new Instructor({
  name: 'Josh',
  location: 'California',
  age: 32,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Boom!!`
});

const kevin = new Student({
  name: 'Kevin',
  location: 'Tulsa, OK',
  age: 23,
  gender: 'male',
  previousBackground: 'Woodworking',
  favSubjects: 'JavaScript, HTML, CSS',
  className: 'CS13'
});

const michelle = new Student({
  name: 'Michelle',
  location: 'Oklahoma',
  age: 32,
  gender: 'female',
  previousBackground: 'Banking',
  favSubjects: 'HTML, CSS',
  className: 'CS13'
});

const jason = new ProjectManager({
  name: 'Jason',
  location: 'Oklahoma',
  age: 33,
  gender: 'male',
  gradClassName: 'CS8',
  favInstructor: 'Josh'
});

const makayla = new ProjectManager({
  name: 'Makayla',
  location: 'Wisconsin',
  age: 24,
  gender: 'female',
  gradClassName: 'CS6',
  favInstructor: 'Dan'
});

console.log(fred.location);
console.log(kevin.sprintChallenge('javascript'));
console.log(josh.grade(kevin, 'javascript'));
console.log(jason.debugsCode(kevin, 'Python'));
console.log(makayla.speak());
console.log(kevin.listsSubjects());
console.log(jason.standUp('#cs13_jason'));
console.log(josh.demo('JavaScript Classes'));
console.log(kevin.PRAssignment('Javascript-II'));
console.log(michelle.listsSubjects());
