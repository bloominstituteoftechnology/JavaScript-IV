// CODE here for your Lambda Classes
class Person {
    constructor(atributes) {
      this.name = atributes.name;
      this.age = atributes.age;
      this.location = atributes.location;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  
  
  
  class Instructors extends Person {
    constructor(instructorAttrs) {
      super(instructorAttrs);
      this.specialty =instructorAttrs.specialty;
      this.favLanguage = instructorAttrs.favLanguage;
      this.catchPhrase =  instructorAttrs.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
      console.log(`${this.name} receives a perfect score on ${subject}`);
    }
  }
  
  
  
  class students extends Person {
    constructor(studentAttrs) {
      super(studentAttrs);
      this.previousBackground = studentAttrs.previousBackground;
      this.className = studentAttrs.className;
      this.favSubjects = studentAttrs.favSubjects;
  
    }
    listsSubjects() {
      console.log(this.favSubjects); //how to log favoriteSubjects one by one
    }
    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
  }
  
  
  
  class ProjectManagers extends Instructors {
    constructor(pmAttrs) {
      super(pmAttrs);
      this.gradClassName = pmAttrs.gradClassName;
      this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
  }
  
  const fred = new ProjectManagers ({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'webPT10',
    favInstructor: 'Keiran'
  });