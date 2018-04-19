// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
      this.gender = attributes.gender;
      this.age = attributes.age;
      this.name = attributes.name;
      this.location = attributes.location;
    }
    speak() {
      return `Hello, my name is ${this.name},  I am from ${this.location}`;
    }
}
  

class Instructor extends Person {
    constructor(attributes) {
      super(attributes);
      this.specialty = attributes.specialty;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i ++){
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}