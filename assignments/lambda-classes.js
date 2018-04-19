// CODE here for your Lambda Classes
class Person {
  constructor(personAttributes){
  this.name = personAttributes.name;
  this.age = personAttributes.age;
  this.location = personAttributes.location;
  this.gender = personAttributes.gender;
  }
 speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(intructorAttributes) {
  super(intructorAttributes);
  this.specialty = intructorAttributes.specialty;
  this.favLanguage = intructorAttributes.fav.Language;
  this.catchPhrase = intructorAttributes.catchPhrase;
  }
  demo(subject) {
  	return `Today we are learning about ${this.subject}`;
  }
  
  grade(student, subject) {
  	return `${student.name} recieves a perfect score on ${this.subject}`;
  }
}

class Student extends Instructor {
  constructor(studentAttributes) {
  super(studentAttributes);
  this.previousBackground = studentAttributes.previousBackground;
  this.className = studentAttributes.className;
  this.favSubject = studentAttributes.favSubject;
  }
  listsSubject() {
    let allFavSubjects = [];
    this.forEach((element) => {
    allFavSubjects.push(`${element.favSubject}`);
});
}
  PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge () {
    return `${this.name} has begun sprint challenge on ${this.subject}`;
  } 
}

class ProjectManager extends Student {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${this.slackChannel}, @channel standby times!`
  }

  debugsCode(Student, subject) {
    return `${this.name} debugs ${student.name}'s code on {*-}`
  }
}