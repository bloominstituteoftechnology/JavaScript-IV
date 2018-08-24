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
    listsSubjects(){
      favSubjects.forEach(function(item){
      copy.push(item) 
      })
    };
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on {subject}`
    }
  }
  
  class ProjectManager extends Student {
    constructor (PM) {
      super(PM) 
      this.gradClassName = PM.gradClassName;
      this.favInstructor = PM.favInstructor;
    }
    standUp(channel){
      return `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(subject){
      return `${this.name} debuggs ${this.name}'s code on ${subject}.`
    }
  }