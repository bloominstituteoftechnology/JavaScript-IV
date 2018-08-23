// CODE here for your Lambda Classes
class Person {
  constructor (person_attributes) {
    this.name = person_attributes.name;
    this.age = person_attributes.age;
    this.location = person_attributes.location;
    this.gender = person_attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person{
  constructor (instructor_attributes){
    super(instructor_attributes);
    this.specialty = instructor_attributes.specialty;
    this.favLanguage = instructor_attributes.favLanguage;
    this.catchPhrase = instructor_attributes.catchPhrase;
}
  demo (subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(studentObj, subject) {
    `${studentObj.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor (student_attributes) {
    super(student_attributes);
    this.previousBackground = student_attributes.previousBackground;
    this.classname = student_attributes.classname;
    this.favSubjects = student_attributes.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach(function(element){
      console.log(element + '\n');
      console.log(` Template literal says: ${element}\n`);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}


class ProjectManager extends Instructor {
  constructor (projectManager_attributes) {
    super(projectManager_attributes);
    this.gradClassName = projectManager_attributes.gradClassName;
    this.favInstructor = projectManager_attributes.favInstructor;
  }
  standUp (slackChannel){
    return `${this.name} announces to ${slackChannel}, at @channel standy times`;
  }
  debugsCode (studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
  }
}

