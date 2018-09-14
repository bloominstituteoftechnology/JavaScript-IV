//base class
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.speciality = instructorProps.speciality;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade({student}, subject){
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
}


class Student extends Instructor {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubject = studentProps.favSubject;    
  }
  listsSubjects(){
    forEach.this.favSubject(function(subject){
      console.log(subject);
    });
  }
  PRAssignment(subject){
    console.log(`${student.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge() {
    console.log(`${student.name} has begun spring challenge on {subject}`);
  }
}


class ProjectManager extends Instructor {
  constructor(projectManagerProps) {
    super(projectManagerProps);
    this.gradClassName = projectManagerProps.gradClassName;
    this.favInstructor = projectManagerProp.favInstructor;
  }
  standUp(channel, subject) {
    console.log(`${this.name} announces to ${channel}, stand up time!`);
  }
  debugsCode(subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}