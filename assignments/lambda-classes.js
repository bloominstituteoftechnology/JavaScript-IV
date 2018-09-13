// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchphrase = instructorProps.catchphrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  changeGrade(student) {
    let sign = ['+','-'][Math.floor(Math.random() * 2)];
    let points = Math.floor(Math.random() * 11);
    console.log(sign)
    student.grade += points;
    return `${this.name} changed ${student.name}'s grade by ${points} points!`
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
    this.grade = 88;
  }
  listSubjects() {
    return this.favSubjects.forEach(subject => subject);
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    return this.grade > 70 ? `You've graduated! Congrats!` : `Get back to your studies scrub!`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const student = new Student({
  name: 'Peter Pham',
  age: 26,
  location: 'Colorado',
  gender: 'male',
  previousBackground: 'Pharmacy',
  className: 'FSW14',
  favSubjects: ['React.js','Python']
})

const projectManager = new ProjectManager ({
  name: 'Luis Martinez',
  age: '23',
  location: 'California',
  gender: 'male',
  specialty: 'CSS',
  favLanguage: 'JavaScript',
  catchphrase: 'I\'ll catch you all later then.',
  gradClassName: 'FSW11',
  favInstructor: 'Josh Knell'
})

console.log(student.speak());
console.log(student.listSubjects());
console.log(student.PRAssignment('Python'));
console.log(student.sprintChallenge('JavaScript'));
console.log(student.graduate())
console.log(projectManager.speak());
console.log(projectManager.demo('JavaScript'));
console.log(projectManager.grade(student, 'HTML'))
console.log(projectManager.changeGrade(student))
console.log(projectManager.standUp('@fsw_luis'));
console.log(projectManager.debugsCode(student,'CSS'))