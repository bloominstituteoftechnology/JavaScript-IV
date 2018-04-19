// CODE here for your Lambda Classes

class Person {
  constructor(base){
    this.name = base.name;
    this.age = base.age;
    this.location = base.location;
    this.gender = base.gender;
  };
  speak(){
    return `Hello, my name is ${this.name}, I am from ${this.location}.`
  };
};

class Instructor extends Person{
  constructor(instructorBase){
    super(instructorBase);
    this.specialty = instructorBase.specialty;
    this.favLanguage = instructorBase.favLanguage;
    this.catchPhrase = instructorBase.catchPhrase;
  };
  demo(subject){
    return `Today we are learning about ${subject}.`
  };
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`
  };
};

class Student extends Person {
  constructor(studentBase){
    super(studentBase);
    this.previousBackground = studentBase.previousBackground;
    this.className = studentBase.className;
    this.favSubjects = studentBase.favSubjects;
  };
  listsSubjects(){
    this.favSubjects.forEach(i => {
      return i;
    });
  };
  PRAssignment(subject){
    return `${student.name} has submitted a PR for ${subject}.`
  };
  sprintChallenge(subject){
    return `${student.name} has begun sprint challenge on ${subject}.`
  };
};

class ProjectManagers extends Instructors {
  constructor(pmBase) {
    super(pmBase);
    this.gradClassName = pmBase.gradClassName;
    this.favInstructor = pmBase.favInstructor;
  };
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  };
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on {subject}`;
  };
};