// CODE here for your Lambda Classes
//base-class declaration
class Person {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.location = personInfo.location;
    this.gender = personInfo.gender;
  }
  //methods
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//extended class Instructor from Person
class Instructor extends Person {
  constructor(insInfo) {
    super(insInfo);
    this.speciality = insInfo.speciality;
    this.favLanguage = insInfo.favLanguage;
    this.catchPhrase = insInfo.catchPhrase;
  }
  //methods
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

//extended class Student from Person
class Student extends Person {
  constructor(stuInfo) {
    super(stuInfo);
    this.previousBackground = stuInfo.previousBackground;
    this.className = stuInfo.className;
    this.favSubjects = stuInfo.favSubjects;
  }
  //methods
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

//extended class ProjectManager from Instructor
class ProjectManager extends Instructor {
  constructor(PMInfo) {
    super(PMInfo);
    this.gradClassName = PMInfo.gradClassName;
    this.favInstructor = PMInfo.favInstructor;
  }
  //methods
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const josh = new Instructor({
  name: "Josh",
  location: "Utah",
  age: 29,
  gender: "male",
  favLanguage: "JavaScript",
  speciality: "dropping knowledge bombs",
  catchPhrase: "Let's look in the guts of our Children, guys"
});

const bizarroJosh = new Instructor({
  name: "Bizarro Josh",
  location: "Australia",
  age: 92,
  gender: "male",
  favLanguage: "colonial French",
  speciality: "being totally different from regular Josh. Also whittling",
  catchPhrase: "man do I hate coding, guys"
});

const adam = new Student({
  name: "Adam",
  location: "Round Rock",
  age: 29,
  gender: "male",
  previousBackground: "retail management",
  className: "FSW14",
  favSubjects: ["JavaScript", "Html", "CSS"]
});

const feratu = new Student({
  name: "Coach Feratu",
  location: "inside your house",
  age: 327,
  gender: "male",
  previousBackground: "vampire management",
  className: "FSW14",
  favSubjects: ["RubyRedBlood", "CoffinScript", "SharpPerlyWhites"]
});

const jeff = new ProjectManager({
  name: "Jeff",
  location: "California(I think)",
  age: 29,
  gender: "male",
  gradClassName: "FSW14",
  favInstructor: "Josh, probably"
});

const kamry = new ProjectManager({
  name: "Kamry",
  location: "somewhere that uses Mountain Time Zone",
  age: 29,
  gender: "male",
  gradClassName: "FSW14",
  favInstructor: "Josh, probably"
});

//tests
console.log(josh.speciality); //dropping knowledge bombs
console.log(josh.catchPhrase); //Let's look in the guts of our Children, guys
josh.speak(); //Hello my name is Josh, I am from Utah
bizarroJosh.demo("preprocessors"); //Today we are learning about preprocessors
console.log(adam.favSubjects); // ['JavaScript', 'Html, 'CSS']
feratu.sprintChallenge("Bloodsucking"); // Coach Feratu has begun sprint challenge on Bloodsucking
jeff.standUp("fsw14_jeff"); //Jeff announces to fsw14_jeff, @channel standy times!
kamry.debugsCode(adam, "constructors"); //Kamry debugs Adam's code in constructors
