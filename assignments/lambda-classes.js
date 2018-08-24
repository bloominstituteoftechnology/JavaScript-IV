class Person {
    constructor(human){
      this.name = human.name;
      this.age = human.age;
      this.location = human.location;
      this.gender = human.gender;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
      //Can't seem to console.log speak function
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
    grade(subject){
      return `${this.name} receives a perfect score on ${subject}`
    }
  }
  
  class Student extends Instructor {
    constructor (learner){
      super(learner)
      this.previousBackground = learner.previousBackground;
      this.className = learner.className;
      this.favSubjects = learner.className;
    }
    listsSubjects(obj){
      for (let i = 0; i < this.favSubjects; i++){
      return listsSubjects(this.favSubjects[i]);
      }
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
  
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
  console.log(fred);
  // console.log(Person.fred.speak);
  
  const bob = new Student({
    name: 'Bob',
    location: 'Tulsa',
    age: 21,
    gender: 'male',
    previousBackground: 'Cat Whisperer',
    className: 'CSPT2',
    favSubjects: ['HTML', 'CSS', 'JS'],
    //^^^^ needs debugging. Won't return the array, and thinks CSPT2 is a subject
  });
  
  console.log(bob);
  console.log(bob.listsSubjects([this.favSubjects]));
  console.log(bob.PRAssignment('CSS'));
  console.log(bob.grade('CSS'));
  
  const dio = new ProjectManager({
    name: 'Dio',
    location: 'Hell',
    gradClassName: 'CS1',
    favInstructor: 'Ozzy',
  });
  
  console.log(dio);
  console.log(dio.standUp('CSPT2'));
  console.log(dio.debugsCode(bob, 'CSS'));
  //needs debugging. Looks like an inheritance problem