// CODE here for your Lambda Classes

class Person {
  constructor(PersonAttributes) {
    this.name = PersonAttributes.name;
    this.age =PersonAttributes.age;
    this.location = PersonAttributes.location;
    this.gender = PersonAttributes.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}
////////////////////////////////////////////////////////////////
class Instructor extends Person {
  constructor(InstrucAttributes) {
    super(InstrucAttributes);
      this.subject = InstrucAttributes.subject;
      this.favLanguage = InstrucAttributes.favLanguage;
      this.catchPhrase = InstrucAttributes.catchPhrase;
  }
  demo() {
    console.log(`Today we are learning about ${this.subject}`);
  }
  grade() {
    console.log(`${this.student.name} recieves a perfect score on ${this.subject}`);
  }
}
/////////////////////////////////////////////////////////////////////
class Student extends Person {
  constructor(StudAttributes) {
    super(StudAttributes);
      this.previousBackground = StudAttributes.previousBackground;
      this.className = StudAttributes.className;
      this.favSubjects = StudAttributes.favSubjects;
      this.subjects = StudAttributes.subjects;
  }
  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }
  PRAssignment() {
    console.log(`${this.student.name} has submitted a PR for ${this.subjects}.`);
  }
  sprintChallenge() {
    console.log(`${this.name} has begun the Sprint Challenge on ${this.subjects}.`);
  }
}
///////////////////////////////////////////////////////////////////////
class ProjectManager extends Instructor {
  constructor(PMAttributes) {
    super(PMAttributes);
      this.gradClassName = PMAttributes.gradClassName;
      this.favInstructor = PMAttributes.favInstructor;
      this.channel = PMAttributes.channel;
  }
  standUp() {
    console.log(`${this.name} announces to ${this.channel}, @channel Study Hard!!`);
  }
  dugbugCode() {
    console.log(`${this.name} debugs ${this.name}'s code on ${this.subject}.`);
  }
}

//Instructors
const instructorBob = new Instructor({
  name: "Bob Olive",
  age: 46,
  location: "Michigan",
  gender: "M",
  subject: "JS",
  favLanguage: ["JS", "HTML"],
  catchPhrase: "Holy Cow!",
});
const instructorMary = new Instructor({
  name: "Mary Turnner",
  age: 32,
  location: "Texas",
  gender: "F",
  subject: "CSS",
  favLanguage: ["CSS", "HTML"],
  catchPhrase: "Are you serious?!",
});
const instructorLilly = new Instructor({
  name: "Lilly Pendergan",
  age: 89,
  location: "Florida",
  gender: "F",
  subject: "HTML",
  favLanguage: ["CSS", "JS"],
  catchPhrase: "Huh?",
});

//Students
const studentKyle = new Student({
  name: "Kyle Lizardface",
  age: 19,
  location: "Utah",
  gender: "M",
  previousBackground: "highschool",
  className: "CS95",
  favSubjects:["HTML", "CSS"],
  subjects: "Js",
});
const studentMindy = new Student({
  name: "Mindy Moone",
  age: 24,
  location: "Paris",
  gender: "F",
  previousBackground: "no background in coding",
  className: "CS95",
  favSubjects:["HTML", "JS"],
  subjects: "CSS",
});
const studentBarb = new Student({
  name: "Barbra White",
  age: 32,
  location: "Colorado",
  gender: "F",
  previousBackground: "working at Saphora",
  className: "CS95",
  favSubjects:["HTML", "CSS"],
  subjects: "HTML",
});

//Project Managers
const pmTarzan = new ProjectManager ({
  name: "Tarzan Vineswinger",
  age: 33,
  location: "the Jungle",
  gender: "M",
  subject: "JS",
  favLanguage: ["JS", "HTML"],
  catchPhrase: "Welcome to the Jungle!",
  gradClassName: "CS1",
  favInstructor: "Lilly Pendergan",
  channel: "CS_Help",
});
const pmMiranda = new ProjectManager ({
  name: "Miranda Salazar",
  age: 27,
  location: "LA",
  gender: "F",
  subject: "LESS",
  favLanguage: ["LESS", "HTML"],
  catchPhrase: "Why you do dis?!!",
  gradClassName: "CS1",
  favInstructor: "Bob Olive",
  channel: "CS_Help",
});
const pmLouie = new ProjectManager ({
  name: "Louie Vanum",
  age: 869,
  location: "inside of a pickle jar",
  gender: "M",
  subject: "JS",
  favLanguage: ["JS", "HTML"],
  catchPhrase: "I didn't fart...",
  gradClassName: "CS1",
  favInstructor: "Mary Turnner",
  channel: "CS_Help",
});


console.log(pmLouie.standUp());
console.log(instructorMary.location);
console.log(pmTarzan.location);
console.log(studentMindy.location);

console.log(instructorBob.age);
console.log(pmMiranda.speak());
 console.log(instructorBob.demo());
 console.log(studentBarb.listsSubjects())
console.log(studentKyle.sprintChallenge());



