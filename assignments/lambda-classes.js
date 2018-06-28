// CODE here for your Lambda Classes
class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak(){
    console.log(`Hello, my name is ${this.name},
    I am from ${this.location}.`)
  }
}

class Instructor extends Person {
    constructor(instructorAttributes){
      super(instructorAttributes);
      this.specialty = instructorAttributes.specialty;
      this.favLanguage = instructorAttributes.favLanguage;
      this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(){
      console.log(`Today we are learning about ${subject}`)
    }
    grade(){
      console.log(`${this[student].name} recieves a perfect score on ${subject}`)
    }
}

  class Student extends Person {
    constructor(studentAttributes){
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
      this.listsSubjects = studentAttributes.listsSubject;
    }
    PRAssignment(){
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(){
      console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
  }

  
