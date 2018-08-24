// CODE here for your Lambda Classes

class Person {
    constructor(human){
      this.name = human.name;
      this.age = human.age;
      this.location = human.location;
      this.gender = human.gender;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
  };
  
  // console.log(Person);
  
  class Instructor extends Person {
    constructor(teacher){
      super(teacher)
      this.specialty = teacher.specialty;
      this.favLanguage = teacher.favLanguage;
      this.catchPhrase = teacher.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${'subject'}.`
    }
  }
  
  class Student extends Instructor {
    constructor (learner){
      super(learner)
      this.previousBackground = learner.previousBackground;
      this.className = learner.className;
      this.favSubjects = learner.className;
    }
    listSubjects(){
      console.log(this.favSubjects);
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on {subject}`
    }
  }