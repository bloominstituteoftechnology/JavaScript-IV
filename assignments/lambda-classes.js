// CODE here for your Lambda Classes
class People {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends People {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.faveLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends People {
  constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.faveSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject){
    console.log(`${student.name} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.faveInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}
