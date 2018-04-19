// CODE here for your Lambda Classes

// ==== Person ====
class Person {
  constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// ==== Instructor ====
class Instructor extends Person {
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

// ==== Student ====
class Student extends Person {
  constructor(studentAttributes){
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach(x => console.log(x));
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun the sprint challenge on ${subject}.`;
  }
}

// ==== Project Manager ====
class ProjectManager extends Instructor {

}