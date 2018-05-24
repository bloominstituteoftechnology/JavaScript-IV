// CODE here for your Lambda Classes
class Person{
  constructor(args){
    this.name = args.name;
    this.age = args.age;
    this.location = args.location;
    this.gender = args.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person{
  constructor(args){
    super(args);
    this.specialty = args.specialty;
    this.favLanguage = args.favLanguage;
    this.catchPhrase = args.catchPhrase;
  }
  demo(subject){
    return `today we are learning about ${subject}`;
  }
  grade(student,subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(args){
    super(args);
    this.previousBackground = args.previousBackground;
    this.className = args.className;
    this.favSubjects = args.favSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach((subject) => {
      console.log(subject);
    });
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(args){
    super(args);
    this.gradClassName = args.gradClassName;
    this.favInstructor = args.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standup times`);
  }
  debugsCode(student,subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

let callum = new ProjectManager({
  name: "Callum",
  age: 25,
  gender: "M",
  location: "San Francisco",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Good Job",
  gradClassName: "CS11",
  favInstructor: "Josh"
});

let tom = new Student({
  name: "Tom",
  age: 21,
  gender: "M",
  location: "wisconsin"
});

console.log(callum.debugsCode(tom,"math"));
