// CODE here for your Lambda Classes

//* Person Class
class Person {
  constructor (props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


//* Instructor Class <- Person
class Instructor extends Person {
  constructor (instructorProps) {
    super (instructorProps)
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo (subject) {
    return `Today we are learning about ${subject}`;
  }
  grade (student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}


//* Student Class <- Person
class Student extends Person {
  constructor (studentProps) {
    super (studentProps)
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }
  listsSubjects () {
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun spring challenge on ${subject}`
  }
}


//* Project Manager <- Instructor
class ProjectManager extends Instructor {
  constructor(pmProps) {
    super (pmProps)
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
    this.standUp = pmProps.standUp;
  }
  debugsCode (student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}



