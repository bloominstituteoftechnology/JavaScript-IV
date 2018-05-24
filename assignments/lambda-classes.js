// CODE here for your Lambda Classes
var me;
class Person {
  constructor(args) {
    this.name = args.name;
    this.age = args.age;
    this.location = args.location;
    this.gender = args.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorArgs) {
    super(instructorArgs);
    this.specialty = instructorArgs.specialty;
    this.favLanguage = instructorArgs.favLanguage;
    this.catchPhrase = instructorArgs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentArgs) {
    super(studentArgs);
    this.previousBackground = studentArgs.previousBackground;
    this.className = studentArgs.className;
    this.favSubjects = studentArgs.favSubjects;
  }

  listsSubjects() {
    return this.favSubjects.reduce((allSubs, currSub) => allSubs + '\n' + currSub);
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerArgs) {
    super(projectManagerArgs);
    this.gradClassName = projectManagerArgs.gradClassName;
    this.favInstructor = projectManagerArgs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const alexis = new Student({
  name: 'Alexis',
  age: 40,
  location: 'Hollywood',
  gender: 'female',
  previousBackground: 'Interpretive Dance',
  className: 'CS11',
  favSubjects: ['iPhone Development','Japanese Woodblock Printing','Auto Repair']
});

const fred = new Instructor({
  name: 'Fred',
  age: 37,
  location: 'Bedrock',
  gender: 'male',
  specialty: 'Front-end',
  favLanguage: 'JavaScript',
  catchPhrase: `Don't forget the homies`
});

const dante = new ProjectManager({
  name: 'Dante',
  age: 95,
  location: 'Tokyo',
  gender: 'male',
  gradClasssName: 'CS1',
  favInstructor: 'Josh'
});

console.log('Instructor speak:', fred.speak());
console.log('Instructor demo:', fred.demo('Classes'));
console.log('Instructor grade:', fred.grade(alexis, 'UI/UX'));

console.log('Student speak:', alexis.speak());
console.log('Student listsSubjects:', alexis.listsSubjects());
console.log('Student PRAssignment:', alexis.PRAssignment('Responsive Design'));
console.log('Student sprintChallenge:', alexis.sprintChallenge('Latin Dance'));

console.log('ProjectManager speak:', dante.speak());
console.log('ProjectManager standUp:', dante.standUp('#CS11_dante'));
console.log('ProjectManager debugsCode:', dante.debugsCode(alexis, 'Advanced Selfie'));


