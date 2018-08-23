// CODE here for your Lambda Classes
class Person{
    constructor(obj){
      this.name = obj.name;
      this.age = obj.age;
      this.location = obj.location;
    }
    speak(){
      console.log(`Hello my name is ${this.name}. I am from ${this.location}.`)
    }
  }
  
  class Instructor extends Person{
    constructor(obj){
      super(obj);
      this.specialty = obj.specialty;
      this.favLanguage = obj.favLanguage;
      this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
      return `${student} receives a perfect score on ${subject}.`
    }
  }
  
  class Student extends Person{
    constructor(obj){
      super(obj);
      this.previousBackground = obj.previousBackground;
      this.className = obj.className;
      this.favSubjects = obj.favSubjects;
    }
    listsSubjects(arr){
      for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
      }
    }
    PRAssignment(subject){
      return(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
      return(`${this.name} has begun sprint challenge on ${subject}.`)
    }
  }
  
  class ProjectManager extends Instructor{
    constructor(obj){
      super(obj);
      this.gradClassName = obj.gradClassName;
      this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
      return(`${this.name} announces to ${channel}, @channel standUp times!`);
    }
    debugsCode(student, subject){
      return(`${this.name} debugs ${student} code on ${subject}`);
    }
  }
  
  const Tristan = new Person({
    name: "Tristan",
    age:400,
    location: "Don't worry about it",
  });
  
  const Rodrigo = new Instructor({
    name: "Rodrigo",
    age: 12,
    location: "Here",
    specialty: "nothing",
    favLanguage: "Pig Latin",
    catchPhrase: "Shasta!",
  
  
  })
  
  const Geoff = new Student({
    name: "Geoff",
    age: 16,
    location:"Sioux Falls",
    previousBackground: "none",
    className: "CSPT2",
    favSubjects: [
      "Manga",
      "Karate",
      "Waxing Surfboards",
    ]
  })
  
  const SprohnJaul = new ProjectManager({
    name: "SprohnJaul",
    age: "IDK",
    location: "Somewhere, U.S.",
    specialty: "everything",
    favLanguage: "Portuguese",
    catchPhrase: "Boom goes the dynamite!",
    gradClassName: "CS3000",
    favInstructor: "Himself",
  })
  
  
  
  console.log(Tristan.speak());
  console.log(Rodrigo.grade("Geoff", "stuff"));
  console.log(Rodrigo.demo("nothing"));
  console.log(Geoff.location);
  console.log(Geoff.PRAssignment("Javascript"))
  console.log(Geoff.sprintChallenge("HTML"));
  
  console.log(Geoff.speak());
  console.log(SprohnJaul.standUp("My channel"));
  console.log(SprohnJaul.debugsCode("Robert", "Javascript"));
  
  console.log(Geoff.listsSubjects(Geoff.favSubjects));